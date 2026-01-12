import { motion } from 'framer-motion';

type MetricCardProps = {
    label: string;
    value: string;
    change?: number;
    trend?: 'up' | 'down' | 'neutral';
    icon?: string;
};

export default function MetricCard({ label, value, change, trend = 'neutral', icon }: MetricCardProps) {
    const getTrendColor = () => {
        if (trend === 'up') return 'text-green-600';
        if (trend === 'down') return 'text-red-600';
        return 'text-gray-600';
    };

    const getChangeColor = () => {
        if (change === undefined) return '';
        return change >= 0 ? 'text-green-600' : 'text-red-600';
    };

    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-200 hover:shadow-xl"
        >
            <div className="flex items-start justify-between mb-2">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{label}</p>
                {icon && <span className="text-2xl">{icon}</span>}
            </div>

            <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                {change !== undefined && (
                    <span className={`text-sm font-semibold ${getChangeColor()}`}>
                        {change >= 0 ? '+' : ''}{change.toFixed(2)}%
                    </span>
                )}
            </div>

            {/* Optional mini sparkline placeholder */}
            <div className="mt-3 h-8 flex items-end gap-1">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className={`flex-1 rounded-t ${getTrendColor().replace('text', 'bg')} opacity-30`}
                        style={{ height: `${Math.random() * 100}%` }}
                    />
                ))}
            </div>
        </motion.div>
    );
}
