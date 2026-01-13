# 👩‍💻 SheBuilds

**Proof-of-Skill NFTs for Women Builders**

Empowering women in Web3 through verifiable, on-chain credentials that showcase skills, achievements, and growth.

---

## 🎯 Overview

SheBuilds is a blockchain-based platform that issues NFT credentials representing:
- **Skills Learned** - Verified completion of courses, workshops, and training
- **Projects Completed** - Portfolio of built applications and contributions
- **Mentorship Participation** - Active engagement in mentorship programs

These NFTs serve as a **recruiter-friendly**, **non-financial** proof-of-skill system that helps women builders stand out in the Web3 ecosystem.

## ✨ Why SheBuilds?

### 🌟 Diversity + Web3
- Promotes diversity and inclusion in blockchain development
- Creates a supportive ecosystem for women builders
- Bridges the gender gap in Web3

### 💼 Recruiter-Friendly
- Verifiable on-chain credentials
- Portfolio showcase integrated with NFTs
- Skills taxonomy aligned with industry standards
- Easy verification for hiring managers

### 🎓 Non-Financial Focus
- NFTs represent achievements, not speculation
- Soulbound tokens (non-transferable) option
- Focus on learning and growth, not trading

## 🏗️ Project Structure

```
shebuilds/
├── frontend/          # Next.js web application
├── smartcontract/     # Solidity NFT contracts (Hardhat)
├── docs/              # Documentation and guides
└── README.md          # This file
```

## 🎨 Key Features

### For Women Builders 👩‍💻
- **Skill NFTs**: Earn NFTs for completing courses and certifications
- **Project NFTs**: Showcase completed projects with metadata
- **Mentorship Badges**: Recognition for mentorship participation
- **Portfolio Dashboard**: Display all achievements in one place
- **Shareable Profiles**: Public profile pages for recruiters

### For Mentors & Organizations 🏫
- **Issue Credentials**: Mint NFTs for course/workshop completion
- **Verify Skills**: On-chain verification of achievements
- **Track Progress**: Monitor mentee growth and engagement
- **Analytics Dashboard**: Insights into program effectiveness

### For Recruiters 💼
- **Verify Credentials**: Instant on-chain verification
- **Browse Talent**: Discover women builders by skills
- **Filter by Skills**: Search by specific technologies
- **View Portfolios**: See projects and achievements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- MetaMask or compatible Web3 wallet
- Hardhat for smart contract development

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd shebuilds

# Install frontend dependencies
cd frontend
npm install

# Install smart contract dependencies
cd ../smartcontract
npm install
```

### Development

```bash
# Compile smart contracts (from smartcontract directory)
npx hardhat compile

# Run local blockchain node
npx hardhat node

# Deploy contracts to local network
npx hardhat run scripts/deploy.ts --network localhost

# Run frontend (from frontend directory)
npm run dev
```

## 🎨 Tech Stack

### Frontend
- **Framework**: Next.js 14+ (React)
- **Styling**: CSS (modern, responsive design)
- **State Management**: React Context/Hooks
- **Web3 Integration**: ethers.js or wagmi
- **Wallet Connection**: RainbowKit or Web3Modal
- **NFT Display**: NFT.storage or IPFS

### Blockchain Backend
- **Smart Contracts**: Solidity (ERC-721 or ERC-1155)
- **Development Framework**: Hardhat
- **Testing**: Hardhat + Chai
- **Network**: Base, Polygon, or Ethereum
- **Metadata Storage**: IPFS (NFT.storage or Pinata)
- **Standards**: ERC-721, ERC-5192 (Soulbound)

## 🎯 NFT Types

### 1. Skill NFTs 🎓
- **Metadata**: Skill name, level, issuer, date earned
- **Visual**: Dynamic SVG based on skill category
- **Attributes**: Technology, proficiency level, verification

### 2. Project NFTs 🚀
- **Metadata**: Project name, description, tech stack, GitHub link
- **Visual**: Project screenshot or custom artwork
- **Attributes**: Technologies used, completion date, team size

### 3. Mentorship Badges 🤝
- **Metadata**: Program name, duration, role (mentor/mentee)
- **Visual**: Badge design with program branding
- **Attributes**: Hours contributed, impact metrics

## 🔒 Soulbound Tokens

Optional implementation of **ERC-5192** for non-transferable NFTs:
- Prevents trading/selling of credentials
- Maintains authenticity and trust
- Ensures achievements stay with the earner

## 🎯 Roadmap

- [ ] Project scaffolding
- [ ] Smart contract development (ERC-721 + Soulbound)
- [ ] IPFS metadata storage integration
- [ ] Frontend UI/UX design
- [ ] Issuer dashboard for organizations
- [ ] Builder profile pages
- [ ] Recruiter search interface
- [ ] Mobile responsiveness
- [ ] Testnet deployment
- [ ] Mainnet launch

## 💡 Future Features

- **Skill Verification**: Peer endorsements and reviews
- **Learning Paths**: Guided skill progression
- **Job Board Integration**: Connect builders with opportunities
- **Community Features**: Forums, events, networking
- **Analytics**: Personal growth tracking
- **Multi-chain Support**: Deploy across multiple networks

## 📝 License

TBD

## 🤝 Contributing

We welcome contributions! This project is built by women, for women, but allies are welcome to contribute.

---

**SheBuilds** - Empowering Women Builders, One NFT at a Time 👩‍💻✨
