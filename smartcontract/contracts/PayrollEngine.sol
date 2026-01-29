// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./interfaces/ITreasuryVault.sol";

contract PayrollEngine is Ownable, ReentrancyGuard {
    
    struct Employee {
        address wallet;
        uint256 salary;
        uint256 interval;
        uint256 lastPaid;
        bool isActive;
    }

    ITreasuryVault public treasuryVault;
    mapping(address => Employee) public employees;
    address[] public employeeList;

    event EmployeeAdded(address indexed wallet, uint256 salary, uint256 interval);
    event EmployeeUpdated(address indexed wallet, uint256 newSalary);
    event EmployeeRemoved(address indexed wallet);
    event PayrollExecuted(address indexed wallet, uint256 amount, uint256 timestamp);

    constructor(address _treasuryVault, address _initialOwner) Ownable(_initialOwner) {
        require(_treasuryVault != address(0), "Invalid vault address");
        treasuryVault = ITreasuryVault(_treasuryVault);
    }

    function addEmployee(address _wallet, uint256 _salary, uint256 _interval) external onlyOwner {
        require(_wallet != address(0), "Invalid wallet address");
        require(_salary > 0, "Invalid salary");
        require(_interval > 0, "Invalid interval");
        require(!employees[_wallet].isActive, "Employee already exists");

        employees[_wallet] = Employee({
            wallet: _wallet,
            salary: _salary,
            interval: _interval,
            lastPaid: block.timestamp, // Start vesting from now
            isActive: true
        });

        employeeList.push(_wallet);
        emit EmployeeAdded(_wallet, _salary, _interval);
    }

    function updateEmployee(address _wallet, uint256 _newSalary) external onlyOwner {
        require(employees[_wallet].isActive, "Employee does not exist");
        require(_newSalary > 0, "Invalid salary");

        employees[_wallet].salary = _newSalary;
        emit EmployeeUpdated(_wallet, _newSalary);
    }

    function removeEmployee(address _wallet) external onlyOwner {
        require(employees[_wallet].isActive, "Employee does not exist");

        employees[_wallet].isActive = false;
        
        // Remove from list (swap and pop)
        for (uint256 i = 0; i < employeeList.length; i++) {
            if (employeeList[i] == _wallet) {
                employeeList[i] = employeeList[employeeList.length - 1];
                employeeList.pop();
                break;
            }
        }

        emit EmployeeRemoved(_wallet);
    }

    /**
     * @dev Executes payroll for a batch of workers.
     * Pulls funds directly from the linked TreasuryVault.
     */
    function executePayroll(address[] calldata workers) external nonReentrant {
        for (uint256 i = 0; i < workers.length; i++) {
            address worker = workers[i];
            Employee storage emp = employees[worker];

            require(emp.isActive, "Employee not active");
            require(block.timestamp >= emp.lastPaid + emp.interval, "Payment interval not reached");

            uint256 amountToPay = emp.salary;
            emp.lastPaid = block.timestamp;

            // Trigger transfer from vault
            treasuryVault.executePayrollTransfer(worker, amountToPay);

            emit PayrollExecuted(worker, amountToPay, block.timestamp);
        }
    }

    function getEmployee(address _wallet) external view returns (Employee memory) {
        return employees[_wallet];
    }
}
