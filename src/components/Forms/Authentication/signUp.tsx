import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const onSubmission = () => {
    navigate("/under-construction"); //Placeholder
  };
  
  return (
    <>
      <form className="space-y-4">
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
            className="w-full rounded-[4px]"
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
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirms your password"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-white text-[var(--accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
          onClick={onSubmission}
        >
          Sign Up
        </button>
      </form>
    </>
  );
}
