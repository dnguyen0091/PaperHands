import type { TimePeriod } from '../Features/PortfolioChart';

// Utility function to generate mock chart data
export const generateChartData = (period: TimePeriod, baseValue: number): number[] => {
    const points: number[] = [];
    let numPoints = 0;

    switch (period) {
        case '1D':
            numPoints = 78;
            break;
        case '1W':
            numPoints = 35;
            break;
        case '1M':
            numPoints = 22;
            break;
        case '3M':
            numPoints = 65;
            break;
        case '1Y':
            numPoints = 252;
            break;
        case 'ALL':
            numPoints = 500;
            break;
    }

    let value = baseValue * 0.85;
    for (let i = 0; i < numPoints; i++) {
        const volatility = period === '1D' ? 0.002 : 0.015;
        const trend = 0.0003;
        value = value * (1 + (Math.random() - 0.48) * volatility + trend);
        points.push(value);
    }
    return points;
};
