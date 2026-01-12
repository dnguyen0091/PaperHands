
export default function PerformanceChart({ series }: { series: number[] }) {
    return (
        <div className="h-64">
            {/* Replace this with a real chart (Chart.js / Recharts / Apex) */}
            <div className="w-full h-full flex items-center justify-center text-sm text-gray-400 border-dashed border-2 border-gray-100 rounded">
                Performance chart placeholder — integrate Chart library and feed series: {series.join(', ')}
            </div>
        </div>
    );
}