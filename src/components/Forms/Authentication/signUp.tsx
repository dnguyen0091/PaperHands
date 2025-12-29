export default function signUp() {
  return (
    <>
      {/* Sign In Form */}
      <form className="flex flex-col space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-[15vw]"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-[15vw]"
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-white">
            <input type="checkbox" className="mr-2 rounded" />
            Remember me
          </label>
          <a href="#" className="text-white hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-white text-[var(--accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
        >
          Sign In
        </button>
      </form>
    </>
  );
}
