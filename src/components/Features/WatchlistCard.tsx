import type { WatchlistItem } from '../Helper/Types/WatchlistItem';

type WatchlistCardProps = {
    items: WatchlistItem[];
    onItemClick?: (item: WatchlistItem) => void;
    onAddClick?: () => void;
    onShowMore?: () => void;
};

export default function WatchlistCard({ items, onItemClick, onAddClick, onShowMore }: WatchlistCardProps) {
    return (
        <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden">
            <div className="px-5 py-4 border-b border-[#2a2a2a] flex items-center justify-between">
                <h3 className="text-lg font-semibold">Watchlist</h3>
                <button
                    onClick={onAddClick}
                    className="text-green-500 hover:text-green-400 text-sm font-medium transition-colors"
                >
                    + Add
                </button>
            </div>
            <div className="divide-y divide-[#2a2a2a]">
                {items.map((stock) => (
                    <button
                        key={stock.symbol}
                        onClick={() => onItemClick?.(stock)}
                        className="w-full px-5 py-3.5 flex items-center justify-between hover:bg-[#252525] transition-colors"
                    >
                        <div className="text-left">
                            <p className="text-sm font-semibold">{stock.symbol}</p>
                            <p className="text-xs text-gray-500">{stock.name}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium">${stock.price.toFixed(2)}</p>
                            <p className={`text-xs ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                            </p>
                        </div>
                    </button>
                ))}
            </div>
            <div className="px-5 py-3 border-t border-[#2a2a2a]">
                <button
                    onClick={onShowMore}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                    Show More
                </button>
            </div>
        </div>
    );
}
