import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ React Router navigation hook

  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    
    

    navigate("/Login"); // ✅ Redirect correctly instead of using window.location.href
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

        <div className="space-y-4">
          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            onClick={handleSignup}
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Sign Up
          </button>

          {/* Link to Login */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <a href="/Login" className="text-indigo-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
