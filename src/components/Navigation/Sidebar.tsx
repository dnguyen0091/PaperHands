import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import graphIcon from '../../assets/icons/graphIcon.svg';
import portfolioIcon from '../../assets/icons/portfolioIcon.svg';
import robotIcon from '../../assets/icons/robotIcon.svg';
import settingsIcon from '../../assets/icons/settingsIcon.svg';
import stockIcon from '../../assets/icons/stockIcon.svg';

type NavItem = {
    path: string;
    label: string;
    icon: string;
};

const navItems: NavItem[] = [
    { path: '/home', label: 'Dashboard', icon: graphIcon },
    { path: '/algorithms', label: 'Algorithms', icon: robotIcon },
    { path: '/portfolio', label: 'Portfolio', icon: portfolioIcon },
    { path: '/history', label: 'History', icon: stockIcon },
    { path: '/settings', label: 'Settings', icon: settingsIcon },
];

export default function Sidebar() {
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-[#1e1e1e] border-r border-[#2a2a2a] text-[#e3e3e3] z-50 flex flex-col transition-all duration-[270ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                isExpanded ? 'w-64' : 'w-16'
            }`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            {/* Header */}
            <div className="p-4 border-b border-[#2a2a2a] mb-[2.5rem]">
                <div className={`flex items-center gap-3 ${!isExpanded && 'justify-center'}`}>
                    {/* Logo Placeholder */}
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shrink-0">
                        <span className="text-white text-sm font-bold">P</span>
                    </div>
                    {isExpanded && (
                        <span 
                            className="text-lg font-semibold text-white whitespace-nowrap"
                            style={{
                                animation: 'fadeInSlide 400ms ease-out forwards',
                                opacity: 0
                            }}
                        >
                            Paper Hands
                        </span>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-2 px-2">
                <div className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                                    group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all
                                    ${isActive 
                                        ? 'bg-[#2a2a2a] text-white' 
                                        : 'text-[#b3b3b3] hover:bg-[#252525] hover:text-white'
                                    }
                                    ${!isExpanded && 'justify-center'}
                                `}
                            >
                                <img src={item.icon} alt={item.label} className="w-[1.5vw] h-[1.5vw] shrink-0" />
                                {isExpanded && (
                                    <div 
                                        className="flex-1 flex items-center justify-between min-w-0"
                                        style={{
                                            animation: 'fadeInSlide 400ms ease-out forwards',
                                            opacity: 0
                                        }}
                                    >
                                        <span className="text-sm font-medium truncate">{item.label}</span>
                                        {isActive && (
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                        )}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Bottom Section */}
            <div className="border-t border-[#2a2a2a] p-4">
                <button
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#2a2a2a] transition-colors ${
                        !isExpanded && 'justify-center'
                    }`}
                >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        U
                    </div>
                    {isExpanded && (
                        <div 
                            className="flex-1 min-w-0"
                            style={{
                                animation: 'fadeInSlide 400ms ease-out forwards',
                                opacity: 0
                            }}
                        >
                            <div className="text-sm font-medium truncate">User Account</div>
                            <div className="text-xs text-[#808080] truncate">user@example.com</div>
                        </div>
                    )}
                </button>
            </div>
        </aside>
    );
}
