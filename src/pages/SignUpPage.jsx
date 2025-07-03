import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate registration
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-300">
      <div className="bg-teal-100 p-10 rounded-md w-full max-w-md shadow-md">
        <h2 className="text-2xl font-semibold italic text-center mb-2">
          Helpdesk System
        </h2>
        <p className="text-center mb-4">Sign up here</p>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border p-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <span className="text-red-600">Forgot password</span>
          <Link to="/" className="text-black">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
