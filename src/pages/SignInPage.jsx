// src/pages/SignInPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Check credentials
      const response = await axios.get(
        `http://localhost:5000/users?email=${encodeURIComponent(
          formData.email
        )}&password=${encodeURIComponent(formData.password)}`
      );

      if (response.data.length > 0) {
        // User found
        const user = response.data[0];
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Error during sign-in:", err);
      setError("Error during sign-in. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-300">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-center text-4xl font-bold italic mb-8 text-gray-800">
          Helpdesk System - Sign In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <Link to="/signup" className="text-blue-600 hover:underline">
            Don't have an account? Sign Up
          </Link>
          <Link to="/forgot-password" className="text-red-600 hover:underline">
            Forgot password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
