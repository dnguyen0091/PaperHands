import { useState } from 'react';
import AccountSummary from '../../components/Features/AccountSummary';
import AlgorithmPanel from '../../components/Features/AlgorithmPanel';
import PerformanceChart from '../../components/Features/PerformanceChart';
import PerformanceMetrics from '../../components/Features/PerformanceMetrics';
import PositionsTable from '../../components/Features/PositionsTable';
import StrategyTester from '../../components/Features/StrategyTester';
import TradeHistory from '../../components/Features/TradeHistory';
import type { Algorithm } from '../../components/Helper/Types/Algorithm';

export default function HomePage() {
    const [isAlgorithmPanelOpen, setIsAlgorithmPanelOpen] = useState(false);

    // TODO: replace with real data hooks/services (alpaca/finnhub)
    const demoAccount = {
        balance: 12540.23,
        pnl: 420.12,
        dailyChangePct: 1.8,
        history: [] as number[]
    };

    // Demo algorithms
    const demoAlgorithms: Algorithm[] = [
        {
            id: '1',
            name: 'Momentum Trader',
            description: 'Follows strong price momentum with trailing stops',
            status: 'active',
            returns: 12.5,
            winRate: 68.3,
            totalTrades: 145,
            activeSince: '2024-01-15',
            lastModified: '2024-03-10',
        },
        {
            id: '2',
            name: 'Mean Reversion',
            description: 'Buys oversold stocks and sells overbought ones',
            status: 'paused',
            returns: -2.3,
            winRate: 52.1,
            totalTrades: 89,
            activeSince: '2024-02-01',
            lastModified: '2024-03-08',
        },
        {
            id: '3',
            name: 'Volatility Breakout',
            description: 'Trades breakouts during high volatility periods',
            status: 'testing',
            returns: 8.7,
            winRate: 61.5,
            totalTrades: 52,
            activeSince: '2024-03-01',
            lastModified: '2024-03-12',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-500 mt-1">Welcome back! Here's your portfolio overview.</p>
                    </div>
                    <button
                        onClick={() => setIsAlgorithmPanelOpen(true)}
                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                        <span>🤖</span>
                        View Algorithms
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="space-y-6">
                {/* Account Summary Card */}
                <AccountSummary account={demoAccount} />

                {/* Performance Metrics Grid */}
                <PerformanceMetrics
                    totalValue={demoAccount.balance}
                    todayPnL={demoAccount.pnl}
                    todayPnLPercent={demoAccount.dailyChangePct}
                    totalReturn={15.2}
                    winRate={62.5}
                    activePositions={8}
                />

                {/* Performance Chart */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                    <h2 className="text-lg font-semibold mb-4 text-gray-900">Performance Chart</h2>
                    <PerformanceChart series={demoAccount.history} />
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Positions */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <h2 className="text-lg font-semibold mb-4 text-gray-900">Current Positions</h2>
                        <PositionsTable />
                    </div>

                    {/* Trade History */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <h2 className="text-lg font-semibold mb-4 text-gray-900">Recent Trades</h2>
                        <TradeHistory />
                    </div>
                </div>

                {/* Strategy Tester */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                    <h2 className="text-lg font-semibold mb-4 text-gray-900">Strategy Tester</h2>
                    <StrategyTester />
                </div>
            </div>

            {/* Algorithm Panel */}
            <AlgorithmPanel
                isOpen={isAlgorithmPanelOpen}
                onClose={() => setIsAlgorithmPanelOpen(false)}
                algorithms={demoAlgorithms}
                onToggleAlgorithm={(id) => console.log('Toggle algorithm:', id)}
                onEditAlgorithm={(id) => console.log('Edit algorithm:', id)}
                onViewDetails={(id) => console.log('View details:', id)}
            />
        </div>
    );
}