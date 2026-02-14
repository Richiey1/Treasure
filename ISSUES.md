# 📋 TreaSure: Detailed Development Roadmap & Issues

This document breaks down the TreaSure project into granular tasks. Contributors should pick an issue, create a branch (`feat/issue-title`), and follow the modular commit strategy.

---

## 🏗️ 1. Project Infrastructure & Setup

### Issue #1: Frontend Framework & Tailwind Setup
- [x] Initialize Next.js 14/15 with App Router and TypeScript.
- [x] Configure Tailwind CSS v3/v4 with the project color palette (Deep Blue, Mint Green, Slate).
- [x] Set up basic folder structure: `components/`, `hooks/`, `context/`, `lib/`, `types/`.

### Issue #2: Web3 Connectivity Setup (Wagmi + Reown)
- [x] Install and configure `wagmi`, `viem`, and `@reown/appkit`.
- [x] Create `config/wagmi.ts` for Base Mainnet
- [x] Implement `context/Web3Provider.tsx` to wrap the application.

### Issue #3: Environment Variable Configuration
- [x] Complete `.env.local` for frontend (Project IDs, RPC URLs).
- [x] Complete `.env` for smart contracts (Private Key, API Keys).
- [x] Create a `config/constants.ts` file to store contract addresses and common IDs.

---

## 🔐 2. Smart Contract Development (Solidity)

### Issue #4: TreasuryVault Interface & Storage
- [x] Define `ITreasuryVault` interface.
- [x] Implement storage structures for Multi-sig signers and approval thresholds.
- [x] Add basic `Ownable` and `AccessControl` inheritance.

### Issue #5: ERC-4626 implementation
- [x] Inherit and implement OpenZeppelin's ERC-4626 for the vault.
- [x] Customize `deposit` and `mint` to support Merchant-specific metadata.
- [x] Add `totalAssets` logic to reflect underlying stablecoin balances (USDC/USDT).

### Issue #6: Multi-Signature Approval Logic
- [x] Create internal mapping to track withdrawal requests.
- [x] Implement `requestWithdrawal(address receiver, uint256 amount)`.
- [x] Implement `approveWithdrawal(uint256 requestId)` for authorized signers.
- [x] Implement `executeWithdrawal(uint256 requestId)` once threshold is met.

### Issue #7: PayrollEngine Core Logic
- [x] Implement `addEmployee(address wallet, uint256 salary, uint256 interval)`.
- [x] Implement `updateEmployee(address wallet, uint256 newSalary)`.
- [x] Implement `removeEmployee(address wallet)`.
- [x] Add state mapping to track the last payment timestamp for each worker.

### Issue #8: Payroll Execution Logic
- [x] Implement `executePayroll(address[] workers)` function.
- [x] Ensure funds are pulled directly from the linked `TreasuryVault`.
- [x] Add validation: Ensure vault has sufficient balance before transfer.
- [x] Emit `PayrollPaid` events for each successful transaction.

### Issue #9: Vault Factory Contract
- [ ] Implement `VaultFactory.sol` to deploy new `TreasuryVault` instances.
- [ ] Create a registry mapping `address owner => address[] vaults`.
- [ ] Implement `getVaultsByOwner(address owner)` view function.

### Issue #10: Price Feed Integration (Chainlink)
- [ ] Integrate Chainlink `AggregatorV3Interface` in the vault.
- [ ] Add logic to fetch USD price of local assets (if applicable) or for rate visualization.

---

## 🎨 3. Frontend: Components & Layout

### Issue #11: Global Dashboard Layout
- [ ] Build a responsive `Sidebar` component with navigation (Dashboard, Vaults, Payroll, Settings).
- [ ] Create a `Navbar` with Wallet Connection button and Network switcher.
- [ ] Implement a `LayoutWrapper` to maintain consistent design across pages.

### Issue #12: UI Component Library
- [ ] Build reusable `Button` component (Primary, Secondary, Outline).
- [ ] Build `Card` component for data visualization.
- [ ] Build `Modal` component for transaction confirmations.
- [ ] Build `Input` component with validation states.

---

## 🟢 4. Merchant Vault Tab (Frontend)

### Issue #13: Vault Overview Dashboard
- [ ] Design and build the "Total Balance" header with currency toggles.
- [ ] Create a "Proof-of-Reserves" chart using `Recharts` or similar.
- [ ] Build a summary card for "Pending Approvals" count.

### Issue #14: Deposit & Withdrawal Forms
- [ ] Implement "Deposit Stablecoins" form with token approval logic.
- [ ] Build "Request Withdrawal" form with multi-sig signer selection.
- [ ] Implement real-time balance updates after transactions.

### Issue #15: Signer Management UI
- [ ] Create a list view of current vault signers.
- [ ] Implement "Add Signer" and "Remove Signer" transaction triggers.
- [ ] Build a visualization for the current approval threshold (e.g., "2 of 3").

### Issue #16: Transaction Audit Trail
- [ ] Build a table to display `Deposit`, `Withdrawal`, and `SignerChange` events.
- [ ] Integrate block explorer links (BaseScan/CeloScan) for every row.

---

## 🔵 5. FX-Safe Payroll Tab (Frontend)

### Issue #17: Team Management Interface
- [ ] Build a card-based list of employees/contractors.
- [ ] Implement "Add Team Member" modal with salary and frequency inputs.
- [ ] Create "Edit/Delete" functionality for worker records.

### Issue #18: Payroll Execution Dashboard
- [ ] Design a "Next Payout" countdown for scheduled workers.
- [ ] Implement a "Bulk Pay" button with a summary of total cost.
- [ ] Create a transaction status tracker for payroll runs.

### Issue #19: Proof-of-Payment & Payslips
- [ ] Build a "Payroll History" view.
- [ ] Implement a "Generate Payslip" button (CSV or PDF export).
- [ ] Add on-chain verification badges for paid salaries.

---

## 🔒 6. Testing & Quality Assurance

### Issue #20: Vault Unit Tests
- [ ] Test ERC-4626 standard compliance.
- [ ] Test multi-sig threshold edge cases (e.g., double approval prevention).
- [ ] Test unauthorized access rejection.

### Issue #21: Payroll Engine Tests
- [ ] Test salary calculation logic.
- [ ] Test "Insufficient Vault Balance" revert scenarios.
- [ ] Test bulk payout gas limits.

### Issue #22: Integration Tests (End-to-End)
- [ ] Test Full Flow: Deploy Vault -> Deposit -> Add Employee -> Execute Payroll.

---

## 📚 7. Documentation & Final Polish

### Issue #23: Simple Inline Comments
- [ ] Add clear, single-line comments explaining logic for all contract functions.
- [ ] Ensure state variables have brief descriptive comments.

### Issue #24: Deployment Scripts & Task Runner
- [ ] Write Hardhat Ignition or standard scripts for multi-chain deployment.
- [ ] Create a `DEPLOYMENT.md` guide with verified contract addresses.

### Issue #25: UX Polish & Notifications
- [ ] Implement `react-hot-toast` or `sonner` for transaction feedback.
- [ ] Add loading skeletons for data-heavy components.
- [ ] Ensure mobile responsiveness for the entire dashboard.

---

## 💡 Notes for Contributors
- Keep the **Payroll Engine** simple: it only moves funds from the Vault.
- Always check for **zero-address** inputs in contracts.
- Use **modular commits**: `feat(vault): add multi-sig storage`, `fix(ui): sidebar spacing on mobile`.
- Use **single-line comments** for code logic only.
