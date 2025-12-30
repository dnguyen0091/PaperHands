// ...existing code...
import AccountSummary from '../../components/Features/accountSummary';
import PerformanceChart from '../../components/Features/performanceChart';
import PositionsTable from '../../components/Features/positionsTable';
import StrategyTester from '../../components/Features/strategyTester';
import TradeHistory from '../../components/Features/tradeHistory';

export default function HomePage() {
    // TODO: replace with real data hooks/services (alpaca/finnhub)
    const demoAccount = {
        balance: 12540.23,
        pnl: 420.12,
        dailyChangePct: 1.8,
        history: [] as number[]
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <header className="mb-6">
                <h1 className="text-2xl font-semibold">PaperHands — Performance</h1>
            </header>

            <main className="grid grid-cols-12 gap-6">
                {/* Left column: summary + chart */}
                <section className="col-span-8 space-y-6">
                    <AccountSummary account={demoAccount} />
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <PerformanceChart series={demoAccount.history} />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                            <h2 className="text-sm font-medium mb-3">Positions</h2>
                            <PositionsTable />
                        </div>

                        <div className="bg-white rounded-xl p-4 shadow-sm">
                            <h2 className="text-sm font-medium mb-3">Trade History</h2>
                            <TradeHistory />
                        </div>
                    </div>
                </section>

                {/* Right column: strategy tester / quick actions */}
                <aside className="col-span-4 space-y-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <h2 className="text-sm font-medium mb-3">Strategy Tester</h2>
                        <StrategyTester />
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <h2 className="text-sm font-medium mb-3">Quick Actions</h2>
                        <div className="flex flex-col gap-2">
                            <button className="btn">Paper Trade</button>
                            <button className="btn">Import Strategy</button>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}

// export type Position = {
//     symbol: string;
//     qty: number;
//     cost: number;
//     market: number;
//     pnl: number;
// };

// export type Trade = {
//     id: string;
//     when: string;
//     side: 'BUY' | 'SELL';
//     symbol: string;
//     qty: number;
//     price: number;
// };