export type ActivityType = 'BUY' | 'SELL' | 'DIV' | 'DEPOSIT' | 'WITHDRAWAL';

export type Activity = {
    id: string;
    type: ActivityType;
    symbol?: string;
    description: string;
    details: string;
    time: string;
};
