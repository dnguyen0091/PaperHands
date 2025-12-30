import type { AccountSummary } from '../types';

export default function AccountSummary({ account }: { account: AccountSummary }) {
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
            <div>
                <div className="text-sm text-gray-500">Total Balance</div>
                <div className="text-2xl font-semibold">${account.balance.toFixed(2)}</div>
                <div className="text-sm text-gray-500 mt-1">
                    P&L: <span className="font-medium">${account.pnl.toFixed(2)}</span>
                    <span className={`ml-3 ${account.dailyChangePct >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {account.dailyChangePct >= 0 ? '+' : ''}{account.dailyChangePct}%
                    </span>
                </div>
            </div>

            <div className="w-48 h-16">
                {/* small sparkline placeholder */}
                <svg width="100%" height="100%" viewBox="0 0 100 30" fill="none">
                    <polyline points="0,20 20,18 40,12 60,8 80,10 100,6" stroke="#4f46e5" strokeWidth="2" fill="none" />
                </svg>
            </div>
        </div>
    );
}