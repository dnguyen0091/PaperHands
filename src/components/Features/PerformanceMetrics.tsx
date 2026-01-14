import MetricCard from './MetricCard';

type PerformanceMetricsProps = {
    totalValue: number;
    todayPnL: number;
    todayPnLPercent: number;
    totalReturn: number;
    winRate: number;
    activePositions: number;
};

export default function PerformanceMetrics({
    totalValue,
    todayPnL,
    todayPnLPercent,
    totalReturn,
    winRate,
    activePositions,
}: PerformanceMetricsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
                label="Portfolio Value"
                value={`$${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                change={totalReturn}
                trend={totalReturn >= 0 ? 'up' : 'down'}
                icon="💰"
            />

            <MetricCard
                label="Today's P&L"
                value={`$${todayPnL.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                change={todayPnLPercent}
                trend={todayPnL >= 0 ? 'up' : 'down'}
                icon="📈"
            />

            <MetricCard
                label="Win Rate"
                value={`${winRate.toFixed(1)}%`}
                trend={winRate >= 50 ? 'up' : 'down'}
                icon="🎯"
            />

            <MetricCard
                label="Active Positions"
                value={activePositions.toString()}
                trend="neutral"
                icon="📊"
            />
        </div>
    );
}
