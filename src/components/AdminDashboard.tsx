import React, { useState } from 'react';
import { 
  LogOut, Bell, Search, Filter, MapPin, Clock, CheckCircle, 
  AlertTriangle, Users, BarChart3, Settings, Phone, Mail,
  Eye, MessageSquare, Calendar, TrendingUp, Award, Heart
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedReport, setSelectedReport] = useState<number | null>(null);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'reports', label: 'Active Reports', icon: AlertTriangle },
    { id: 'team', label: 'Team Management', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const recentReports = [
    {
      id: 1,
      type: 'Injured Dog',
      location: 'Linking Road, Bandra West, Mumbai',
      priority: 'high',
      status: 'in-progress',
      reportedAt: '2 hours ago',
      assignedTo: 'Mumbai Animal Rescue Team',
      reporter: 'Priya Sharma',
      description: 'Dog hit by vehicle, bleeding from leg, unable to walk',
      estimatedResponse: '15 mins'
    },
    {
      id: 2,
      type: 'Sick Cat',
      location: 'Koramangala 5th Block, Bangalore',
      priority: 'medium',
      status: 'assigned',
      reportedAt: '4 hours ago',
      assignedTo: 'Bangalore Stray Care',
      reporter: 'Rajesh Kumar',
      description: 'Cat with kittens, appears malnourished and weak',
      estimatedResponse: '30 mins'
    },
    {
      id: 3,
      type: 'Trapped Cow',
      location: 'Sector 18, Gurgaon',
      priority: 'high',
      status: 'dispatched',
      reportedAt: '6 hours ago',
      assignedTo: 'Delhi Animal Hospital',
      reporter: 'Anonymous',
      description: 'Cow stuck in construction site, distressed',
      estimatedResponse: '45 mins'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Anjali Mehta',
      role: 'Lead Veterinarian',
      organization: 'Mumbai Animal Rescue',
      status: 'active',
      casesHandled: 156,
      rating: 4.9,
      phone: '+91 98765 43210'
    },
    {
      id: 2,
      name: 'Vikram Singh',
      role: 'Rescue Coordinator',
      organization: 'Delhi Animal Hospital',
      status: 'on-call',
      casesHandled: 89,
      rating: 4.7,
      phone: '+91 98765 43211'
    },
    {
      id: 3,
      name: 'Priya Nair',
      role: 'Field Volunteer',
      organization: 'Bangalore Stray Care',
      status: 'busy',
      casesHandled: 234,
      rating: 4.8,
      phone: '+91 98765 43212'
    }
  ];

  const stats = [
    { label: 'Active Reports', value: '47', change: '+8%', icon: AlertTriangle, color: 'orange' },
    { label: 'Resolved Today', value: '23', change: '+15%', icon: CheckCircle, color: 'green' },
    { label: 'Team Members', value: '156', change: '+3%', icon: Users, color: 'blue' },
    { label: 'Avg Response Time', value: '28m', change: '-12%', icon: Clock, color: 'purple' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'assigned': return 'bg-yellow-100 text-yellow-800';
      case 'dispatched': return 'bg-purple-100 text-purple-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reports</h3>
          <div className="space-y-4">
            {recentReports.slice(0, 3).map((report) => (
              <div key={report.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-gray-900">{report.type}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(report.priority)}`}>
                      {report.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{report.location}</p>
                  <p className="text-xs text-gray-500">{report.reportedAt}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Status</h3>
          <div className="space-y-4">
            {teamMembers.slice(0, 3).map((member) => (
              <div key={member.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    member.status === 'active' ? 'bg-green-100 text-green-800' :
                    member.status === 'on-call' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {member.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
            <option>All Priorities</option>
            <option>High Priority</option>
            <option>Medium Priority</option>
            <option>Low Priority</option>
          </select>
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
            <option>All Status</option>
            <option>In Progress</option>
            <option>Assigned</option>
            <option>Dispatched</option>
            <option>Resolved</option>
          </select>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Active Reports ({recentReports.length})</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentReports.map((report) => (
            <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{report.type}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(report.priority)}`}>
                      {report.priority} priority
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    {report.location}
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{report.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Reported by: {report.reporter}</span>
                    <span>•</span>
                    <span>{report.reportedAt}</span>
                    <span>•</span>
                    <span>ETA: {report.estimatedResponse}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <MessageSquare className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Assigned to:</strong> {report.assignedTo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-colors">
            Add Member
          </button>
        </div>
        
        <div className="grid gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.organization}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">{member.rating}/5.0</span>
                  </div>
                  <p className="text-sm text-gray-600">{member.casesHandled} cases handled</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                    member.status === 'active' ? 'bg-green-100 text-green-800' :
                    member.status === 'on-call' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {member.status}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  <Phone className="w-4 h-4" />
                  Call
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Mail className="w-4 h-4" />
                  Message
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'reports': return renderReports();
      case 'team': return renderTeam();
      case 'analytics': return <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"><p>Analytics coming soon...</p></div>;
      case 'settings': return <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"><p>Settings coming soon...</p></div>;
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SaferStrays Admin</h1>
                <p className="text-xs text-gray-600">Rescue Management Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  AM
                </div>
                <span className="text-sm font-medium text-gray-700">Admin User</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl m-2'
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;