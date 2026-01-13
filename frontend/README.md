# 🎓 SheBuilds Frontend

Web application for the SheBuilds proof-of-skill NFT platform.

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

### For Builders 👩‍💻
- **Profile Dashboard**: View all earned credentials
- **Skill Showcase**: Display skills with visual badges
- **Project Portfolio**: Showcase completed projects
- **Public Profile**: Shareable profile URL for recruiters
- **Wallet Connection**: Connect with MetaMask

### For Issuers 🏫
- **Credential Minting**: Issue NFT credentials to builders
- **Batch Operations**: Mint multiple credentials at once
- **Template Management**: Create reusable credential templates
- **Analytics**: Track issued credentials and recipients

### For Recruiters 💼
- **Discover Talent**: Browse women builders by skills
- **Verify Credentials**: On-chain verification of achievements
- **Filter & Search**: Find builders with specific skills
- **View Portfolios**: See projects and credentials

## 🏗️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: CSS (custom design system)
- **Web3**: ethers.js or wagmi
- **Wallet**: RainbowKit or Web3Modal
- **State**: React Context API

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── profile/           # Builder profiles
│   ├── issuer/            # Issuer dashboard
│   └── discover/          # Recruiter discovery
├── components/            # Reusable components
│   ├── Credential/        # NFT credential display
│   ├── WalletConnect/     # Wallet connection
│   └── SkillBadge/        # Skill badges
├── lib/                   # Utilities
│   ├── contracts/         # Contract ABIs and addresses
│   ├── web3/              # Web3 utilities
│   └── ipfs/              # IPFS helpers
└── public/                # Static assets
```

## 🔗 Connecting to Smart Contracts

1. Deploy the SheBuilds contract
2. Update contract address in `lib/contracts/addresses.ts`
3. Connect MetaMask to the network
4. Start the frontend

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address_here
NEXT_PUBLIC_CHAIN_ID=1337
NEXT_PUBLIC_NFT_STORAGE_KEY=your_nft_storage_key
```

## 🎯 Next Steps

- [ ] Install Web3 dependencies
- [ ] Create wallet connection component
- [ ] Build builder profile UI
- [ ] Build issuer dashboard
- [ ] Build recruiter discovery interface
- [ ] Integrate IPFS for metadata
- [ ] Add credential display components
- [ ] Implement search and filtering
