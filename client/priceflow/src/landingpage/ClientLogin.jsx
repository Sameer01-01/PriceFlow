// src/pages/ClientLogin.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ClientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication (mocking it here)
    if (email === "client@example.com" && password === "client123") {
      // Redirect to Client Portal after successful login
      navigate("/client/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-1/3 p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl mb-4">Client Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClientLogin;
