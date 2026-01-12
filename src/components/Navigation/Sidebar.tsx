import { motion } from 'framer-motion';
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

    return (
        <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl z-40"
        >
            {/* Logo/Brand */}
            <div className="p-6 border-b border-slate-700">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    PaperHands
                </h1>
                <p className="text-xs text-slate-400 mt-1">Paper Trading Platform</p>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="relative block"
                        >
                            <motion.div
                                whileHover={{ x: 4 }}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                                    ${isActive
                                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/50'
                                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                    }
                                `}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="font-medium">{item.label}</span>
                            </motion.div>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
                <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-semibold">
                        U
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium">User Account</p>
                        <p className="text-xs text-slate-400">View Profile</p>
                    </div>
                </div>
            </div>
        </motion.aside>
    );
}
