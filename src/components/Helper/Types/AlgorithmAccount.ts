import type { Algorithm } from './Algorithm';

export type AlgorithmAccount = Algorithm & {
    portfolioValue: number;
    dailyChange: number;
    dailyChangePercent: number;
};
