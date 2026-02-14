'use client'

import React, { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit'
import { mainnet, baseSepolia } from '@reown/appkit/networks'
import wagmiConfig from './wagmi'

/**
 * Web3 Provider Component
 * Wraps the application with Wagmi, TanStack Query, and Reown AppKit
 * Provides wallet connection and Web3 functionality
 */

// Create QueryClient for TanStack Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
})

// Initialize Reown AppKit
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || ''

if (!projectId) {
  console.warn('NEXT_PUBLIC_REOWN_PROJECT_ID is not set. Wallet connection may not work.')
}

createAppKit({
  adapters: [],
  networks: [mainnet, baseSepolia],
  projectId,
  features: {
    analytics: true,
  },
})

interface Web3ProviderProps {
  children: ReactNode
}

/**
 * Web3Provider - Wraps the application with Web3 dependencies
 * @param {Web3ProviderProps} props - Component props
 * @returns {JSX.Element} Provider component
 */
export function Web3Provider({ children }: Web3ProviderProps): JSX.Element {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Web3Provider
