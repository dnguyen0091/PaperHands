import { useState } from 'react';
import type { PositionItem } from '../../components/Features';
import {
    AlgorithmSelector,
    AlgorithmStatsCard,
    BuyingPowerCard,
    generateChartData,
    NewsFeed,
    PortfolioChart,
    PortfolioHeader,
    PositionsCard,
    RecentActivityCard,
    WatchlistCard,
} from '../../components/Features';
import type { TimePeriod } from '../../components/Features/PortfolioChart';
import type { Activity } from '../../components/Helper/Types/Activity';
import type { AlgorithmAccount } from '../../components/Helper/Types/AlgorithmAccount';
import type { NewsItem } from '../../components/Helper/Types/NewsItem';
import type { WatchlistItem } from '../../components/Helper/Types/WatchlistItem';

export default function HomePage() {
    const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('1D');
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>('portfolio');
    const [hoveredValue, setHoveredValue] = useState<number | null>(null);

    // Demo algorithms with performance data
    const algorithms: AlgorithmAccount[] = [
        {
            id: 'portfolio',
            name: 'Total Portfolio',
            description: 'Combined performance of all algorithms',
            status: 'active',
            returns: 18.42,
            winRate: 64.2,
            totalTrades: 286,
            activeSince: '2024-01-01',
            lastModified: '2024-03-15',
            portfolioValue: 24847.23,
            dailyChange: 847.12,
            dailyChangePercent: 3.52,
        },
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
            portfolioValue: 11240.50,
            dailyChange: 312.45,
            dailyChangePercent: 2.86,
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
            portfolioValue: 4823.18,
            dailyChange: -67.32,
            dailyChangePercent: -1.38,
        },
        {
            id: '3',
            name: 'Volatility Breakout',
            description: 'Trades breakouts during high volatility periods',
            status: 'active',
            returns: 8.7,
            winRate: 61.5,
            totalTrades: 52,
            activeSince: '2024-03-01',
            lastModified: '2024-03-12',
            portfolioValue: 8783.55,
            dailyChange: 601.99,
            dailyChangePercent: 7.35,
        },
    ];

    const selectedAccount = algorithms.find((a) => a.id === selectedAlgorithm) || algorithms[0];
    const chartData = generateChartData(selectedPeriod, selectedAccount.portfolioValue);
    const isPositive = selectedAccount.dailyChange >= 0;

    // Watchlist data
    const watchlist: WatchlistItem[] = [
        { symbol: 'AAPL', name: 'Apple Inc.', price: 178.72, change: 2.34, changePercent: 1.33 },
        { symbol: 'MSFT', name: 'Microsoft', price: 378.91, change: 4.21, changePercent: 1.12 },
        { symbol: 'GOOGL', name: 'Alphabet', price: 141.80, change: -1.23, changePercent: -0.86 },
        { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.50, change: 12.30, changePercent: 5.21 },
        { symbol: 'NVDA', name: 'NVIDIA', price: 875.28, change: 23.45, changePercent: 2.75 },
        { symbol: 'AMD', name: 'AMD', price: 178.34, change: -2.18, changePercent: -1.21 },
    ];

    // Positions data
    const positions: PositionItem[] = [
        { symbol: 'AAPL', shares: 10, value: 1787.20, pnl: 124.50, pnlPercent: 7.48 },
        { symbol: 'NVDA', shares: 5, value: 4376.40, pnl: 892.15, pnlPercent: 25.6 },
        { symbol: 'TSLA', shares: 8, value: 1988.00, pnl: -156.80, pnlPercent: -7.31 },
    ];

    // Recent activity data
    const activities: Activity[] = [
        { id: '1', type: 'BUY', symbol: 'NVDA', description: 'Bought NVDA', details: '2 shares at $871.50', time: '1h ago' },
        { id: '2', type: 'SELL', symbol: 'AMD', description: 'Sold AMD', details: '5 shares at $180.25', time: '3h ago' },
        { id: '3', type: 'DIV', symbol: 'AAPL', description: 'Dividend from AAPL', details: '$2.40 received', time: '2d ago' },
    ];

    // News data
    const news: NewsItem[] = [
        { id: '1', source: 'Reuters', title: 'Fed signals potential rate cuts in coming months', time: '2h ago' },
        { id: '2', source: 'Bloomberg', title: 'Tech stocks rally as earnings beat expectations', time: '4h ago', symbol: 'AAPL' },
        { id: '3', source: 'CNBC', title: 'NVIDIA announces new AI chip architecture', time: '5h ago', symbol: 'NVDA' },
        { id: '4', source: 'MarketWatch', title: 'Crypto markets stabilize after weekend volatility', time: '6h ago' },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Chart & Portfolio */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Portfolio Header with Algorithm Selector */}
                        <div className="space-y-2">
                            <AlgorithmSelector
                                algorithms={algorithms}
                                selectedAlgorithm={selectedAlgorithm}
                                onSelectAlgorithm={setSelectedAlgorithm}
                                onCreateNew={() => console.log('Create new algorithm')}
                            />
                            <PortfolioHeader
                                value={selectedAccount.portfolioValue}
                                dailyChange={selectedAccount.dailyChange}
                                dailyChangePercent={selectedAccount.dailyChangePercent}
                                hoveredValue={hoveredValue}
                            />
                        </div>

                        {/* Chart */}
                        <PortfolioChart
                            data={chartData}
                            isPositive={isPositive}
                            selectedPeriod={selectedPeriod}
                            onPeriodChange={setSelectedPeriod}
                            onHover={setHoveredValue}
                        />

                        {/* Buying Power Card */}
                        <BuyingPowerCard
                            buyingPower={8420.50}
                            onDeposit={() => console.log('Deposit clicked')}
                        />

                        {/* Algorithm Stats */}
                        <AlgorithmStatsCard account={selectedAccount} />

                        {/* News Feed */}
                        <NewsFeed
                            news={news}
                            onItemClick={(item) => console.log('News clicked:', item)}
                        />
                    </div>

                    {/* Right Column - Watchlist & Positions */}
                    <div className="space-y-6">
                        {/* Watchlist */}
                        <WatchlistCard
                            items={watchlist}
                            onItemClick={(item) => console.log('Stock clicked:', item)}
                            onAddClick={() => console.log('Add to watchlist')}
                            onShowMore={() => console.log('Show more watchlist')}
                        />

                        {/* Active Positions */}
                        <PositionsCard
                            positions={positions}
                            onPositionClick={(position) => console.log('Position clicked:', position)}
                            onViewAll={() => console.log('View all positions')}
                        />

                        {/* Recent Activity */}
                        <RecentActivityCard
                            activities={activities}
                            onActivityClick={(activity) => console.log('Activity clicked:', activity)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}