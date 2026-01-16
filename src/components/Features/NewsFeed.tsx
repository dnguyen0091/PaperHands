import type { NewsItem } from '../Helper/Types/NewsItem';

type NewsFeedProps = {
    news: NewsItem[];
    onItemClick?: (item: NewsItem) => void;
};

export default function NewsFeed({ news, onItemClick }: NewsFeedProps) {
    return (
        <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden">
            <div className="px-5 py-4 border-b border-[#2a2a2a]">
                <h3 className="text-lg font-semibold">News</h3>
            </div>
            <div className="divide-y divide-[#2a2a2a]">
                {news.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onItemClick?.(item)}
                        className="w-full px-5 py-4 text-left hover:bg-[#252525] transition-colors"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm text-gray-400">{item.source}</span>
                                    {item.symbol && (
                                        <span className="px-2 py-0.5 text-xs bg-[#2a2a2a] rounded text-green-500">
                                            {item.symbol}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm font-medium text-white leading-snug">{item.title}</p>
                            </div>
                            <span className="text-xs text-gray-500 whitespace-nowrap">{item.time}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
