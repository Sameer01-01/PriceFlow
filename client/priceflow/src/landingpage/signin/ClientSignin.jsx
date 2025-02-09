import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ClientSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    console.log("Client Login Submitted:", { email, password });

    // For now, we'll just navigate to the client dashboard
    // In a real app, you'd validate the credentials here
    if (email && password) {
      navigate("/client/dashboard");
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-1/3 p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/signup/client" className="text-green-500 hover:underline">
              Do a signup instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientSignin;
