import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
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
import Navbar from "./landingpage/Navbar";
import CliCompliance from "./clientportal/pages/CliCompliance";
import Invoices from "./clientportal/pages/Invoices";
import InvoiceForm from "./clientportal/pages/InvoiceForm";
import Orders from "./clientportal/pages/Orders";
import Products from "./clientportal/pages/Products";
import CliSidebar from "./clientportal/components/CliSidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin/admin" element={<AdminSignin />} />
        <Route path="/signin/client" element={<ClientSignin />} />
        <Route path="/signup/admin" element={<AdminSignup />} />
        <Route path="/signup/client" element={<ClientSignup />} />

        {/* Admin Panel */}
        <Route path="/admin/*" element={<AdminLayout />} />

        {/* Client Panel */}
        <Route path="/client/*" element={<ClientLayout />} />
      </Routes>
    </Router>
  );
}

const AdminLayout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 bg-gray-100 p-6">
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports" element={<Reports />} />
      </Routes>
    </div>
  </div>
);

const ClientLayout = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="flex">
      <CliSidebar />
      <div className="flex-1 bg-gray-100 p-6">
        <Routes>
          <Route path="dashboard" element={<ClientDashboard />} />
          <Route path="compliance" element={<CliCompliance />} />
          <Route path="invoices" element={<Invoices setInvoiceData={setInvoiceData} navigate={navigate} />} />
          <Route path="invoice-form" element={<InvoiceForm invoiceData={invoiceData} />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
