interface SignInUpToggleProps {
    isSignIn: boolean;
    setIsSignIn: (value: boolean) => void;
}

export default function SignInUpToggle({
    isSignIn,
    setIsSignIn,
}: SignInUpToggleProps) {
    return (
        <div className="mb-6">
            <div className="relative inline-flex bg-[var(--black)] backdrop-blur-sm rounded-full p-1 border border-white/20">
                
                <div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-lg transition-all duration-300 ease-out ${
                    isSignIn ? "left-1" : "left-[calc(50%+2px)]"
                }`}
                />

                <button
                type="button"
                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    isSignIn ? "text-[var(--accent)]" : "text-white/70 hover:text-white"
                }`}
                onClick={() => setIsSignIn(true)}
                >
                Sign In
                </button>

                <button
                type="button"
                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    !isSignIn
                    ? "text-[var(--accent)]"
                    : "text-white/70 hover:text-white"
                }`}
                onClick={() => setIsSignIn(false)}
                >
                Sign Up
                </button>

            </div>
        </div>
    );
}