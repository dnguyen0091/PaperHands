import { useState } from 'react';

export default function StrategyTester() {
    const [code, setCode] = useState('// paste or write strategy');
    const [running, setRunning] = useState(false);

    const run = () => {
        setRunning(true);
        // TODO: send code to backend/testing sandbox, run on historical data via alpaca/finnhub
        setTimeout(() => setRunning(false), 1000);
    };

    return (
        <div className="flex flex-col gap-2">
            <textarea className="w-full h-32 p-2 border rounded" value={code} onChange={e => setCode(e.target.value)} />
            <div className="flex gap-2">
                <button onClick={run} className="btn">{running ? 'Running...' : 'Run Backtest'}</button>
                <button className="btn-ghost">Save</button>
            </div>
        </div>
    );
}