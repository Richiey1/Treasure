# TreaSure

On-chain treasury infrastructure for African SMEs, startups, and remote teams.

This project provides a secure stablecoin vault for businesses to store revenue transparently, and a FX-safe payroll system that allows companies to pay workers and freelancers reliably without exposure to local currency volatility.

The system is modular, with two core products exposed through a single dashboard.

✨ Core Features

1️⃣ Merchant Stablecoin Vaults
A secure, transparent vault system that allows businesses to hold and manage revenue in stablecoins.

**Who it’s for**
- SMEs
- Online businesses
- Crypto-native merchants
- Market sellers accepting USDT / USDC

**Problems solved**
- Unsafe custody of business funds
- Over-reliance on banks or single custodians
- Lack of transparency in shared finances

**Features**
- Stablecoin vaults (USDC / USDT)
- Multi-signature access control
- Proof-of-reserves dashboard
- Role-based permissions (owners, operators, auditors)
- Optional DAO / governance layer for shared decision-making

**Value**
- Protect business funds with transparent, programmable custody.

2️⃣ FX-Safe Payroll for Remote Workers
A payroll module built on top of the vault system that enables predictable, borderless payments.

**Who it’s for**
- Startups
- Remote-first companies
- DAOs
- Freelancers & contractors

**Problems solved**
- FX volatility in salary payments
- Delayed or failed international transfers
- No verifiable proof of payment

**Features**
- Stablecoin-based payroll
- Scheduled or recurring payouts
- On-chain proof of salary payments
- Payroll history & payslip generation
- Optional off-ramps to local bank accounts

**Value**
- Pay teams globally with stable value and verifiable records.

🧱 Architecture Overview
- **Vault Contracts** – secure storage of stablecoins
- **Multi-Sig Layer** – shared control and approvals
- **Payroll Engine** – scheduled & streaming payments
- **Frontend Dashboard** – vault management & payroll operations
- **Off-Ramp Integrations** – optional local currency withdrawals

🛠 Tech Stack (example)
- **Smart Contracts**: Solidity
- **Chain**: Base / Celo / Optimism
- **Frontend**: React / Next.js
- **Wallets**: WalletConnect
- **Indexing**: The Graph / custom indexer

🚀 Vision
To become the default on-chain treasury layer for African businesses and globally distributed teams.

3️⃣ Frontend UX Structure (Two Tabs, Clean Separation)

**Dashboard Layout**
Top-level navigation: `[ Vaults ] [ Payroll ]`

🟢 **Tab 1: Merchant Stablecoin Vaults**

**Sections**
- Vault balance overview
- Proof-of-reserves visualization
- Signers & permissions
- Transaction history
- Governance / approvals

**Primary actions**
- Deposit stablecoins
- Approve withdrawals
- Add/remove signers
- View audit trail

**Mental model**
- “This is my business vault.”

🔵 **Tab 2: FX-Safe Payroll**

**Sections**
- Team members / recipients
- Payroll schedule
- Upcoming payouts
- Past payroll history
- Proof-of-payment links

**Primary actions**
- Add worker
- Set salary (weekly / monthly / streaming)
- Execute or automate payroll
- Generate payslip / proof

**Mental model**
- “This is how I pay people.”

**UX rule (important)**
- Funds always originate from the Vault
- Payroll only moves funds, never stores them separately

This keeps the system:
- Simple
- Auditable
- Trustable
