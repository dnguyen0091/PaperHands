import type { Activity, ActivityType } from '../Helper/Types/Activity';

type RecentActivityCardProps = {
    activities: Activity[];
    onActivityClick?: (activity: Activity) => void;
};

const getActivityStyle = (type: ActivityType): { bgColor: string; textColor: string; label: string } => {
    switch (type) {
        case 'BUY':
            return { bgColor: 'bg-green-500/20', textColor: 'text-green-500', label: 'BUY' };
        case 'SELL':
            return { bgColor: 'bg-red-500/20', textColor: 'text-red-500', label: 'SELL' };
        case 'DIV':
            return { bgColor: 'bg-blue-500/20', textColor: 'text-blue-500', label: 'DIV' };
        case 'DEPOSIT':
            return { bgColor: 'bg-emerald-500/20', textColor: 'text-emerald-500', label: 'DEP' };
        case 'WITHDRAWAL':
            return { bgColor: 'bg-orange-500/20', textColor: 'text-orange-500', label: 'WDR' };
        default:
            return { bgColor: 'bg-gray-500/20', textColor: 'text-gray-500', label: '?' };
    }
};

export default function RecentActivityCard({ activities, onActivityClick }: RecentActivityCardProps) {
    return (
        <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden">
            <div className="px-5 py-4 border-b border-[#2a2a2a]">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
            </div>
            <div className="divide-y divide-[#2a2a2a]">
                {activities.map((activity) => {
                    const style = getActivityStyle(activity.type);
                    return (
                        <button
                            key={activity.id}
                            onClick={() => onActivityClick?.(activity)}
                            className="w-full px-5 py-3.5 flex items-center gap-3 hover:bg-[#252525] transition-colors"
                        >
                            <div className={`w-8 h-8 rounded-full ${style.bgColor} flex items-center justify-center`}>
                                <span className={`${style.textColor} text-xs font-medium`}>{style.label}</span>
                            </div>
                            <div className="flex-1 text-left">
                                <p className="text-sm font-medium">{activity.description}</p>
                                <p className="text-xs text-gray-500">{activity.details}</p>
                            </div>
                            <span className="text-xs text-gray-500">{activity.time}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
