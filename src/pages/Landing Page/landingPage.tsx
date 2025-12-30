import { useState } from "react";
import Apple from "../../assets/logo/appleIcon.svg";
import Google from "../../assets/logo/googleIcon.svg";
import Microsoft from "../../assets/logo/microsoftIcon.svg";
import SignIn from "../../components/Forms/Authentication/signIn.tsx";
import SignUp from "../../components/Forms/Authentication/signUp.tsx";
import FrontPageInformation from "../../components/Helper/frontPageInformation.tsx";
import SignInUpToggle from "../../components/Helper/signInUpToggle.tsx";

export default function landingPage() {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div className="h-screen w-screen">
        <div className="flex flex-row h-full">
            <div className="bg-[var(--accent)] w-[40%] flex items-center justify-center">
            <div className="w-full max-w-md px-8">
                <div className="flex justify-center mb-8">
                <img
                    src="/paperhands-logo.svg"
                    alt="PaperHands Logo"
                    className="h-16 w-16"
                />
                </div>

                <div className="text-center mb-8"><p className="text-white/80">Let's get started</p></div>

                <div className="flex justify-center flex-col items-center">
                    <SignInUpToggle isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
                    {isSignIn ? <SignIn />:<SignUp />  }
                </div>
                
                <div className="flex items-center my-6 p-[2rem] gap-[0.5rem]">
                    <div className="flex-1 border-t border-white/30"></div>
                    <span className="px-4 text-white/70 text-sm">
                        or continue with
                    </span>
                    <div className="flex-1 border-t border-white/30"></div>
                </div>

                <div className="flex flex-row justify-center gap-[2rem] ">
                <button title="Google" className="w-[3vw] h-[3vw] bg-white rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center shadow-md">
                    <img src={Google} alt="Google" className="w-[2vw] h-[2vw]" />
                </button>
                <button title="Apple" className="w-[3vw] h-[3vw] bg-white rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center shadow-md">
                    <img src={Apple} alt="Apple" className="w-[2vw] h-[2vw]" />
                </button>
                <button title="Microsoft" className="w-[3vw] h-[3vw] bg-white rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center shadow-md">
                    <img
                    src={Microsoft}
                    alt="Microsoft"
                    className="w-[2vw] h-[2vw]"
                    />
                </button>
                </div>
            </div>
            </div>
            <FrontPageInformation />
        </div>
        </div>
    );
}
