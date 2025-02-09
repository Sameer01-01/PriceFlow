// src/landingpage/signup/AdminSignup.js

import React from "react";
import { useNavigate } from "react-router-dom";

function AdminSignup() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // For now, just navigate to Admin Dashboard page
    navigate("/admin/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-1/3 p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl mb-4">Admin Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminSignup;
