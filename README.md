
# Privacy Hub

Privacy Hub is a next-generation, privacy-first AI co-pilot for DAO treasuries. It empowers decentralized organizations to manage, simulate, and optimize their treasury allocations with advanced privacy protocols, zero-knowledge compliance, and real-time wallet integration.

## Features

- **Real-Time Wallet Integration**: Connect, disconnect, and manage your wallet securely using RainbowKit and Wagmi. Supports MetaMask, WalletConnect, and more.
- **Privacy-First Architecture**: All treasury operations are protected by robust privacy protocols and zero-knowledge proofs (Midnight SDK ready).
- **AI-Powered Treasury Management**: AI agents provide strategic recommendations, risk analysis, and compliance checks for optimal asset allocation.
- **Simulation Sandbox**: Model market scenarios and see projected impacts on your treasury with interactive controls and charts.
- **Compliance Engine**: Automated compliance checks with DAO rules, zero-knowledge verification, and exportable reports.
- **Proposal System**: Create, review, and vote on treasury proposals with shielded voting and on-chain execution.
- **Modern UI/UX**: Built with React, Vite, Tailwind CSS, Framer Motion, and Recharts for a beautiful, responsive experience.

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **RainbowKit & Wagmi** (wallet integration)
- **Viem** (EVM interaction)
- **Recharts** (data visualization)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Midnight SDK** (privacy, ZK proofs - ready for integration)

## Getting Started

1. **Install dependencies**
	```bash
	npm install
	```
2. **Start the development server**
	```bash
	npm run dev
	```
3. **Open in browser**
	Visit [http://localhost:5173](http://localhost:5173)

## Project Structure

- `src/components/` — All main React components (Dashboard, AI Agents, Simulations, Compliance, Proposals, Settings, etc.)
- `src/wallet.js` — Wagmi & RainbowKit configuration
- `src/contracts/abi.js` — Smart contract ABIs and addresses
- `src/hooks/` — Custom React hooks
- `public/` — Static assets
- `assets/` — Images and icons

## Key Screens

- **Landing Page**: Animated hero, core principles, benefits
- **Onboarding**: Wallet connection, privacy info
- **Dashboard**: Portfolio overview, allocation charts
- **AI Agents**: Strategic recommendations, risk analysis, compliance chat
- **Simulations**: Market scenario modeling
- **Compliance**: Rule status, ZK verification, report export
- **Proposals**: Create/review/vote on proposals
- **Settings**: DAO info, preferences, theme

## Wallet Integration

- Connect wallet using RainbowKit's ConnectButton
- Disconnect wallet using sidebar button (calls Wagmi's `disconnect()`)
- Auto-redirect to dashboard on successful connection
- All wallet actions follow best security practices

## Privacy & Compliance

- Ready for Midnight SDK integration (privacy, ZK proofs)
- All compliance checks are automated and exportable
- No sensitive data is exposed on-chain

## Customization

- Easily add new assets, rules, or AI agents via config files
- Theming and layout are fully responsive and customizable

## Contributing

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

MIT


## Backend Implementation 

Privacy Hub will evolve to include a robust backend supporting advanced privacy, compliance, and AI features. Planned backend components:

- **Node.js/Express API**: RESTful endpoints for proposals, treasury data, compliance checks, and user management.
- **Database**: PostgreSQL for structured DAO/treasury data, with privacy-preserving schemas.
- **Authentication**: JWT-based session management, wallet signature verification, and role-based access control.
- **Privacy Modules**: Integration with Midnight SDK for zero-knowledge proofs, shielded transactions, and compliance attestations.
- **AI Services**: Python microservices for risk analysis, strategy recommendations, and compliance automation (served via REST/gRPC).
- **Event & Notification System**: WebSocket or server-sent events for real-time updates on proposals, votes, and compliance status.
- **On-chain Integration**: Secure interaction with smart contracts for proposal execution and treasury management.

## General Architecture Roadmap

The Privacy Hub architecture will be modular, scalable, and privacy-centric:

1. **Frontend**
	- React SPA with wallet integration, dashboard, and proposal system
	- Direct EVM interaction for wallet and contract calls

2. **Backend **
	- Node.js/Express API for business logic and data management
	- PostgreSQL for persistent storage
	- Privacy modules (Midnight SDK, ZK proofs)

3. **Smart Contracts**
	- DAO governance, proposal voting, and treasury management
	- Privacy-preserving contract patterns

4. **Security & Privacy**
	- End-to-end encryption for sensitive data
	- Zero-knowledge compliance and shielded voting
	- Regular audits and best practices

5. **Scalability**
	- Microservice architecture for AI and compliance
	- Modular API for easy feature expansion

6. **DevOps & Deployment**
	- Dockerized services for backend and AI modules
	- CI/CD pipelines for automated testing and deployment

---

For questions, issues, or feature requests, please open an issue or contact the maintainer.
