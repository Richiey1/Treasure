// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./TreasuryVault.sol";

/**
 * @title VaultFactory
 * @dev Deploys and tracks TreasuryVault instances.
 */
contract VaultFactory {
    // Registry of vaults owned by each address
    mapping(address => address[]) private _ownerVaults;
    
    // List of all deployed vaults
    address[] public allVaults;

    event VaultCreated(address indexed vault, address indexed owner, address asset, string name);

    /**
     * @dev Deploys a new TreasuryVault instance.
     * @param asset The underlying ERC20 asset for the vault.
     * @param name The name of the vault token.
     * @param symbol The symbol of the vault token.
     * @param threshold The multi-sig approval threshold.
     * @param initialSigners The initial list of authorized signers.
     */
    function createVault(
        IERC20 asset,
        string calldata name,
        string calldata symbol,
        uint256 threshold,
        address[] calldata initialSigners
    ) external returns (address) {
        TreasuryVault newVault = new TreasuryVault(
            asset,
            name,
            symbol,
            msg.sender, // Initial owner
            threshold,
            initialSigners
        );

        address vaultAddress = address(newVault);
        _ownerVaults[msg.sender].push(vaultAddress);
        allVaults.push(vaultAddress);

        emit VaultCreated(vaultAddress, msg.sender, address(asset), name);

        return vaultAddress;
    }

    /**
     * @dev Returns all vaults deployed by a specific owner.
     */
    function getVaultsByOwner(address owner) external view returns (address[] memory) {
        return _ownerVaults[owner];
    }

    /**
     * @dev Returns the total number of deployed vaults.
     */
    function getVaultCount() external view returns (uint256) {
        return allVaults.length;
    }
}
