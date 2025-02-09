import React, { useState } from 'react';
import {
  FaFileAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaHistory,
  FaDownload,
  FaSearch,
  FaFilter
} from 'react-icons/fa';
import { 
  MdSecurity, 
  MdAssignment,
  MdWarning,
  MdUpdate 
} from 'react-icons/md';

const ComplianceCard = ({ title, status, dueDate, riskLevel, documents }) => {
  const statusColors = {
    compliant: 'text-emerald-600 bg-emerald-50',
    pending: 'text-amber-600 bg-amber-50',
    nonCompliant: 'text-rose-600 bg-rose-50'
  };

  const riskColors = {
    low: 'text-emerald-600',
    medium: 'text-amber-600',
    high: 'text-rose-600'
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center gap-4 mt-2">
            <span className={`px-3 py-1 rounded-full text-sm ${statusColors[status]}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            <span className="text-sm text-gray-600">Due: {dueDate}</span>
          </div>
        </div>
        <span className={`flex items-center gap-1 text-sm ${riskColors[riskLevel]}`}>
          <FaExclamationTriangle />
          {riskLevel.toUpperCase()} RISK
        </span>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaFileAlt />
          <span>{documents} documents required</span>
        </div>
      </div>
    </div>
  );
};

const DocumentCard = ({ title, type, lastUpdated, status }) => {
  const statusIcons = {
    approved: <FaCheckCircle className="text-emerald-600" />,
    pending: <FaExclamationTriangle className="text-amber-600" />,
    rejected: <FaTimesCircle className="text-rose-600" />
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white rounded-lg shadow-sm">
          <FaFileAlt className="text-indigo-600" />
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">
            {type} • Last updated: {lastUpdated}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {statusIcons[status]}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <FaDownload className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

const AuditLogItem = ({ action, user, timestamp, details }) => (
  <div className="flex items-start gap-4 p-4 border-b last:border-b-0">
    <div className="p-2 bg-indigo-50 rounded-lg">
      <FaHistory className="text-indigo-600" />
    </div>
    <div>
      <h4 className="font-medium text-gray-800">{action}</h4>
      <p className="text-sm text-gray-600 mt-1">{details}</p>
      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
        <span>{user}</span>
        <span>•</span>
        <span>{timestamp}</span>
      </div>
    </div>
  </div>
);

const Compliance = () => {
  const [activeTab, setActiveTab] = useState('requirements');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Compliance Management</h1>
            <p className="text-gray-600 mt-1">Monitor and manage regulatory compliance</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <MdWarning className="text-amber-600" />
              <span className="text-sm">View Alerts</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <MdUpdate />
              <span className="text-sm">Update Status</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <FaCheckCircle className="text-emerald-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Compliant Items</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">24/30</h3>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-100 rounded-lg">
                <MdWarning className="text-amber-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Reviews</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">4</h3>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-rose-100 rounded-lg">
                <FaExclamationTriangle className="text-rose-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Non-Compliant</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">2</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Left Section - Requirements and Documents */}
          <div className="flex-1 space-y-6">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md">
              <div className="flex border-b">
                {['requirements', 'documents', 'audit'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-6 py-4 text-sm font-medium ${
                      activeTab === tab
                        ? 'border-b-2 border-indigo-600 text-indigo-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Search and Filter */}
              <div className="p-4 border-b">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                    <FaFilter className="text-gray-600" />
                    <span className="text-sm">Filter</span>
                  </button>
                </div>
              </div>

              {/* Content based on active tab */}
              <div className="p-4">
                {activeTab === 'requirements' && (
                  <div className="space-y-4">
                    <ComplianceCard
                      title="FDA Annual Registration"
                      status="compliant"
                      dueDate="Dec 31, 2024"
                      riskLevel="low"
                      documents={5}
                    />
                    <ComplianceCard
                      title="GMP Certification"
                      status="pending"
                      dueDate="Mar 15, 2024"
                      riskLevel="medium"
                      documents={8}
                    />
                    <ComplianceCard
                      title="Product Safety Review"
                      status="nonCompliant"
                      dueDate="Overdue"
                      riskLevel="high"
                      documents={3}
                    />
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div className="space-y-4">
                    <DocumentCard
                      title="Safety Data Sheet - Product A"
                      type="PDF Document"
                      lastUpdated="2 days ago"
                      status="approved"
                    />
                    <DocumentCard
                      title="Quality Control Report Q4"
                      type="Excel Spreadsheet"
                      lastUpdated="1 week ago"
                      status="pending"
                    />
                    <DocumentCard
                      title="Regulatory Submission Draft"
                      type="Word Document"
                      lastUpdated="3 days ago"
                      status="rejected"
                    />
                  </div>
                )}

                {activeTab === 'audit' && (
                  <div className="space-y-4">
                    <AuditLogItem
                      action="Document Updated"
                      user="John Doe"
                      timestamp="2 hours ago"
                      details="Updated safety compliance documentation for Product A"
                    />
                    <AuditLogItem
                      action="Status Change"
                      user="Jane Smith"
                      timestamp="5 hours ago"
                      details="Changed GMP certification status to 'In Review'"
                    />
                    <AuditLogItem
                      action="New Requirement Added"
                      user="Admin"
                      timestamp="1 day ago"
                      details="Added new regulatory requirement for Q2 2024"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;