import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate()

  const handleSubmission = () => {
    navigate("/home"); 
  }
  return (
    <>
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
            placeholder="you@example.com"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
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
            placeholder="••••••••"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-white">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-[var(--accent)] focus:ring-[var(--accent)] mr-2" />
            Remember me
          </label>
          <a href="#" className="text-white hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-white text-[var(--accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
          onClick={handleSubmission}
        >
          Sign In
        </button>
      </form>
    </>
  );
}
