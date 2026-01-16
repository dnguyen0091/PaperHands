type BuyingPowerCardProps = {
    buyingPower: number;
    onDeposit?: () => void;
};

export default function BuyingPowerCard({ buyingPower, onDeposit }: BuyingPowerCardProps) {
    return (
        <div className="bg-[#1a1a1a] rounded-xl p-5 border border-[#2a2a2a]">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-400 text-sm">Buying Power</p>
                    <p className="text-2xl font-bold mt-1">
                        ${buyingPower.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                </div>
                <button
                    onClick={onDeposit}
                    className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition-colors"
                >
                    Deposit
                </button>
            </div>
        </div>
    );
}
