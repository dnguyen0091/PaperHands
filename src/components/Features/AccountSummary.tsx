import { motion } from 'framer-motion';
import type { AccountSummary } from '../Helper/Types/AccountSummary';

export default function AccountSummary({ account }: { account: AccountSummary }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 flex items-center justify-between">
                <div className="flex-1">
                    <div className="text-sm text-slate-400 font-medium uppercase tracking-wide mb-2">
                        Total Portfolio Value
                    </div>
                    <div className="text-5xl font-bold mb-4">
                        ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>

                    <div className="flex items-center gap-6 text-sm">
                        <div>
                            <span className="text-slate-400">P&L: </span>
                            <span className={`font-semibold ${account.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                ${account.pnl.toFixed(2)}
                            </span>
                        </div>
                        <div className="h-4 w-px bg-slate-600" />
                        <div>
                            <span className="text-slate-400">Today: </span>
                            <span className={`font-semibold ${account.dailyChangePct >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {account.dailyChangePct >= 0 ? '+' : ''}{account.dailyChangePct}%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Enhanced sparkline */}
                <div className="w-64 h-24 ml-8">
                    <svg width="100%" height="100%" viewBox="0 0 200 60" fill="none" className="drop-shadow-lg">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#34d399" />
                            </linearGradient>
                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* Area fill */}
                        <path
                            d="M0,40 L20,38 L40,32 L60,28 L80,30 L100,26 L120,22 L140,20 L160,18 L180,15 L200,12 L200,60 L0,60 Z"
                            fill="url(#areaGradient)"
                        />
                        {/* Line */}
                        <polyline
                            points="0,40 20,38 40,32 60,28 80,30 100,26 120,22 140,20 160,18 180,15 200,12"
                            stroke="url(#lineGradient)"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}