
export default function PositionsTable() {
    const demo = [
        { symbol: 'AAPL', qty: 10, cost: 150.0, market: 160.5, pnl: 105.0 },
        { symbol: 'TSLA', qty: 2, cost: 700.0, market: 720.1, pnl: 40.2 },
    ];

    return (
        <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
                <tr>
                    <th>Symbol</th><th>Qty</th><th>Cost</th><th>Market</th><th>P&L</th>
                </tr>
            </thead>
            <tbody>
                {demo.map((p) => (
                    <tr key={p.symbol} className="border-t">
                        <td>{p.symbol}</td>
                        <td>{p.qty}</td>
                        <td>${p.cost}</td>
                        <td>${p.market}</td>
                        <td className={p.pnl >= 0 ? 'text-green-600' : 'text-red-600'}>${p.pnl.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}