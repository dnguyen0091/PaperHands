type PortfolioHeaderProps = {
    value: number;
    dailyChange: number;
    dailyChangePercent: number;
    hoveredValue?: number | null;
};

export default function PortfolioHeader({
    value,
    dailyChange,
    dailyChangePercent,
    hoveredValue,
}: PortfolioHeaderProps) {
    const displayValue = hoveredValue ?? value;
    const isPositive = dailyChange >= 0;

    return (
        <div>
            <h1 className="text-5xl font-bold tracking-tight">
                ${displayValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h1>
            <div className={`flex items-center gap-2 mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                <span className="text-lg font-medium">
                    {isPositive ? '+' : ''}${Math.abs(dailyChange).toFixed(2)}
                </span>
                <span className="text-lg">
                    ({isPositive ? '+' : ''}{dailyChangePercent.toFixed(2)}%)
                </span>
                <span className="text-gray-500 text-sm ml-1">Today</span>
            </div>
        </div>
    );
}
