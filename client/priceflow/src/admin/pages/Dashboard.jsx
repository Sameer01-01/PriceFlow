import React, { useState } from 'react';
import {
  FaRobot,
  FaShieldAlt,
  FaExclamationCircle,
  FaCheckCircle,
  FaBell,
  FaCalendar,
  FaTasks
} from 'react-icons/fa';
import {
  MdAttachMoney,
  MdTrendingUp,
  MdNotifications,
  MdPriorityHigh
} from 'react-icons/md';

const QuickActionCard = ({ title, description, icon: Icon, variant }) => {
  const variants = {
    primary: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
    warning: 'bg-amber-50 text-amber-700 hover:bg-amber-100',
    success: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
    danger: 'bg-rose-50 text-rose-700 hover:bg-rose-100'
  };

  return (
    <button className={`p-4 rounded-xl w-full text-left transition-colors ${variants[variant]}`}>
      <div className="flex items-start gap-3">
        <Icon className="text-xl mt-1" />
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm opacity-80 mt-1">{description}</p>
        </div>
      </div>
    </button>
  );
};

const NotificationItem = ({ title, time, type, description }) => {
  const typeColors = {
    alert: 'text-rose-600 bg-rose-50',
    warning: 'text-amber-600 bg-amber-50',
    success: 'text-emerald-600 bg-emerald-50',
    info: 'text-blue-600 bg-blue-50'
  };


  
  return (
    <div className="p-4 border-b last:border-b-0">
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg ${typeColors[type]}`}>
          {type === 'alert' && <FaExclamationCircle />}
          {type === 'warning' && <MdPriorityHigh />}
          {type === 'success' && <FaCheckCircle />}
          {type === 'info' && <FaBell />}
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <span className="text-xs text-gray-500 mt-2 block">{time}</span>
        </div>
      </div>
    </div>
  );
};

const TaskItem = ({ title, dueDate, priority, status }) => {
  const priorityColors = {
    high: 'text-rose-600 bg-rose-50',
    medium: 'text-amber-600 bg-amber-50',
    low: 'text-emerald-600 bg-emerald-50'
  };

  const statusColors = {
    pending: 'text-amber-600 bg-amber-50',
    inProgress: 'text-blue-600 bg-blue-50',
    completed: 'text-emerald-600 bg-emerald-50'
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <span className={`px-2 py-1 rounded-full text-xs ${priorityColors[priority]}`}>
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </span>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaCalendar className="text-gray-400" />
          {dueDate}
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${statusColors[status]}`}>
          {status.replace(/([A-Z])/g, ' $1').trim()}
        </span>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [selectedView, setSelectedView] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, Admin</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <MdNotifications className="text-gray-600" />
            <span className="text-sm text-gray-600">Notifications</span>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickActionCard
            title="AI Assistant"
            description="Get instant insights and recommendations"
            icon={FaRobot}
            variant="primary"
          />
          <QuickActionCard
            title="Compliance Check"
            description="2 tasks require immediate attention"
            icon={FaShieldAlt}
            variant="warning"
          />
          <QuickActionCard
            title="Price Updates"
            description="Review and approve new pricing"
            icon={MdAttachMoney}
            variant="success"
          />
          <QuickActionCard
            title="Market Alerts"
            description="3 new competitor activities"
            icon={MdTrendingUp}
            variant="danger"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tasks and Calendar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tasks */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <FaTasks className="text-indigo-600" />
                  <h2 className="text-lg font-semibold text-gray-800">Priority Tasks</h2>
                </div>
                <div className="flex gap-2">
                  {['all', 'pending', 'inProgress'].map((view) => (
                    <button
                      key={view}
                      onClick={() => setSelectedView(view)}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        selectedView === view
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {view.replace(/([A-Z])/g, ' $1').trim().charAt(0).toUpperCase() + 
                       view.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <TaskItem
                  title="Review Q1 Pricing Strategy"
                  dueDate="Today"
                  priority="high"
                  status="pending"
                />
                <TaskItem
                  title="Compliance Documentation Update"
                  dueDate="Tomorrow"
                  priority="medium"
                  status="inProgress"
                />
                <TaskItem
                  title="Supplier Contract Review"
                  dueDate="Next Week"
                  priority="low"
                  status="pending"
                />
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-6">
                <FaCalendar className="text-indigo-600" />
                <h2 className="text-lg font-semibold text-gray-800">Upcoming Deadlines</h2>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-800">Regulatory Filing #{index}</h4>
                      <p className="text-sm text-gray-600 mt-1">Due in {index * 2} days</p>
                    </div>
                    <button className="px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notifications and Updates */}
          <div className="space-y-6">
            {/* Recent Notifications */}
            <div className="bg-white rounded-xl shadow-md">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MdNotifications className="text-indigo-600" />
                    <h2 className="text-lg font-semibold text-gray-800">Recent Updates</h2>
                  </div>
                  <button className="text-sm text-indigo-600 hover:text-indigo-700">
                    View All
                  </button>
                </div>
              </div>
              <div className="divide-y">
                <NotificationItem
                  type="alert"
                  title="Price Change Alert"
                  description="Competitor decreased prices by 15% in Category A"
                  time="2 hours ago"
                />
                <NotificationItem
                  type="warning"
                  title="Compliance Update"
                  description="New regulatory requirements effective next month"
                  time="5 hours ago"
                />
                <NotificationItem
                  type="success"
                  title="Goal Achieved"
                  description="Monthly revenue target exceeded by 12%"
                  time="1 day ago"
                />
                <NotificationItem
                  type="info"
                  title="System Update"
                  description="New features available in the pricing module"
                  time="2 days ago"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;