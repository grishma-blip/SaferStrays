import React, { useState } from 'react';
import { BarChart3, TrendingUp, MapPin, Heart, Users, AlertTriangle, Clock, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedCity, setSelectedCity] = useState('all');

  const stats = [
    { 
      label: 'Total Reports', 
      value: '2,847', 
      change: '+18%', 
      icon: Heart, 
      color: 'orange',
      description: 'Animals reported this month'
    },
    { 
      label: 'Successfully Rescued', 
      value: '2,156', 
      change: '+15%', 
      icon: CheckCircle, 
      color: 'green',
      description: '76% success rate'
    },
    { 
      label: 'Active Rescues', 
      value: '47', 
      change: '+8%', 
      icon: Clock, 
      color: 'blue',
      description: 'Currently in progress'
    },
    { 
      label: 'Partner Organizations', 
      value: '156', 
      change: '+12%', 
      icon: Users, 
      color: 'purple',
      description: 'Across 12 cities'
    }
  ];

  const recentReports = [
    { 
      id: 'SR001', 
      animal: 'Injured Street Dog', 
      location: 'Linking Road, Bandra West, Mumbai', 
      status: 'Rescued', 
      urgency: 'high',
      time: '2 hours ago',
      rescuer: 'Mumbai Animal Rescue'
    },
    { 
      id: 'SR002', 
      animal: 'Sick Cat with Kittens', 
      location: 'Koramangala 5th Block, Bangalore', 
      status: 'In Progress', 
      urgency: 'medium',
      time: '4 hours ago',
      rescuer: 'Bangalore Stray Care'
    },
    { 
      id: 'SR003', 
      animal: 'Trapped Cow', 
      location: 'Sector 18, Gurgaon', 
      status: 'Team Dispatched', 
      urgency: 'high',
      time: '6 hours ago',
      rescuer: 'Delhi Animal Hospital'
    },
    { 
      id: 'SR004', 
      animal: 'Malnourished Dog', 
      location: 'FC Road, Pune', 
      status: 'Rescued', 
      urgency: 'medium',
      time: '8 hours ago',
      rescuer: 'Pune Pet Rescue'
    },
    { 
      id: 'SR005', 
      animal: 'Injured Bird', 
      location: 'Jubilee Hills, Hyderabad', 
      status: 'Under Treatment', 
      urgency: 'low',
      time: '12 hours ago',
      rescuer: 'Hyderabad Animal Welfare'
    }
  ];

  const cityData = [
    { city: 'Mumbai', reports: 687, rescued: 523, responseTime: '28 min', organizations: 34 },
    { city: 'Bangalore', reports: 542, rescued: 398, responseTime: '35 min', organizations: 28 },
    { city: 'Delhi', reports: 489, rescued: 356, responseTime: '32 min', organizations: 31 },
    { city: 'Pune', reports: 398, rescued: 289, responseTime: '41 min', organizations: 22 },
    { city: 'Hyderabad', reports: 334, rescued: 245, responseTime: '38 min', organizations: 19 },
    { city: 'Chennai', reports: 287, rescued: 201, responseTime: '44 min', organizations: 16 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Rescued': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Team Dispatched': return 'bg-yellow-100 text-yellow-800';
      case 'Under Treatment': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Impact Dashboard</h1>
          <p className="text-lg text-gray-600">Real-time insights into our animal rescue operations across India</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="all">All Cities</option>
                  {cityData.map(city => (
                    <option key={city.city} value={city.city}>{city.city}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-${stat.color}-100 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Reports */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Reports</h2>
              <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                View All Reports
              </button>
            </div>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-gray-900">{report.animal}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(report.urgency)}`}>
                          {report.urgency} priority
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{report.location}</p>
                      <p className="text-xs text-gray-500">Handled by: {report.rescuer}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{report.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Stats</h2>
            <div className="space-y-6">
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">76%</div>
                <div className="text-sm text-green-700">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">32 min</div>
                <div className="text-sm text-blue-700">Avg Response Time</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">12</div>
                <div className="text-sm text-purple-700">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>

        {/* City Performance */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">City-wise Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">City</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Reports</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Rescued</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Success Rate</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Avg Response</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Organizations</th>
                </tr>
              </thead>
              <tbody>
                {cityData.map((city, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-900">{city.city}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{city.reports}</td>
                    <td className="py-4 px-4 text-gray-700">{city.rescued}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${(city.rescued / city.reports) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">
                          {Math.round((city.rescued / city.reports) * 100)}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{city.responseTime}</td>
                    <td className="py-4 px-4 text-gray-700">{city.organizations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;