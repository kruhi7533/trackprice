import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || {};

    if (storedUser.username === username && storedUser.password === password) {
      localStorage.setItem('isAuthenticated', 'true');
      

      // Navigate to products page after successful login (you can change the path if needed)
      navigate('/ProductList');  // Example: Navigate to products page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 px-4">


      {/* Glassmorphism Card */}
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-xl p-8 w-full max-w-md border border-white/30">
        <h2 className="text-4xl font-extrabold text-white text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-gray-200 text-center mb-6">
          Login to access your account
        </p>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/80 text-gray-800 placeholder-gray-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-white text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/80 text-gray-800 placeholder-gray-500"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-200 mt-6">
          Don’t have an account?{' '}
          <a
            href="/signup"
            className="text-white font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
