export type Trade = {
    id: string;
    when: string;
    side: 'BUY' | 'SELL';
    symbol: string;
    qty: number;
    price: number;
};