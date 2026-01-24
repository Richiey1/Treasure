// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/interfaces/IERC4626.sol";

interface ITreasuryVault is IERC4626 {
    
    struct SignerInfo {
        address signer;
        bool isActive;
        string name; // Optional: for dashboard display
    }

    struct Transaction {
        address to;
        uint256 value;
        bytes data;
        bool executed;
        uint256 approvalCount;
    }

    // Events
    event SignerAdded(address indexed signer, string name);
    event SignerRemoved(address indexed signer);
    event ThresholdUpdated(uint256 newThreshold);
    event TransactionProposed(uint256 indexed txId, address indexed proposer, address to, uint256 value, bytes data);
    event TransactionApproved(uint256 indexed txId, address indexed approver);
    event TransactionExecuted(uint256 indexed txId, address indexed executor);

    // Functions
    function addSigner(address _signer, string memory _name) external;
    function removeSigner(address _signer) external;
    function setThreshold(uint256 _threshold) external;
    
    function proposeTransaction(address _to, uint256 _value, bytes calldata _data) external returns (uint256);
    function approveTransaction(uint256 _txId) external;
    function executeTransaction(uint256 _txId) external payable;
    
    function isSigner(address _account) external view returns (bool);
    function getThreshold() external view returns (uint256);
}
