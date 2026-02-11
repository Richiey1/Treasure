# TreaSure Environment Variables Guide

This document explains all environment variables needed for the TreaSure frontend and smart contracts.

## Frontend Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

### Required Variables

#### Reown AppKit Configuration
- **`NEXT_PUBLIC_REOWN_PROJECT_ID`** - Your Reown (WalletConnect) Project ID
  - Get it from: https://cloud.reown.com/
  - Required for wallet connection

#### RPC URLs
- **`NEXT_PUBLIC_BASE_RPC_URL`** - RPC URL for Base Mainnet
  - Default: `https://mainnet.base.org`
  - Alternatives: Alchemy, Infura, or other providers

- **`NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL`** - RPC URL for Base Sepolia (testnet)
  - Default: `https://sepolia.base.org`
  - Use this for testing before mainnet deployment

### Contract Addresses (Post-Deployment)

Fill these in after deploying smart contracts:

- **`NEXT_PUBLIC_TREASURY_VAULT_ADDRESS`** - Main vault contract address
- **`NEXT_PUBLIC_PAYROLL_ENGINE_ADDRESS`** - Payroll execution contract address
- **`NEXT_PUBLIC_VAULT_FACTORY_ADDRESS`** - Factory contract for deploying new vaults

### Optional Variables

- **`NEXT_PUBLIC_API_URL`** - API endpoint for backend services (default: localhost:3000)
- **`NEXT_PUBLIC_ENABLE_TESTNET`** - Enable testnet mode (default: true)
- **`NEXT_PUBLIC_ENABLE_ANALYTICS`** - Enable analytics tracking (default: false)

## Smart Contract Environment Variables

Copy `smartcontract/.env.example` to `smartcontract/.env` and fill in:

```bash
cd smartcontract
cp .env.example .env
```

### Required Variables

- **`PRIVATE_KEY`** - Your deployment account's private key
  - ⚠️ NEVER commit this to version control
  - Use a fresh account for each environment
  - Keep separate keys for testnet and mainnet

- **`BASE_RPC_URL`** - RPC URL for Base Mainnet
  - Default: `https://mainnet.base.org`

- **`ETHERSCAN_API_KEY`** - BaseScan API key for contract verification
  - Get it from: https://basescan.org/apis

### Optional Variables

- **`BASE_SEPOLIA_RPC_URL`** - RPC URL for Base Sepolia testnet
- **`ALCHEMY_API_KEY`** - Alchemy API key (fallback RPC)
- **`COINMARKETCAP_API_KEY`** - For gas cost reporting

## Network Configuration

### Base Mainnet
- **Network ID:** 8453
- **Currency:** ETH
- **Explorer:** https://basescan.org
- **RPC:** https://mainnet.base.org

### Base Sepolia (Testnet)
- **Network ID:** 84532
- **Currency:** ETH (testnet)
- **Faucet:** https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet
- **Explorer:** https://sepolia.basescan.org
- **RPC:** https://sepolia.base.org

## Security Best Practices

1. **Never commit `.env` files** - Use `.env.local` (frontend) and `.env` (contracts)
2. **Use separate keys** - Don't use the same private key for testnet and mainnet
3. **Rotate keys regularly** - Change keys after testing in production
4. **Use environment variable managers** - Consider tools like 1Password or HashiCorp Vault
5. **Verify URLs** - Double-check RPC and API URLs before deployment

## Testing Environment Setup

For local development:

```bash
# Frontend
NEXT_PUBLIC_REOWN_PROJECT_ID=your_testnet_project_id
NEXT_PUBLIC_BASE_RPC_URL=https://sepolia.base.org
NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
NEXT_PUBLIC_ENABLE_TESTNET=true

# Smart Contracts
PRIVATE_KEY=your_testnet_private_key
BASE_RPC_URL=https://sepolia.base.org
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
```

## Production Environment Setup

For mainnet deployment:

```bash
# Frontend
NEXT_PUBLIC_REOWN_PROJECT_ID=your_mainnet_project_id
NEXT_PUBLIC_BASE_RPC_URL=https://mainnet.base.org
NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
NEXT_PUBLIC_ENABLE_TESTNET=false

# Smart Contracts
PRIVATE_KEY=your_mainnet_private_key
BASE_RPC_URL=https://mainnet.base.org
```

## Troubleshooting

### "NEXT_PUBLIC_REOWN_PROJECT_ID is not set" Warning
- Get a Project ID from https://cloud.reown.com/
- Add it to `.env.local`

### "Contract address is invalid" Error
- Ensure `NEXT_PUBLIC_TREASURY_VAULT_ADDRESS` is a valid 0x address
- Deploy contracts first before filling in addresses

### RPC Connection Failures
- Verify RPC URL is correct and accessible
- Check your rate limits with the RPC provider
- Consider using a paid plan for higher limits
