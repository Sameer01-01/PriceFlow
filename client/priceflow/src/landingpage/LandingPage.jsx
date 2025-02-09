// src/landingpage/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaUserAlt } from "react-icons/fa"; 

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
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">

      {/* Welcome Text */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Our Pharmaceutical Revenue Management Software</h1>
      <p className="text-lg text-gray-600 text-center">
      Manage financial tracking and revenue optimization for your pharmacy or healthcare organization with ease.
      </p>
      <p className="text-lg text-gray-600 mb-8 text-center">
      Choose your portal below to access your role-specific tools.
      </p>

      {/* Option Boxes for Admin & Client */}
      <div className="flex space-x-6">
        {/* Admin Box */}
        <div
          className="flex flex-col justify-center items-center p-6 bg-blue-500 text-white cursor-pointer rounded-lg shadow-xl w-60"
          onClick={() => handleLogin("admin")}
        >
          <FaUserShield className="text-4xl mb-4" />
          <h2 className="text-xl font-semibold">Admin Portal</h2>
          <p className="text-left mt-2">
          Manage pricing, track revenue, and optimize financial strategies within your organization.
          Perfect for finance teams, analysts, and managers.
          </p>
        </div>

        {/* Client Box */}
        <div
          className="flex flex-col justify-center items-center p-6 bg-green-500 text-white cursor-pointer rounded-lg shadow-xl w-60"
          onClick={() => handleLogin("client")}
        >
          <FaUserAlt className="text-4xl mb-4" />
          <h2 className="text-xl font-semibold">Client Portal</h2>
          <p className="text-left mt-2">
          View invoices, track orders, and access your financial reports.
          Ideal for pharmacies, hospitals, and distributors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
