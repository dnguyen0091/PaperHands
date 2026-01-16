import type { AlgorithmAccount } from '../Helper/Types/AlgorithmAccount';
import { getStatusColor } from '../Helper/utils';

type AlgorithmStatsCardProps = {
    account: AlgorithmAccount;
};

export default function AlgorithmStatsCard({ account }: AlgorithmStatsCardProps) {
    return (
        <div className="bg-[#1a1a1a] rounded-xl p-5 border border-[#2a2a2a]">
            <h3 className="text-lg font-semibold mb-4">Algorithm Performance</h3>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <p className="text-gray-400 text-sm">Win Rate</p>
                    <p className="text-xl font-bold text-green-500">{account.winRate}%</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Total Return</p>
                    <p className={`text-xl font-bold ${account.returns >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {account.returns >= 0 ? '+' : ''}{account.returns}%
                    </p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Total Trades</p>
                    <p className="text-xl font-bold">{account.totalTrades}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Status</p>
                    <div className="flex items-center gap-2 mt-1">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(account.status)}`} />
                        <span className="text-sm capitalize">{account.status}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
