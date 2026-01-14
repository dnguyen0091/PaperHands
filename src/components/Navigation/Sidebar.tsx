import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavItem = {
    path: string;
    label: string;
    icon: string;
};

const navItems: NavItem[] = [
    { path: '/home', label: 'Dashboard', icon: '📊' },
    { path: '/algorithms', label: 'Algorithms', icon: '🤖' },
    { path: '/portfolio', label: 'Portfolio', icon: '💼' },
    { path: '/history', label: 'History', icon: '📈' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
];

export default function Sidebar() {
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-[#1e1e1e] border-r border-[#2a2a2a] text-[#e3e3e3] z-50 flex flex-col ${
                isExpanded ? 'w-64' : 'w-16'
            }`}
            style={{
                transition: 'width 2700ms cubic-bezier(0.23, 1, 0.32, 1)'
            }}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            {/* Header */}
            <div className="p-4 border-b border-[#2a2a2a]">
                <button
                    className={`w-full flex items-center gap-3 px-3 py-2.5 bg-transparent border border-[#3a3a3a] rounded-lg hover:bg-[#2a2a2a] transition-colors ${
                        !isExpanded && 'justify-center'
                    }`}
                >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    {isExpanded && (
                        <span 
                            className="text-sm font-medium whitespace-nowrap"
                            style={{
                                animation: 'fadeInSlide 400ms ease-out forwards',
                                opacity: 0
                            }}
                        >
                            New Session
                        </span>
                    )}
                </button>
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
                                <span className="text-lg shrink-0">{item.icon}</span>
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
