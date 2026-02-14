import { base, baseSepolia } from 'wagmi/chains'
import { http } from 'viem'
import { createConfig } from 'wagmi'

/**
 * Wagmi configuration for TreaSure
 * Supports Base Mainnet and Base Sepolia
 */

export const wagmiConfig = createConfig({
  chains: [base, baseSepolia],
  transports: {
    [base.id]: http(process.env.NEXT_PUBLIC_BASE_RPC_URL || 'https://mainnet.base.org'),
    [baseSepolia.id]: http(
      process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL || 'https://sepolia.base.org'
    ),
  },
})

export default wagmiConfig
