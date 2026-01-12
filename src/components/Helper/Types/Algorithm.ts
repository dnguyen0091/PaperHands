export type AlgorithmStatus = 'active' | 'paused' | 'testing' | 'stopped';

export type Algorithm = {
    id: string;
    name: string;
    description: string;
    status: AlgorithmStatus;
    returns: number; // percentage
    winRate: number; // percentage
    totalTrades: number;
    activeSince: string; // ISO date string
    lastModified: string; // ISO date string
    parameters?: Record<string, any>;
};
