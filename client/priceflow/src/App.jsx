// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./admin/components/Sidebar";
import Dashboard from "./admin/pages/Dashboard";
import Pricing from "./admin/pages/Pricing";
import Compliance from "./admin/pages/Compliance";
import Analytics from "./admin/pages/Analytics";
import Reports from "./admin/pages/Reports";
import LandingPage from "./landingpage/LandingPage";
import AdminSignin from "./landingpage/signin/AdminSignin";
import ClientSignin from "./landingpage/signin/ClientSignin";
import AdminSignup from "./landingpage/signup/AdminSignup";
import ClientSignup from "./landingpage/signup/ClientSignup";
import ClientDashboard from "./clientportal/pages/ClientDashboard";
import Navbar from "./landingpage/Navbar";  // Import Navbar here

function App() {
  return (
    <Router>
      <Navbar /> {/* Include Navbar globally in your App if needed */}
      <Routes>
        {/* Landing page with client and admin options */}
        <Route path="/" element={<LandingPage />} />

        {/* Admin and Client Sign In Pages */}
        <Route path="/signin/admin" element={<AdminSignin />} />
        <Route path="/signin/client" element={<ClientSignin />} />

        {/* Admin and Client Sign Up Pages */}
        <Route path="/signup/admin" element={<AdminSignup />} />
        <Route path="/signup/client" element={<ClientSignup />} />

        {/* Admin portal routes */}
        <Route
          path="/admin/dashboard"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1 bg-gray-100 p-6">
                <Dashboard />
              </div>
            </div>
          }
        />
        <Route path="/admin/pricing" element={<Pricing />} />
        <Route path="/admin/compliance" element={<Compliance />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/reports" element={<Reports />} />

        {/* Client portal routes */}
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        {/* Add more client routes here */}
      </Routes>
    </Router>
  );
}

export default App;
