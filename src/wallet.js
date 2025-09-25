// src/wallet.js
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { QueryClient } from '@tanstack/react-query';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

// Midnight Network Configuration
const midnightTestnet = {
  id: 7672,
  name: 'Midnight Testnet',
  network: 'midnight-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Midnight',
    symbol: 'tDUST',
  },
  rpcUrls: {
    public: { http: ['https://rpc.testnet.midnight.network'] },
    default: { http: ['https://rpc.testnet.midnight.network'] },
  },
  blockExplorers: {
    default: { name: 'Midnight Explorer', url: 'https://explorer.testnet.midnight.network' },
  },
  testnet: true,
};

export const config = getDefaultConfig({
  appName: 'Aegis DAO',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Replace with your WalletConnect Project ID
  chains: [midnightTestnet, mainnet, polygon, optimism, arbitrum, base],
  ssr: false,
});

export const queryClient = new QueryClient();