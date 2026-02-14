# 💰 TreaSure Frontend

On-chain treasury infrastructure for African SMEs, startups, and remote teams.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- MetaMask or compatible Web3 wallet

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Features

### Merchant Stablecoin Vaults 🏦
- **Secure Vaults**: Hold and manage business revenue in stablecoins
- **Multi-Signature Control**: Shared control and approvals for security
- **Proof-of-Reserves**: Transparent verification of vault balances
- **Role-Based Permissions**: Owners, operators, and auditors

### FX-Safe Payroll 💸
- **Stablecoin Payroll**: Pay teams globally without FX volatility
- **Scheduled Payouts**: Weekly, monthly, or streaming payments
- **On-Chain Proof**: Verifiable payment history on-chain
- **Payslip Generation**: Export proof of payment

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Web3**: wagmi + viem
- **Chain**: Base Mainnet
- **Wallet**: WalletConnect / RainbowKit

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── vaults/            # Vault management pages
│   └── payroll/           # Payroll pages
├── components/            # Reusable components
│   ├── ui/                # Base UI components
│   ├── vault/             # Vault-specific components
│   └── payroll/           # Payroll-specific components
├── hooks/                 # Custom React hooks
├── context/               # React Context providers
├── lib/                   # Utilities
│   ├── wagmi.ts           # Wagmi configuration
│   └── contracts/         # Contract ABIs
├── config/                # App configuration
└── types/                 # TypeScript types
```

## 🔗 Connecting to Smart Contracts

1. Deploy the TreasuryVault and PayrollEngine contracts
2. Update contract addresses in `config/constants.ts`
3. Connect MetaMask to Base network
4. Start the frontend

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_TREASURY_VAULT_ADDRESS=your_vault_address
NEXT_PUBLIC_PAYROLL_ENGINE_ADDRESS=your_payroll_address
NEXT_PUBLIC_CHAIN_ID=8453
```

## 🎯 Next Steps

- [ ] Install Web3 dependencies (wagmi, viem)
- [ ] Create wallet connection component
- [ ] Build vault dashboard UI
- [ ] Build payroll management UI
- [ ] Integrate contract interactions
- [ ] Add transaction notifications