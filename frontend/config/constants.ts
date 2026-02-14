export const APP_NAME = 'TreaSure';
export const APP_DESCRIPTION = 'On-chain treasury infrastructure for African SMEs, startups, and remote teams';

export const NAV_ITEMS = [
  { name: 'Dashboard', href: '/', icon: 'home' },
  { name: 'Vaults', href: '/vaults', icon: 'vault' },
  { name: 'Payroll', href: '/payroll', icon: 'payroll' },
  { name: 'Settings', href: '/settings', icon: 'settings' },
] as const;

export const SUPPORTED_CHAINS = {
  BASE_MAINNET: 8453,
  BASE_TESTNET: 84532,
  OPTIMISM: 10,
  CELO: 42220,
} as const;

export const TOKENS = {
  USDC: {
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
  },
  USDT: {
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 6,
  },
} as const;