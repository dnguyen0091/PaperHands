export default function frontPageInformation() {

    return (
        <>
        {/* Information Section */}
            <div className="bg-[var(--black)] w-[60%] flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--accent)] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-2xl px-12 text-center">
                {/* Main Heading */}
                <h2 className="text-5xl font-bold text-white mb-6">
                Track Your Investments with Confidence
                </h2>

                {/* Subtitle */}
                <p className="text-xl text-[var(--secondary)] mb-12">
                PaperHands helps you monitor your portfolio, analyze market
                trends, and make informed investment decisions—all in one place.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-3 gap-6 text-left">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                        className="w-6 h-6 text-[var(--accent)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                    </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                    Real-time Tracking
                    </h3>
                    <p className="text-sm text-[var(--secondary)]">
                    Monitor your investments with live market data updates.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                        className="w-6 h-6 text-[var(--accent)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                    Portfolio Analytics
                    </h3>
                    <p className="text-sm text-[var(--secondary)]">
                    Get detailed insights and performance metrics.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                        className="w-6 h-6 text-[var(--accent)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                    </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                    Secure & Private
                    </h3>
                    <p className="text-sm text-[var(--secondary)]">
                    Your data is encrypted and protected at all times.
                    </p>
                </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-16 mt-12 pt-12 border-t border-white/10">
                <div>
                    <p className="text-4xl font-bold text-[var(--accent)]">10K+</p>
                    <p className="text-sm text-[var(--secondary)]">Active Users</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-[var(--accent)]">$2B+</p>
                    <p className="text-sm text-[var(--secondary)]">
                    Assets Tracked
                    </p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-[var(--accent)]">99.9%</p>
                    <p className="text-sm text-[var(--secondary)]">Uptime</p>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}