import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();

  const onSubmission = () => {
    navigate("/home"); 
  };
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordValidation, setPasswordValidation] = useState({
    isValid: false,
    length: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
    matchesConfirm: false
  });

   useEffect(() => {
    const { password, confirmPassword } = formData;
    
    // Password validation criteria
    const length = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const matchesConfirm = password === confirmPassword && password !== '';
    
    // Check if all criteria are met
    const isValid = length && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
    
    setPasswordValidation({
      isValid,
      length,
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecialChar,
      matchesConfirm
    });
  }, [formData.password, formData.confirmPassword]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // registration logic skeleton
  // const [registrationStep, setRegistrationStep] = useState('form');
  // const { registerUser } = useAuth();
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // // Clear previous error/success messages
    // setError('');
    // setSuccessMsg('');
    
    // // Client-side validation
    // if (!passwordValidation.isValid) {
    //   setError('Please ensure your password meets all requirements');
    //   return;
    // }
    
    // if (!passwordValidation.matchesConfirm) {
    //   setError('Passwords do not match');
    //   return;
    // }
    
    // setIsLoading(true);
    
    // try {
    //   const API_URL = 'https://resumaker-api.onrender.com';
      
    //   // Send registration data to backend
    //   const response = await fetch(`${API_URL}/api/auth/register`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       firstName: formData.firstName,
    //       lastName: formData.lastName,
    //       email: formData.email,
    //       password: formData.password
    //     })
    //   });
      
    //   const data = await response.json();
      
    //   if (!response.ok) {
    //     throw new Error(data.message || 'Registration failed');
    //   }
    //   localStorage.setItem('email', formData.email);
    //   setRegistrationStep('verification');


    //   // Registration successful: store token and user data
    //   setSuccessMsg('User registered successfully!');
    //   // setRegistrationStep('complete');
      
    //   // registerUser(formData.firstName, formData.lastName, formData.email, formData.password);
    //   localStorage.setItem("user", JSON.stringify(data.user));
    //   localStorage.setItem("token", data.token);
    //   console.log(localStorage.getItem('user'));
    //   // Reset form
    //   setFormData({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   });
      
    // } catch (err) {
    //   setError(err.message || 'An error occurred during registration');
    //   console.error('Registration error:', err);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  // Skeleton for api call to verify email and register
  const handleVerificationSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // setIsLoading(true);
    // setError('');
    
    // try {
    //   const API_URL = 'https://resumaker-api.onrender.com';
    //   const verificationCode = document.getElementById('verificationCode').value;
    //   const tempToken = localStorage.getItem('tempRegToken');
      
    //   // Connect to endpoint to verify user
    //   const email=localStorage.getItem('email');
    //   console.log(email + " " + verificationCode);
    //   const response = await fetch(`${API_URL}/api/auth/verifyEmail`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // Include temp token if available
    //       ...(tempToken && { 'Authorization': `Bearer ${tempToken}` }),
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       verificationCode: verificationCode
    //     })
    //   });
      
    //   const data = await response.json();
      
    //   if (!response.ok) {
    //     throw new Error(data.message || 'Verification failed');
    //   }
      
    //   // Verification successful
    //   localStorage.removeItem('tempRegToken'); // Clean up temp token
    //   localStorage.removeItem('email');
      
    //   navigate('/resume-builder');
    // } catch (err) {
    //   setError(err.message || 'Verification failed. Please try again.');
    // } finally {
    //   setIsLoading(false);
    // }
  };


  
  // Handle verification completion skeleton
  const handleVerificationComplete = () => {
  //   setSuccessMsg('Registration successful! You can now log in.');
  //   setRegistrationStep('complete');
    
  //   // Reset form
  //   setFormData({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     password: '',
  //     confirmPassword: ''
  //   });
  // };
  
  // Skeleton for resending verification code
  // const handleResendCode = async () => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setError('');
    
  //   try {
  //     const API_URL = 'https://resumaker-api.onrender.com';
  //     const verificationCode = document.getElementById('verificationCode').value;
  //     const tempToken = localStorage.getItem('tempRegToken');
      
  //     // Connect to endpoint to verify user
  //     const email=localStorage.getItem('email');
  //     console.log(email + " " + verificationCode);
  //     const response = await fetch(`${API_URL}/api/auth/verifyEmail`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // Include temp token if available
  //         ...(tempToken && { 'Authorization': `Bearer ${tempToken}` }),
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         verificationCode: verificationCode
  //       })
  //     });
      
  //     const data = await response.json();
      
  //     if (!response.ok) {
  //       throw new Error(data.message || 'Verification failed');
  //     }
      
  //     // Verification successful
  //     localStorage.removeItem('tempRegToken'); // Clean up temp token
  //     localStorage.removeItem('email');
      
  //     navigate('/resume-builder');
  //   } catch (err) {
  //     setError(err.message || 'Verification failed. Please try again.');
  //   } finally {
  //     setIsLoading(false);
  //   }
  };

  return (
    <>
      <form className="flex flex-col mt-[4vh] items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col items-start mb-[2vh]">
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1 self-start">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-[40vh] h-[4vh] bg-transparent border-0 border-b-2 border-[var(--accent)] focus:outline-none focus:ring-0 text-white placeholder-white/50 mb-4"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
          {formData.password && (
            <div className="password-requirements">
              <p className="requirements-title" id="reqTitle">Password must have:</p>
              <ul className="requirements-list">
                <li className={passwordValidation.length ? 'met' : 'not-met'}>
                  At least 8 characters
                </li>
                <li className={passwordValidation.hasUppercase ? 'met' : 'not-met'}>
                  At least one uppercase letter
                </li>
                <li className={passwordValidation.hasLowercase ? 'met' : 'not-met'}>
                  At least one lowercase letter
                </li>
                <li className={passwordValidation.hasNumber ? 'met' : 'not-met'}>
                  At least one number
                </li>
                <li className={passwordValidation.hasSpecialChar ? 'met' : 'not-met'}>
                  At least one special character
                </li>
              </ul>
            </div>
          )}
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
            id="confirmPassword"
            placeholder="Re-enter your password"
            className="w-[40vh] h-[4vh] bg-transparent border-0 border-b-2 border-[var(--accent)] focus:outline-none focus:ring-0 text-white placeholder-white/50 mb-4"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {formData.confirmPassword && (
            <div className={`password-match ${passwordValidation.matchesConfirm ? 'matched' : 'not-matched'}`}>
              {passwordValidation.matchesConfirm ? 'Passwords match ✓' : 'Passwords do not match ✗'}
            </div>
          )}
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
