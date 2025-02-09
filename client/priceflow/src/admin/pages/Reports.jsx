import React, { useState } from 'react';
import { 
  FiDownload,
  FiDollarSign,
  FiTrendingUp,
  FiActivity 
} from 'react-icons/fi';
import { RiMedicineBottleLine } from 'react-icons/ri';

const Reports = () => {
  const [dateRange, setDateRange] = useState('monthly');
  const [activeTab, setActiveTab] = useState('revenue');

  const revenueData = [
    { name: 'Jan', revenue: 45000 },
    { name: 'Feb', revenue: 52000 },
    { name: 'Mar', revenue: 48000 },
    { name: 'Apr', revenue: 61000 },
    { name: 'May', revenue: 55000 },
    { name: 'Jun', revenue: 67000 },
  ];

  const KPICard = ({ title, value, icon, trend, color }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-2">{value}</h3>
            <p className={`text-sm mt-2 ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </p>
          </div>
          <div className={`p-4 rounded-full ${color}`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );

  const SimpleBarChart = ({ data }) => (
    <div className="relative h-64 w-full flex items-end justify-between gap-2 p-4">
      {data.map((item, index) => {
        const height = (item.revenue / Math.max(...data.map(d => d.revenue))) * 100;
        return (
          <div key={index} className="relative flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-blue-500 rounded-t"
              style={{ height: `${height}%` }}
            />
            <span className="text-sm mt-2">{item.name}</span>
            <span className="text-xs text-gray-500">${item.revenue}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-blue-800">Reports</h1>
          <p className="text-gray-600 mt-1">Comprehensive analysis of pharmaceutical revenue</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
            <FiDownload size={20} />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Revenue"
          value="$328,500"
          icon={<FiDollarSign size={24} className="text-green-500" />}
          trend={12.5}
          color="bg-green-50"
        />
        <KPICard
          title="Products Sold"
          value="15,234"
          icon={<RiMedicineBottleLine size={24} className="text-blue-500" />}
          trend={8.2}
          color="bg-blue-50"
        />
        <KPICard
          title="Average Order Value"
          value="$456"
          icon={<FiTrendingUp size={24} className="text-purple-500" />}
          trend={-2.4}
          color="bg-purple-50"
        />
        <KPICard
          title="Active Customers"
          value="1,890"
          icon={<FiActivity size={24} className="text-orange-500" />}
          trend={5.7}
          color="bg-orange-50"
        />
      </div>

      <div className="w-full">
        <div className="flex space-x-4 border-b">
          {['revenue', 'products', 'customers'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 -mb-px text-sm font-medium ${
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Analysis
            </button>
          ))}
        </div>

        <div className="mt-4">
          {activeTab === 'revenue' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Revenue Trend</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setDateRange('monthly')}
                    className={`px-3 py-1 rounded ${
                      dateRange === 'monthly' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setDateRange('quarterly')}
                    className={`px-3 py-1 rounded ${
                      dateRange === 'quarterly' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    Quarterly
                  </button>
                </div>
              </div>
              <SimpleBarChart data={revenueData} />
            </div>
          )}

          {activeTab === 'products' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Top Performing Products</h3>
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <RiMedicineBottleLine size={24} className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Product {item}</h4>
                        <p className="text-sm text-gray-500">SKU: PRD-00{item}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${(Math.random() * 10000).toFixed(2)}</p>
                      <p className="text-sm text-green-500">+{(Math.random() * 20).toFixed(1)}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Customer Segments</h2>
                <div className="space-y-4">
                  {['Retail Pharmacies', 'Hospitals', 'Clinics', 'Wholesalers'].map((segment) => (
                    <div key={segment} className="flex justify-between items-center">
                      <span>{segment}</span>
                      <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500" 
                          style={{width: `${Math.random() * 100}%`}}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((order) => (
                    <div key={order} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Order #{Math.random().toString(36).substr(2, 6)}</p>
                        <p className="text-sm text-gray-500">Customer ID: {Math.random().toString(36).substr(2, 8)}</p>
                      </div>
                      <span className="font-semibold">${(Math.random() * 1000).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;