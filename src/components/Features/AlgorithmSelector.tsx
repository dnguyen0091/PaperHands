import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { AlgorithmAccount } from '../Helper/Types/AlgorithmAccount';
import { getStatusColor } from '../Helper/utils';

type AlgorithmSelectorProps = {
    algorithms: AlgorithmAccount[];
    selectedAlgorithm: string;
    onSelectAlgorithm: (id: string) => void;
    onCreateNew?: () => void;
};

export default function AlgorithmSelector({
    algorithms,
    selectedAlgorithm,
    onSelectAlgorithm,
    onCreateNew,
}: AlgorithmSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedAccount = algorithms.find((a) => a.id === selectedAlgorithm) || algorithms[0];

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
                <span className="text-sm font-medium">{selectedAccount?.name}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-2xl z-50 overflow-hidden"
                    >
                        <div className="p-3 border-b border-[#2a2a2a]">
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Select Account</p>
                        </div>
                        <div className="max-h-80 overflow-y-auto">
                            {algorithms.map((algo) => (
                                <button
                                    key={algo.id}
                                    onClick={() => {
                                        onSelectAlgorithm(algo.id);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full px-4 py-3 flex items-center justify-between hover:bg-[#252525] transition-colors ${
                                        selectedAlgorithm === algo.id ? 'bg-[#252525]' : ''
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${getStatusColor(algo.status)}`} />
                                        <div className="text-left">
                                            <p className="text-sm font-medium text-white">{algo.name}</p>
                                            <p className="text-xs text-gray-500">{algo.description}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-white">
                                            ${algo.portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </p>
                                        <p className={`text-xs ${algo.dailyChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {algo.dailyChange >= 0 ? '+' : ''}
                                            {algo.dailyChangePercent.toFixed(2)}%
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="p-3 border-t border-[#2a2a2a]">
                            <button
                                onClick={() => {
                                    onCreateNew?.();
                                    setIsOpen(false);
                                }}
                                className="w-full py-2 text-sm text-green-500 hover:text-green-400 font-medium transition-colors"
                            >
                                + Create New Algorithm
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
