import { motion } from 'framer-motion';
import type { Algorithm } from '../Helper/Types/Algorithm';

type AlgorithmCardProps = {
    algorithm: Algorithm;
    onToggle?: (id: string) => void;
    onEdit?: (id: string) => void;
    onViewDetails?: (id: string) => void;
};

export default function AlgorithmCard({ algorithm, onToggle, onEdit, onViewDetails }: AlgorithmCardProps) {
    const getStatusColor = () => {
        switch (algorithm.status) {
            case 'active': return 'bg-green-100 text-green-800 border-green-200';
            case 'paused': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'testing': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'stopped': return 'bg-gray-100 text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusIcon = () => {
        switch (algorithm.status) {
            case 'active': return '▶️';
            case 'paused': return '⏸️';
            case 'testing': return '🧪';
            case 'stopped': return '⏹️';
            default: return '⏹️';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{algorithm.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{algorithm.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor()} flex items-center gap-1`}>
                    <span>{getStatusIcon()}</span>
                    {algorithm.status.toUpperCase()}
                </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-b border-gray-100">
                <div>
                    <p className="text-xs text-gray-500 uppercase">Returns</p>
                    <p className={`text-lg font-bold ${algorithm.returns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {algorithm.returns >= 0 ? '+' : ''}{algorithm.returns.toFixed(2)}%
                    </p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase">Win Rate</p>
                    <p className="text-lg font-bold text-gray-900">{algorithm.winRate.toFixed(1)}%</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase">Trades</p>
                    <p className="text-lg font-bold text-gray-900">{algorithm.totalTrades}</p>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
                <button
                    onClick={() => onToggle?.(algorithm.id)}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${algorithm.status === 'active'
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                            : 'bg-green-500 hover:bg-green-600 text-white'
                        }`}
                >
                    {algorithm.status === 'active' ? 'Pause' : 'Start'}
                </button>
                <button
                    onClick={() => onEdit?.(algorithm.id)}
                    className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                >
                    Edit
                </button>
                <button
                    onClick={() => onViewDetails?.(algorithm.id)}
                    className="px-3 py-2 rounded-lg text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                >
                    Details
                </button>
            </div>
        </motion.div>
    );
}
