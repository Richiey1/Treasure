// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./interfaces/ITreasuryVault.sol";

contract TreasuryVault is ERC4626, Ownable, AccessControl, ReentrancyGuard, ITreasuryVault {
    
    // Roles
    bytes32 public constant SIGNER_ROLE = keccak256("SIGNER_ROLE");

    // Storage
    uint256 public threshold;
    mapping(address => SignerInfo) public signers;
    address[] public signerList;
    
    // Multi-sig Transactions
    uint256 public transactionCount;
    mapping(uint256 => Transaction) public transactions;
    mapping(uint256 => mapping(address => bool)) public isApproved; // txId => signer => approved

    constructor(
        IERC20 _asset, 
        string memory _name, 
        string memory _symbol,
        address _initialOwner,
        uint256 _threshold,
        address[] memory _initialSigners
    ) ERC4626(_asset) ERC20(_name, _symbol) Ownable(_initialOwner) {
        require(_threshold > 0 && _threshold <= _initialSigners.length, "Invalid threshold");
        
        threshold = _threshold;
        _grantRole(DEFAULT_ADMIN_ROLE, _initialOwner);

        for (uint256 i = 0; i < _initialSigners.length; i++) {
            _addSigner(_initialSigners[i], "");
        }
    }

    // --- Multi-sig Management ---

    function addSigner(address _signer, string memory _name) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(!signers[_signer].isActive, "Signer already exists");
        _addSigner(_signer, _name);
    }

    function removeSigner(address _signer) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(signers[_signer].isActive, "Not a signer");
        require(signerList.length - 1 >= threshold, "Cannot remove signer: threshold check failed");
        
        _revokeRole(SIGNER_ROLE, _signer);
        signers[_signer].isActive = false;
        
        // Remove from list (swap and pop)
        for (uint256 i = 0; i < signerList.length; i++) {
            if (signerList[i] == _signer) {
                signerList[i] = signerList[signerList.length - 1];
                signerList.pop();
                break;
            }
        }
        
        emit SignerRemoved(_signer);
    }

    function setThreshold(uint256 _threshold) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_threshold > 0 && _threshold <= signerList.length, "Invalid threshold");
        threshold = _threshold;
        emit ThresholdUpdated(_threshold);
    }

    function _addSigner(address _signer, string memory _name) internal {
        require(_signer != address(0), "Invalid signer address");
        _grantRole(SIGNER_ROLE, _signer);
        signers[_signer] = SignerInfo({
            signer: _signer,
            isActive: true,
            name: _name
        });
        signerList.push(_signer);
        emit SignerAdded(_signer, _name);
    }

    // --- Multi-sig Execution ---

    function proposeTransaction(address _to, uint256 _value, bytes calldata _data) external onlyRole(SIGNER_ROLE) returns (uint256) {
        uint256 txId = transactionCount;
        transactions[txId] = Transaction({
            to: _to,
            value: _value,
            data: _data,
            executed: false,
            approvalCount: 0
        });
        
        transactionCount++;
        emit TransactionProposed(txId, msg.sender, _to, _value, _data);
        
        // Auto-approve by proposer
        _approveTransaction(txId, msg.sender);
        
        return txId;
    }

    function approveTransaction(uint256 _txId) external onlyRole(SIGNER_ROLE) {
        _approveTransaction(_txId, msg.sender);
    }

    function _approveTransaction(uint256 _txId, address _approver) internal {
        Transaction storage txn = transactions[_txId];
        require(!txn.executed, "Transaction already executed");
        require(!isApproved[_txId][_approver], "Already approved");

        isApproved[_txId][_approver] = true;
        txn.approvalCount++;
        
        emit TransactionApproved(_txId, _approver);

        if (txn.approvalCount >= threshold) {
            executeTransaction(_txId);
        }
    }

    function executeTransaction(uint256 _txId) public payable nonReentrant {
        Transaction storage txn = transactions[_txId];
        require(!txn.executed, "Transaction already executed");
        require(txn.approvalCount >= threshold, "Threshold not met");

        txn.executed = true;
        (bool success, ) = txn.to.call{value: txn.value}(txn.data);
        require(success, "Transaction execution failed");

        emit TransactionExecuted(_txId, msg.sender);
    }

    // --- ERC4626 Overrides (Metadata Support) ---

    // We can emit extra events or store metadata for off-chain indexing
    event DepositWithMetadata(address indexed sender, address indexed receiver, uint256 assets, uint256 shares, string metadata);

    function depositWithMetadata(uint256 assets, address receiver, string calldata metadata) external returns (uint256) {
        uint256 shares = super.deposit(assets, receiver);
        emit DepositWithMetadata(msg.sender, receiver, assets, shares, metadata);
        return shares;
    }

    function mintWithMetadata(uint256 shares, address receiver, string calldata metadata) external returns (uint256) {
        uint256 assets = super.mint(shares, receiver);
        emit DepositWithMetadata(msg.sender, receiver, assets, shares, metadata);
        return assets;
    }

    // --- View Functions ---

    function isSigner(address _account) external view returns (bool) {
        return signers[_account].isActive;
    }

    function getThreshold() external view returns (uint256) {
        return threshold;
    }

    // Explicitly override totalAssets if we want to include strategies later
    // For now, default ERC4626 totalAssets uses asset.balanceOf(address(this))
    // which correctly reflects the underlying stablecoin balance.
    function totalAssets() public view override(ERC4626, IERC4626) returns (uint256) {
        return super.totalAssets();
    }
}
