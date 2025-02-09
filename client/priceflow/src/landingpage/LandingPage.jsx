import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // Redirect to Sign In page for selected role
    if (role === "admin") {
      navigate("/signin/admin");
    } else {
      navigate("/signin/client");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex space-x-4">
        {/* Admin Box */}
        <div
          className="p-6 bg-blue-500 text-white cursor-pointer rounded-lg shadow-lg"
          onClick={() => handleLogin("admin")}
        >
          <h2 className="text-xl font-semibold">Admin</h2>
        </div>

        {/* Client Box */}
        <div
          className="p-6 bg-green-500 text-white cursor-pointer rounded-lg shadow-lg"
          onClick={() => handleLogin("client")}
        >
          <h2 className="text-xl font-semibold">Client</h2>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
