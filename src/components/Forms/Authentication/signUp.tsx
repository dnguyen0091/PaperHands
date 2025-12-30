import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const onSubmission = () => {
    navigate("/home"); 
  };
  
  return (
    <>
      <form className="flex flex-col mt-[4vh] items-center">
        <div className="flex flex-col items-start mb-[2vh]">
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1 self-start">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-[40vh] h-[4vh] bg-transparent border-0 border-b-2 border-[var(--accent)] focus:outline-none focus:ring-0 text-white placeholder-white/50 mb-4"
          />
        </div>

        <div className="flex flex-col items-start mb-[2vh]">
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
            className="w-[40vh] h-[4vh] bg-transparent border-0 border-b-2 border-[var(--accent)] focus:outline-none focus:ring-0 text-white placeholder-white/50 mb-4"
          />
        </div>

        <div className="flex flex-col items-start mb-[4vh]">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Re-enter your password"
            className="w-[40vh] h-[4vh] bg-transparent border-0 border-b-2 border-[var(--accent)] focus:outline-none focus:ring-0 text-white placeholder-white/50 mb-4"
          />
        </div>

        <button
          type="submit"
          className="w-[15vw] h-[4vh] mt-[4vh] py-3 px-4 bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-white transition-colors duration-300"
          onClick={onSubmission}
        >
          Sign Up
        </button>
      </form>
    </>
  );
}
