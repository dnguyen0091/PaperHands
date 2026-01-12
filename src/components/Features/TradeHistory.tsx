
export default function TradeHistory() {
    const demo = [
        { id: 't1', when: '2025-12-29', side: 'BUY', symbol: 'AAPL', qty: 5, price: 158 },
        { id: 't2', when: '2025-12-28', side: 'SELL', symbol: 'TSLA', qty: 1, price: 722 },
    ];

    return (
        <div className="text-sm">
            {demo.map(t => (
                <div key={t.id} className="flex justify-between py-2 border-b">
                    <div>
                        <div className="font-medium">{t.symbol} <span className="text-xs text-gray-500">· {t.when}</span></div>
                        <div className="text-xs text-gray-500">{t.side} {t.qty} @ ${t.price}</div>
                    </div>
                    <div className={`text-sm ${t.side === 'BUY' ? 'text-green-600' : 'text-red-600'}`}>{t.side}</div>
                </div>
            ))}
        </div>
    );
}