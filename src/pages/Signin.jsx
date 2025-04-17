import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!isSignIn) {
      if (!formData.name) {
        newErrors.name = "Name is required";
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      try {
        if (isSignIn) {
          // Sign In Logic
          // Check for test credentials
          if (formData.email === "test123@gmail.com" && formData.password === "test123") {
            console.log("Test login successful");
            // Redirect to home page for test user
            navigate("/");
            return;
          }
          
          // Simulate API call for other users
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // For demo purposes - in a real app, you'd verify with your backend
          console.log("Login successful", formData);
          
          // Redirect to home page after successful login
          navigate("/");
        } else {
          // Sign Up Logic
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // For demo purposes - in a real app, you'd register with your backend
          console.log("Registration successful", formData);
          
          // Switch to sign in after successful registration
          setIsSignIn(true);
          setFormData({
            ...formData,
            confirmPassword: "",
          });
          
          // Show success message
          alert("Registration successful! Please sign in with your new account.");
        }
      } catch (error) {
        console.error(isSignIn ? "Login failed" : "Registration failed", error);
        setErrors({ 
          general: isSignIn 
            ? "Authentication failed. Please try again." 
            : "Registration failed. Please try again."
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setErrors({});
    setFormData({
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] px-4">
      <div className="max-w-md w-full space-y-8 bg-[#2a2a2a] p-10 rounded-xl shadow-2xl">
        <div className="text-center">
          <div className="flex justify-center">
            <FontAwesomeIcon icon={faShieldAlt} className="text-5xl text-[#218EA6]" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            {isSignIn ? "Sign in to SafeWatch" : "Create an Account"}
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {isSignIn 
              ? "Access your dashboard and monitoring tools" 
              : "Join SafeWatch to help make communities safer"
            }
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {errors.general && (
            <div className="bg-red-900/30 border border-red-500 text-red-300 px-4 py-3 rounded">
              {errors.general}
            </div>
          )}
          
          <div className="rounded-md space-y-4">
            {!isSignIn && (
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`appearance-none rounded-lg relative block w-full px-10 py-3 border ${
                      errors.name ? 'border-red-500 bg-red-900/10' : 'border-gray-700 bg-gray-800'
                    } placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#218EA6] focus:border-transparent`}
                    placeholder="Full Name"
                  />
                </div>
                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`appearance-none rounded-lg relative block w-full px-10 py-3 border ${
                    errors.email ? 'border-red-500 bg-red-900/10' : 'border-gray-700 bg-gray-800'
                  } placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#218EA6] focus:border-transparent`}
                  placeholder="Email address"
                />
              </div>
              {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isSignIn ? "current-password" : "new-password"}
                  value={formData.password}
                  onChange={handleChange}
                  className={`appearance-none rounded-lg relative block w-full px-10 py-3 border ${
                    errors.password ? 'border-red-500 bg-red-900/10' : 'border-gray-700 bg-gray-800'
                  } placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#218EA6] focus:border-transparent`}
                  placeholder="Password"
                />
              </div>
              {errors.password && <p className="mt-2 text-sm text-red-400">{errors.password}</p>}
            </div>
            
            {!isSignIn && (
              <div>
                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`appearance-none rounded-lg relative block w-full px-10 py-3 border ${
                      errors.confirmPassword ? 'border-red-500 bg-red-900/10' : 'border-gray-700 bg-gray-800'
                    } placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#218EA6] focus:border-transparent`}
                    placeholder="Confirm Password"
                  />
                </div>
                {errors.confirmPassword && <p className="mt-2 text-sm text-red-400">{errors.confirmPassword}</p>}
              </div>
            )}
          </div>

          {isSignIn && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#218EA6] focus:ring-[#218EA6] border-gray-700 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#218EA6] hover:text-[#30b0d1]">
                  Forgot your password?
                </a>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#218EA6] to-[#1a6c7e] hover:from-[#30b0d1] hover:to-[#218EA6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#218EA6] transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : isSignIn ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
            <button 
              onClick={toggleForm} 
              className="font-medium text-[#218EA6] hover:text-[#30b0d1] focus:outline-none"
            >
              {isSignIn ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
