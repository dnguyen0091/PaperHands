export type PositionItem = {
    symbol: string;
    shares: number;
    value: number;
    pnl: number;
    pnlPercent: number;
};

type PositionsCardProps = {
    positions: PositionItem[];
    onPositionClick?: (position: PositionItem) => void;
    onViewAll?: () => void;
};

export default function PositionsCard({ positions, onPositionClick, onViewAll }: PositionsCardProps) {
    return (
        <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden">
            <div className="px-5 py-4 border-b border-[#2a2a2a]">
                <h3 className="text-lg font-semibold">Positions</h3>
            </div>
            <div className="divide-y divide-[#2a2a2a]">
                {positions.map((position) => (
                    <button
                        key={position.symbol}
                        onClick={() => onPositionClick?.(position)}
                        className="w-full px-5 py-3.5 flex items-center justify-between hover:bg-[#252525] transition-colors"
                    >
                        <div className="text-left">
                            <p className="text-sm font-semibold">{position.symbol}</p>
                            <p className="text-xs text-gray-500">{position.shares} shares</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium">
                                ${position.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </p>
                            <p className={`text-xs ${position.pnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {position.pnl >= 0 ? '+' : ''}${Math.abs(position.pnl).toFixed(2)} ({position.pnl >= 0 ? '+' : ''}{position.pnlPercent.toFixed(2)}%)
                            </p>
                        </div>
                    </button>
                ))}
            </div>
            <div className="px-5 py-3 border-t border-[#2a2a2a]">
                <button
                    onClick={onViewAll}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                    View All Positions
                </button>
            </div>
        </div>
    );
}
