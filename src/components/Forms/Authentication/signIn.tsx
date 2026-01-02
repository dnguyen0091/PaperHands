import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eyeClosedIcon from "../../../assets/icons/eyeClosedIcon.svg";
import eyeOpenIcon from "../../../assets/icons/eyeOpenIcon.svg";

export default function SignIn() {
  const navigate = useNavigate()

  const handleSubmission = () => {
    navigate("/home"); 
  }

  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <form className="flex flex-col mt-[4vh] items-center">
        <div className="flex flex-col items-start mb-[2vh]">
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
            className="w-[26.5vw] h-[4vh] bg-transparent border-0 border-b-2 border-[var(--accent)] focus:outline-none focus:ring-0 text-white placeholder-white/50 mb-4"
          />
        </div>
        <div className="flex flex-col items-start mb-[2vh]">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white mb-1"
          >
            Password
          </label>

          <div className="flex flex-row border-0 border-b-2 border-[var(--accent)]">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="w-[25vw] h-[4vh] bg-transparent border-none focus:outline-none focus:ring-0 text-white placeholder-white/50 mb-4"
            />
            <button 
                  type="button"
                  className="bg-transparent border-none"
                  onClick={() => setShowPassword(prev => !prev)}
                >
                  {showPassword ? (
                    <img className="flex align-center justify-center w-[2vw]" src={eyeOpenIcon}></img>
                  ) : (
                    <img className="flex align-center justify-center w-[2vw]" src={eyeClosedIcon}></img>
                  )}
                </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-[12vw] mb-[2vh] text-sm">
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
          className="w-[15vw] h-[4vh] py-3 px-4 bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-white transition-colors duration-300"
          onClick={handleSubmission}
        >
          Sign In
        </button>
      </form>
    </>
  );
}
