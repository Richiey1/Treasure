import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-mint-500 rounded-lg flex items-center justify-center font-bold text-slate-950">
                T
              </div>
              <span className="text-xl font-bold">TreaSure</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/vaults"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Vaults
              </Link>
              <Link
                href="/payroll"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Payroll
              </Link>
              <button className="bg-mint-500 hover:bg-mint-600 text-slate-950 font-medium px-4 py-2 rounded-lg transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-mint-500/10 border border-mint-500/20 rounded-full px-4 py-1 text-mint-400 text-sm">
            <span className="w-2 h-2 bg-mint-500 rounded-full animate-pulse"></span>
            Built on Base
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            On-Chain Treasury for
            <span className="block text-mint-500">African Businesses</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Secure stablecoin vaults with multi-signature control and FX-safe payroll for your team. 
            Transparent, verifiable, and built for the future of finance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/vaults"
              className="bg-mint-500 hover:bg-mint-600 text-slate-950 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Create a Vault
            </Link>
            <Link
              href="/payroll"
              className="border border-slate-700 hover:border-slate-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Explore Payroll
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Merchant Stablecoin Vaults</h3>
            <p className="text-slate-400">
              Secure, transparent vault system for businesses to hold and manage revenue in stablecoins (USDC/USDT) with multi-signature access control.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="w-12 h-12 bg-mint-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-mint-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">FX-Safe Payroll</h3>
            <p className="text-slate-400">
              Stablecoin-based payroll for remote teams with scheduled payouts, on-chain proof of payment, and protection from local currency volatility.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Why TreaSure?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-mint-500 mb-2">100%</div>
              <div className="text-slate-400">Transparent & Verifiable</div>
            </div>
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary-500 mb-2">Multi-Sig</div>
              <div className="text-slate-400">Secure Access Control</div>
            </div>
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-mint-500 mb-2">FX-Safe</div>
              <div className="text-slate-400">Stablecoin Payments</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
          <p>&copy; 2026 TreaSure. Built on Base.</p>
        </div>
      </footer>
    </div>
  );
}