/**
 * TreaSure Theme & Design Constants
 */

export const THEME = {
  colors: {
    primary: {
      deepBlue: '#2c5aa0',
      mintGreen: '#1fb89d',
    },
    secondary: {
      deepBlueLight: '#dce6f5',
      mintGreenLight: '#d1f0e8',
    },
    neutral: {
      white: '#ffffff',
      black: '#212529',
      slate: '#495057',
      border: '#dee2e6',
      background: '#f8f9fa',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
}

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
}

/**
 * Smart Contract Addresses
 * These should be populated from environment variables
 */
export const CONTRACT_ADDRESSES = {
  treasuryVault: (process.env.NEXT_PUBLIC_TREASURY_VAULT_ADDRESS || '') as `0x${string}`,
  payrollEngine: (process.env.NEXT_PUBLIC_PAYROLL_ENGINE_ADDRESS || '') as `0x${string}`,
  vaultFactory: (process.env.NEXT_PUBLIC_VAULT_FACTORY_ADDRESS || '') as `0x${string}`,
}

/**
 * Network Configuration
 */
export const NETWORKS = {
  base: {
    id: 8453,
    name: 'Base Mainnet',
    rpcUrl: process.env.NEXT_PUBLIC_BASE_RPC_URL || 'https://mainnet.base.org',
  },
  baseSepolia: {
    id: 84532,
    name: 'Base Sepolia Testnet',
    rpcUrl: process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL || 'https://sepolia.base.org',
  },
}

/**
 * Transaction Settings
 */
export const TX_SETTINGS = {
  gasLimitMultiplier: 1.2, // Add 20% to estimated gas
  confirmationBlocks: 2, // Wait for 2 blocks confirmation
  maxRetries: 3,
}

/**
 * API Configuration
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

/**
 * Feature Flags
 */
export const FEATURE_FLAGS = {
  enableTestnet: process.env.NEXT_PUBLIC_ENABLE_TESTNET === 'true',
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
}

export default THEME
