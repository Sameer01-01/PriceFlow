import React, { useState } from 'react';
import { 
  FaBrain, 
  FaChartPie, 
  FaGlobe,
  FaChartArea,
  FaPercent,
  FaExclamationTriangle,
  FaBoxes
} from 'react-icons/fa';
import { 
  MdTrendingUp, 
  MdInsights,
  MdCompare
} from 'react-icons/md';

const PredictiveCard = ({ title, prediction, confidence, trend, icon: Icon }) => (
  <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center gap-2">
          <Icon className="text-indigo-600 text-xl" />
          <h3 className="text-gray-700 font-medium">{title}</h3>
        </div>
        <p className="text-2xl font-bold mt-3 text-gray-800">{prediction}</p>
        <div className="flex items-center mt-2 gap-2">
          <span className="text-sm text-gray-500">Confidence:</span>
          <div className="w-24 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-indigo-600 rounded-full"
              style={{ width: `${confidence}%` }}
            />
          </div>
          <span className="text-sm text-indigo-600">{confidence}%</span>
        </div>
      </div>
      <span className={`text-sm ${trend >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
        {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
      </span>
    </div>
  </div>
);

const InsightCard = ({ title, insights }) => (
  <div className="bg-white rounded-xl p-6 shadow-md">
    <div className="flex items-center gap-2 mb-4">
      <MdInsights className="text-indigo-600 text-xl" />
      <h3 className="text-gray-700 font-medium">{title}</h3>
    </div>
    <div className="space-y-3">
      {insights.map((insight, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2" />
          <p className="text-sm text-gray-600 flex-1">{insight}</p>
        </div>
      ))}
    </div>
  </div>
);

const MarketAnalysis = ({ data }) => (
  <div className="bg-white rounded-xl p-6 shadow-md">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <FaGlobe className="text-indigo-600 text-xl" />
        <h3 className="text-gray-700 font-medium">Market Analysis</h3>
      </div>
      <select className="px-3 py-1 border rounded-lg text-sm text-gray-600">
        <option>Last 30 days</option>
        <option>Last 90 days</option>
        <option>Last year</option>
      </select>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {data.map((item, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">{item.category}</p>
          <p className="text-lg font-semibold mt-1">{item.value}</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-1.5 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${item.share}%` }}
              />
            </div>
            <span className="text-sm text-gray-600">{item.share}%</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RiskIndicator = ({ level, description }) => {
  const colors = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500'
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
      <div className={`w-3 h-3 rounded-full ${colors[level]}`} />
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const Analytics = () => {
  const [activeView, setActiveView] = useState('predictive');

  const marketData = [
    { category: 'Generic Drugs', value: '$2.4M', share: 45 },
    { category: 'Branded Drugs', value: '$3.1M', share: 55 },
    { category: 'OTC Products', value: '$1.2M', share: 25 },
    { category: 'Specialty Drugs', value: '$4.5M', share: 75 }
  ];

  const aiInsights = [
    "Seasonal demand for antihistamines expected to increase by 45% in the next quarter",
    "Price sensitivity analysis suggests optimal pricing at $42.99 for new generic launch",
    "Competitor product launches may impact market share by 12% in Q3",
    "Customer segmentation shows growing demand in rural markets"
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Advanced Analytics</h1>
            <p className="text-gray-600 mt-1">AI-Powered Insights & Predictive Analysis</p>
          </div>
          <div className="flex gap-2">
            {['predictive', 'market', 'risk'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeView === view 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Predictive Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PredictiveCard
            title="Demand Forecast"
            prediction="15.2K units"
            confidence={92}
            trend={8.5}
            icon={FaBrain}
          />
          <PredictiveCard
            title="Price Optimization"
            prediction="$42.99"
            confidence={88}
            trend={-2.3}
            icon={FaPercent}
          />
          <PredictiveCard
            title="Stock Prediction"
            prediction="4.8K units"
            confidence={85}
            trend={5.2}
            icon={FaBoxes}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Market Analysis */}
          <div className="lg:col-span-2">
            <MarketAnalysis data={marketData} />
          </div>

          {/* AI Insights */}
          <div>
            <InsightCard 
              title="AI-Powered Insights" 
              insights={aiInsights}
            />
          </div>
        </div>

        {/* Risk Analysis */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <FaExclamationTriangle className="text-indigo-600 text-xl" />
            <h3 className="text-gray-700 font-medium">Risk Analysis</h3>
          </div>
          <div className="space-y-3">
            <RiskIndicator 
              level="high" 
              description="Supply chain disruption risk due to raw material shortage"
            />
            <RiskIndicator 
              level="medium" 
              description="Pricing pressure from new market entrants"
            />
            <RiskIndicator 
              level="low" 
              description="Regulatory compliance risk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 