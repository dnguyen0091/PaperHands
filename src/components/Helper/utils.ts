export const getStatusColor = (status: string): string => {
    switch (status) {
        case 'active':
            return 'bg-green-500';
        case 'paused':
            return 'bg-yellow-500';
        case 'testing':
            return 'bg-blue-500';
        default:
            return 'bg-gray-500';
    }
};

export const formatCurrency = (value: number, options?: Intl.NumberFormatOptions): string => {
    return value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        ...options,
    });
};

export const formatPercent = (value: number, showSign = true): string => {
    const sign = showSign && value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
};
