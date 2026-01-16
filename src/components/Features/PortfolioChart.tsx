import { useRef, useState } from 'react';

export type TimePeriod = '1D' | '1W' | '1M' | '3M' | '1Y' | 'ALL';

type PortfolioChartProps = {
    data: number[];
    isPositive: boolean;
    selectedPeriod: TimePeriod;
    onPeriodChange: (period: TimePeriod) => void;
    onHover?: (value: number | null) => void;
};

const TIME_PERIODS: TimePeriod[] = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

export default function PortfolioChart({
    data,
    isPositive,
    selectedPeriod,
    onPeriodChange,
    onHover,
}: PortfolioChartProps) {
    const chartRef = useRef<SVGSVGElement>(null);
    const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number } | null>(null);

    const chartWidth = 800;
    const chartHeight = 300;
    const padding = { top: 20, right: 20, bottom: 20, left: 20 };

    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);
    const valueRange = maxValue - minValue || 1;

    const getX = (index: number) =>
        padding.left + (index / (data.length - 1)) * (chartWidth - padding.left - padding.right);
    const getY = (value: number) =>
        chartHeight - padding.bottom - ((value - minValue) / valueRange) * (chartHeight - padding.top - padding.bottom);

    const pathD = data.map((value, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(value)}`).join(' ');
    const areaD = `${pathD} L ${getX(data.length - 1)} ${chartHeight - padding.bottom} L ${padding.left} ${chartHeight - padding.bottom} Z`;

    const handleChartHover = (e: React.MouseEvent<SVGSVGElement>) => {
        if (!chartRef.current) return;
        const rect = chartRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const scaleX = chartWidth / rect.width;
        const scaledX = x * scaleX;
        const relativeX = (scaledX - padding.left) / (chartWidth - padding.left - padding.right);
        const index = Math.max(0, Math.min(data.length - 1, Math.round(relativeX * (data.length - 1))));
        setHoveredPoint({ x: getX(index), y: getY(data[index]) });
        onHover?.(data[index]);
    };

    const handleChartLeave = () => {
        setHoveredPoint(null);
        onHover?.(null);
    };

    const color = isPositive ? '#22c55e' : '#ef4444';

    return (
        <div className="relative">
            <svg
                ref={chartRef}
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="w-full h-64 cursor-crosshair"
                onMouseMove={handleChartHover}
                onMouseLeave={handleChartLeave}
            >
                <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Area fill */}
                <path d={areaD} fill="url(#chartGradient)" />

                {/* Line */}
                <path
                    d={pathD}
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Hover indicator */}
                {hoveredPoint && (
                    <>
                        <line
                            x1={hoveredPoint.x}
                            y1={padding.top}
                            x2={hoveredPoint.x}
                            y2={chartHeight - padding.bottom}
                            stroke="#444"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                        />
                        <circle cx={hoveredPoint.x} cy={hoveredPoint.y} r="6" fill={color} stroke="#000" strokeWidth="2" />
                    </>
                )}
            </svg>

            {/* Time Period Selector */}
            <div className="flex items-center gap-1 mt-4">
                {TIME_PERIODS.map((period) => (
                    <button
                        key={period}
                        onClick={() => onPeriodChange(period)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                            selectedPeriod === period
                                ? isPositive
                                    ? 'bg-green-500/20 text-green-500'
                                    : 'bg-red-500/20 text-red-500'
                                : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
                        }`}
                    >
                        {period}
                    </button>
                ))}
            </div>
        </div>
    );
}