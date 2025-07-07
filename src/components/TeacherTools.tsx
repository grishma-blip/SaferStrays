import React, { useState } from 'react';
import { Settings, Users, Award, BarChart3, Bell, Download, Upload, Palette, Target, Calendar, MessageSquare } from 'lucide-react';

const TeacherTools = () => {
  const [activeTab, setActiveTab] = useState('behaviors');

  const behaviorCategories = [
    { id: 'participation', name: 'Participation', icon: '🙋‍♀️', points: 5, color: 'blue', enabled: true },
    { id: 'homework', name: 'Homework Complete', icon: '📚', points: 10, color: 'green', enabled: true },
    { id: 'punctuality', name: 'On Time', icon: '⏰', points: 3, color: 'yellow', enabled: true },
    { id: 'helping', name: 'Helped Classmate', icon: '🤝', points: 8, color: 'purple', enabled: true },
    { id: 'creativity', name: 'Creative Thinking', icon: '🎨', points: 7, color: 'pink', enabled: true },
    { id: 'leadership', name: 'Leadership', icon: '👑', points: 10, color: 'orange', enabled: true },
    { id: 'kindness', name: 'Acts of Kindness', icon: '💝', points: 6, color: 'red', enabled: true },
    { id: 'improvement', name: 'Needs Encouragement', icon: '🌱', points: -2, color: 'gray', enabled: true }
  ];

  const classSettings = {
    className: "Mrs. Johnson's 2nd Grade",
    pointsSystem: 'standard',
    badgeThresholds: {
      bronze: 50,
      silver: 150,
      gold: 300
    },
    notifications: {
      parentUpdates: true,
      weeklyReports: true,
      milestoneAlerts: true
    },
    theme: 'colorful'
  };

  const tabs = [
    { id: 'behaviors', label: 'Behavior Categories', icon: Award },
    { id: 'badges', label: 'Badge System', icon: Target },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'reports', label: 'Reports & Export', icon: BarChart3 },
    { id: 'classroom', label: 'Classroom Settings', icon: Settings },
    { id: 'communication', label: 'Parent Communication', icon: MessageSquare }
  ];

  const renderBehaviorSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Behavior Categories</h3>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 transition-all">
          + Add Custom Behavior
        </button>
      </div>
      
      <div className="grid gap-4">
        {behaviorCategories.map((behavior) => (
          <div key={behavior.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-3xl">{behavior.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{behavior.name}</h4>
                  <p className="text-sm text-gray-600">
                    {behavior.points > 0 ? '+' : ''}{behavior.points} points
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">Points:</label>
                  <input
                    type="number"
                    defaultValue={behavior.points}
                    className="w-16 px-2 py-1 border border-gray-300 rounded-lg text-center"
                  />
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={behavior.enabled} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBadgeSystem = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Badge System Configuration</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Point Thresholds</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-bronze-600 font-medium">🥉 Bronze Badge</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  defaultValue={classSettings.badgeThresholds.bronze}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center"
                />
                <span className="text-sm text-gray-600">points</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 font-medium">🥈 Silver Badge</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  defaultValue={classSettings.badgeThresholds.silver}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center"
                />
                <span className="text-sm text-gray-600">points</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-yellow-600 font-medium">🥇 Gold Badge</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  defaultValue={classSettings.badgeThresholds.gold}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center"
                />
                <span className="text-sm text-gray-600">points</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Custom Badges</h4>
          <div className="space-y-3">
            {[
              { name: 'Super Helper', icon: '🤝', requirement: 'Help classmates 10 times' },
              { name: 'Reading Star', icon: '📚', requirement: 'Read 5 books this month' },
              { name: 'Team Player', icon: '⚽', requirement: 'Great teamwork in projects' }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <span className="text-2xl">{badge.icon}</span>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{badge.name}</p>
                  <p className="text-sm text-gray-600">{badge.requirement}</p>
                </div>
              </div>
            ))}
            <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-purple-300 hover:text-purple-600 transition-colors">
              + Create Custom Badge
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Notification Settings</h3>
      
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Parent Weekly Updates</h4>
              <p className="text-sm text-gray-600">Send weekly progress reports to parents</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked={classSettings.notifications.parentUpdates} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Milestone Alerts</h4>
              <p className="text-sm text-gray-600">Notify when students reach point milestones</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked={classSettings.notifications.milestoneAlerts} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Daily Behavior Summary</h4>
              <p className="text-sm text-gray-600">End-of-day summary for teacher review</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked={true} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Reports & Data Export</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Generate Reports</h4>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium text-blue-900">Weekly Class Report</p>
                  <p className="text-sm text-blue-700">Behavior trends and highlights</p>
                </div>
              </div>
            </button>
            
            <button className="w-full flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-green-600" />
                <div className="text-left">
                  <p className="font-medium text-green-900">Individual Student Reports</p>
                  <p className="text-sm text-green-700">Detailed progress for each student</p>
                </div>
              </div>
            </button>
            
            <button className="w-full flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-xl hover:bg-purple-100 transition-colors">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-purple-600" />
                <div className="text-left">
                  <p className="font-medium text-purple-900">Parent Communication Log</p>
                  <p className="text-sm text-purple-700">All parent interactions and updates</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Data Management</h4>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl hover:bg-orange-100 transition-colors">
              <Upload className="w-5 h-5 text-orange-600" />
              <span className="font-medium text-orange-900">Import Student Data</span>
            </button>
            
            <button className="w-full flex items-center justify-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
              <Download className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">Export All Data</span>
            </button>
            
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-sm text-yellow-800">
                <strong>Data Privacy:</strong> All student data is encrypted and COPPA-compliant. 
                Export options respect privacy settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderClassroomSettings = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Classroom Configuration</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Basic Settings</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Classroom Name</label>
              <input
                type="text"
                defaultValue={classSettings.className}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Points System</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option value="standard">Standard (1-10 points)</option>
                <option value="extended">Extended (1-20 points)</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Grade Level</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option value="k">Kindergarten</option>
                <option value="1">1st Grade</option>
                <option value="2" selected>2nd Grade</option>
                <option value="3">3rd Grade</option>
                <option value="4">4th Grade</option>
                <option value="5">5th Grade</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Visual Theme</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'Colorful', preview: 'bg-gradient-to-r from-purple-400 to-pink-400' },
                { name: 'Nature', preview: 'bg-gradient-to-r from-green-400 to-blue-400' },
                { name: 'Space', preview: 'bg-gradient-to-r from-indigo-400 to-purple-400' },
                { name: 'Ocean', preview: 'bg-gradient-to-r from-blue-400 to-teal-400' },
                { name: 'Sunset', preview: 'bg-gradient-to-r from-orange-400 to-red-400' },
                { name: 'Forest', preview: 'bg-gradient-to-r from-green-500 to-green-600' }
              ].map((theme) => (
                <button
                  key={theme.name}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    theme.name.toLowerCase() === classSettings.theme 
                      ? 'border-purple-500 ring-2 ring-purple-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-full h-8 rounded-lg ${theme.preview} mb-2`}></div>
                  <p className="text-sm font-medium text-gray-700">{theme.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCommunication = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Parent Communication</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Message Templates</h4>
          <div className="space-y-3">
            {[
              { title: 'Weekly Progress Update', type: 'weekly' },
              { title: 'Milestone Achievement', type: 'achievement' },
              { title: 'Behavior Concern', type: 'concern' },
              { title: 'Positive Recognition', type: 'positive' }
            ].map((template, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="font-medium text-gray-900">{template.title}</span>
                <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Communication Log</h4>
          <div className="space-y-3">
            {[
              { parent: 'Sarah Thompson (Emma)', date: '2024-01-15', type: 'Weekly Update Sent' },
              { parent: 'Mike Rodriguez (Liam)', date: '2024-01-14', type: 'Achievement Alert' },
              { parent: 'Lisa Chen (Sophia)', date: '2024-01-13', type: 'Positive Recognition' }
            ].map((log, index) => (
              <div key={index} className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                <p className="font-medium text-blue-900">{log.parent}</p>
                <p className="text-sm text-blue-700">{log.type}</p>
                <p className="text-xs text-blue-600">{log.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'behaviors': return renderBehaviorSettings();
      case 'badges': return renderBadgeSystem();
      case 'notifications': return renderNotifications();
      case 'reports': return renderReports();
      case 'classroom': return renderClassroomSettings();
      case 'communication': return renderCommunication();
      default: return renderBehaviorSettings();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Teacher Tools & Settings</h1>
          <p className="text-lg text-gray-600">Customize your classroom experience and manage behavior tracking</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 mb-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl m-2'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-purple-100">
          {renderTabContent()}
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherTools;