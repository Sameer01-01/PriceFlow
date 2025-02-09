import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag, FaRegFileAlt, FaRegListAlt, FaClipboardCheck } from "react-icons/fa";

const CliSidebar = () => {
  return (
    <div className="w-64 bg-cyan-500 text-white min-h-screen">
      <div className="p-6 text-xl font-bold">PriceFlow</div>
      <ul className="space-y-4">
        <li>
          <Link to="/client/dashboard" className="flex items-center space-x-2 p-4 hover:bg-cyan-700">
            <FaHome className="text-xl" />
            <span>ClientDashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/client/products" className="flex items-center space-x-2 p-4 hover:bg-cyan-700">
            <FaShoppingBag className="text-xl" />
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link to="/client/invoices" className="flex items-center space-x-2 p-4 hover:bg-cyan-700">
            <FaClipboardCheck className="text-xl" />
            <span>Invoices</span>
          </Link>
        </li>
        <li>
          <Link to="/client/orders" className="flex items-center space-x-2 p-4 hover:bg-cyan-700">
            <FaRegListAlt className="text-xl" />
            <span>Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/client/compliance" className="flex items-center space-x-2 p-4 hover:bg-cyan-700">
            <FaRegFileAlt className="text-xl" />
            <span>Compliance</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CliSidebar;
