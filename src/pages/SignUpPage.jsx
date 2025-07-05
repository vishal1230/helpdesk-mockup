// src/pages/SignUpPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
    adminKey: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    if (formData.role === "admin" && formData.adminKey !== "ADMIN123") {
      alert("Invalid admin key.");
      return;
    }

    const newUser = {
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    try {
      // Save to JSON Server
      await axios.post("http://localhost:5000/users", newUser);

      // Save auth info to localStorage
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("isAuthenticated", "true");

      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Error registering user.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-300">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-center text-4xl font-bold italic mb-8 text-gray-800">
          Helpdesk System - Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {formData.role === "admin" && (
            <input
              type="text"
              name="adminKey"
              placeholder="Enter Admin Key"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={formData.adminKey}
              onChange={handleChange}
            />
          )}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          <Link to="/" className="text-blue-600 hover:underline">
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
