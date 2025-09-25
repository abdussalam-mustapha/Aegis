// src/contracts/abis.js
export const daoVotingABI = [
  // Open Election
  {
    "inputs": [{"internalType": "bytes32", "name": "id", "type": "bytes32"}],
    "name": "open_election",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // Close Election
  {
    "inputs": [],
    "name": "close_election",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // Cast Vote
  {
    "inputs": [
      {"internalType": "uint8", "name": "vote_type", "type": "uint8"},
      {"components": [/* CoinInfo structure */], "name": "vote_coin", "type": "tuple"}
    ],
    "name": "cast_vote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // Get Vote Counts
  {
    "inputs": [],
    "name": "get_vote_counts",
    "outputs": [
      {"internalType": "uint64", "name": "yes", "type": "uint64"},
      {"internalType": "uint64", "name": "no", "type": "uint64"},
      {"internalType": "uint64", "name": "absent", "type": "uint64"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export const daoShieldedTokenABI = [
  // Mint Tokens
  {
    "inputs": [],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // Get Balance
  {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
];

// Replace with your deployed contract addresses
export const CONTRACT_ADDRESSES = {
  daoVoting: '0x...', // Replace with actual address
  daoShieldedToken: '0x...' // Replace with actual address
};