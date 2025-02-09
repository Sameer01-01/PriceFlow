import React, { useState } from 'react';
import { FaSearch, FaEdit, FaChartLine, FaTag, FaHistory, FaPlus, FaFilter } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Pricing = () => {
  const [search, setSearch] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const medicines = [
    { name: 'Paracetamol', price: 50, category: 'Pain Relief', history: [45, 48, 50, 52] },
    { name: 'Amoxicillin', price: 120, category: 'Antibiotic', history: [110, 115, 120, 125] },
    { name: 'Cetirizine', price: 30, category: 'Allergy', history: [25, 28, 30, 32] },
    { name: 'Ibuprofen', price: 80, category: 'Pain Relief', history: [75, 78, 80, 85] },
    { name: 'Metformin', price: 90, category: 'Diabetes', history: [85, 88, 90, 95] },
    { name: 'Aspirin', price: 40, category: 'Cardiac', history: [35, 38, 40, 42] }
  ];

  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Pricing Management</h1>
      
      {/* Search & Filters */}
      <div className="flex items-center bg-white p-3 rounded-xl shadow-md mb-6">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search Medicine..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaFilter className="text-gray-500 ml-3 cursor-pointer" />
        <FaPlus className="text-green-600 ml-3 cursor-pointer" />
      </div>
      
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines
          .filter((med) => med.name.toLowerCase().includes(search.toLowerCase()))
          .map((med, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-lg cursor-pointer" onClick={() => handleMedicineClick(med)}>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">{med.name}</h2>
                <FaEdit className="text-blue-600 cursor-pointer" />
              </div>
              <p className="text-gray-500 mt-1">Category: {med.category}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-bold text-green-600">₹{med.price}</span>
                <FaTag className="text-gray-500" />
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center">
                <FaHistory className="mr-2" /> View Price History
              </button>
            </div>
          ))}
      </div>
      
      {/* Pricing Analytics */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg flex items-center">
        <FaChartLine className="text-blue-600 text-3xl mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Price Trends & Insights</h3>
          <p className="text-gray-500">Track and analyze price fluctuations over time.</p>
        </div>
      </div>
      
      {/* Price History Chart */}
      {selectedMedicine && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Price History for {selectedMedicine.name}</h3>
          <Line
            data={{
              labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
              datasets: [
                {
                  label: 'Price Trend',
                  data: selectedMedicine.history,
                  borderColor: 'rgb(75, 192, 192)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Pricing;
