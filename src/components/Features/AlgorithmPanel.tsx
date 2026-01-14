import { AnimatePresence, motion } from 'framer-motion';
import type { Algorithm } from '../Helper/Types/Algorithm';
import AlgorithmCard from './AlgorithmCard';

type AlgorithmPanelProps = {
    isOpen: boolean;
    onClose: () => void;
    algorithms: Algorithm[];
    onToggleAlgorithm?: (id: string) => void;
    onEditAlgorithm?: (id: string) => void;
    onViewDetails?: (id: string) => void;
};

export default function AlgorithmPanel({
    isOpen,
    onClose,
    algorithms,
    onToggleAlgorithm,
    onEditAlgorithm,
    onViewDetails,
}: AlgorithmPanelProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-screen w-full max-w-2xl bg-gradient-to-b from-slate-50 to-white shadow-2xl z-50 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 shadow-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold">Trading Algorithms</h2>
                                    <p className="text-slate-300 text-sm mt-1">
                                        Manage and monitor your automated trading strategies
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                >
                                    <span className="text-2xl">✕</span>
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                    <p className="text-xs text-slate-300 uppercase">Total</p>
                                    <p className="text-2xl font-bold">{algorithms.length}</p>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                    <p className="text-xs text-slate-300 uppercase">Active</p>
                                    <p className="text-2xl font-bold text-green-400">
                                        {algorithms.filter(a => a.status === 'active').length}
                                    </p>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                    <p className="text-xs text-slate-300 uppercase">Testing</p>
                                    <p className="text-2xl font-bold text-blue-400">
                                        {algorithms.filter(a => a.status === 'testing').length}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Bar */}
                        <div className="p-4 border-b border-gray-200 bg-white">
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Search algorithms..."
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg">
                                    + New Algorithm
                                </button>
                            </div>
                        </div>

                        {/* Algorithm List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                            {algorithms.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                    <span className="text-6xl mb-4">🤖</span>
                                    <p className="text-lg font-medium">No algorithms yet</p>
                                    <p className="text-sm">Create your first trading algorithm to get started</p>
                                </div>
                            ) : (
                                algorithms.map((algorithm) => (
                                    <AlgorithmCard
                                        key={algorithm.id}
                                        algorithm={algorithm}
                                        onToggle={onToggleAlgorithm}
                                        onEdit={onEditAlgorithm}
                                        onViewDetails={onViewDetails}
                                    />
                                ))
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
