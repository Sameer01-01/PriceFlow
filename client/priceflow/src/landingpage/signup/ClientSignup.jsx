// src/landingpage/signup/ClientSignup.js

import React from "react";
import { useNavigate } from "react-router-dom";

function ClientSignup() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // For now, just navigate to Client Dashboard page
    navigate("/client/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-1/3 p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl mb-4">Client Sign Up</h2>
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
            className="w-full p-2 bg-green-500 text-white rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClientSignup;
