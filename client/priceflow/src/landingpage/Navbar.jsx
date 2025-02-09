// src/components/Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaUserAlt } from "react-icons/fa"; // Admin and Client icons

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-blue-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-semibold">PharmaPriceFlow</h1>
        <div>
          <a href="#about" className="text-white hover:text-gray-200 mx-4">
            About
          </a>
          <a href="#contact" className="text-white hover:text-gray-200 mx-4">
            Contact
          </a>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg ml-4"
            onClick={() => navigate("/signin/admin")}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


