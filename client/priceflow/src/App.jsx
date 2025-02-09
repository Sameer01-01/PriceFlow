import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./admin/components/Sidebar";
import Dashboard from "./admin/pages/Dashboard";
import Pricing from "./admin/pages/Pricing";
import Compliance from "./admin/pages/Compliance";
import Analytics from "./admin/pages/Analytics";
import Reports from "./admin/pages/Reports";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
