import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import accountIcon from '../../assets/icons/accountIcon.svg';
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
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    return (
        <aside
            className={`h-screen bg-[#1e1e1e] border-r border-[#2a2a2a] text-[#e3e3e3] z-50 flex flex-col shrink-0 transition-all duration-[270ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
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
                                    group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-opacity
                                    ${isActive 
                                        ? 'text-white opacity-100' 
                                        : 'text-[#b3b3b3] opacity-100 hover:opacity-50'
                                    }
                                    ${!isExpanded && 'justify-center'}
                                `}
                            >
                                <img src={item.icon} alt={item.label} className="w-[1.5vw] h-[1.5vw] shrink-0 invert" />
                                {isExpanded && (
                                    <div 
                                        className="flex-1 flex items-center justify-between min-w-0"
                                        style={{
                                            animation: 'fadeInSlide 400ms ease-out forwards',
                                            opacity: 0
                                        }}
                                    >
                                        <span className="truncate no-underline text-inherit">{item.label}</span>
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

            {/* User Section */}
            <div className="p-2 relative">
                {/* Drop-up Menu */}
                {isUserMenuOpen && (
                    <div 
                        className="absolute bottom-full left-2 right-2 mb-2 bg-[#252525] border border-[#3a3a3a] rounded-lg shadow-lg overflow-hidden"
                        style={{
                            animation: 'fadeInSlide 200ms ease-out forwards',
                            minWidth: isExpanded ? 'auto' : '180px'
                        }}
                    >
                        <Link
                            to="/settings"
                            className="flex items-center gap-3 px-4 py-3 text-[#b3b3b3] hover:bg-[#2a2a2a] hover:text-white transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm">Settings</span>
                        </Link>
                        <Link
                            to="/profile"
                            className="flex items-center gap-3 px-4 py-3 text-[#b3b3b3] hover:bg-[#2a2a2a] hover:text-white transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-sm">Profile</span>
                        </Link>
                        <div className="border-t border-[#3a3a3a]" />
                        <button
                            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-[#2a2a2a] hover:text-red-300 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span className="text-sm">Sign Out</span>
                        </button>
                    </div>
                )}

                {/* User Button */}
                <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-opacity hover:opacity-50 bg-transparent border-none ${
                        !isExpanded && 'justify-center'
                    }`}
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        <img src={accountIcon} alt="User" className='w-[1.5vw] h-[1.5vh]' />
                    </div>
                    {isExpanded && (
                        <div 
                            className="flex-1 flex items-center justify-between min-w-0"
                            style={{
                                animation: 'fadeInSlide 400ms ease-out forwards',
                                opacity: 0
                            }}
                        >
                            <span className="text-sm font-medium truncate text-white invert">Username</span>
                            <svg 
                                className={`w-4 h-4 text-white transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                    )}
                </button>
            </div>
        </aside>
    );
}
