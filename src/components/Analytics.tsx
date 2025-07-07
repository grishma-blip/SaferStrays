import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Award, Calendar, Filter, Download, Star, Target, Zap } from 'lucide-react';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('points');

  const classStats = [
    { label: 'Total Points Awarded', value: '12,847', change: '+18%', icon: Star, color: 'blue' },
    { label: 'Active Students', value: '24', change: '+2%', icon: Users, color: 'green' },
    { label: 'Badges Earned', value: '156', change: '+25%', icon: Award, color: 'purple' },
    { label: 'Positive Behaviors', value: '96%', change: '+3%', icon: TrendingUp, color: 'orange' }
  ];

  const behaviorTrends = [
    { behavior: 'Homework Complete', thisWeek: 89, lastWeek: 82, trend: 'up' },
    { behavior: 'Participation', thisWeek: 94, lastWeek: 91, trend: 'up' },
    { behavior: 'Helping Others', thisWeek: 76, lastWeek: 71, trend: 'up' },
    { behavior: 'Punctuality', thisWeek: 88, lastWeek: 92, trend: 'down' },
    { behavior: 'Creative Thinking', thisWeek: 82, lastWeek: 79, trend: 'up' }
  ];

  const topPerformers = [
    { name: 'Sophia Chen', points: 267, badges: 8, improvement: '+15%', avatar: '👧' },
    { name: 'Emma Thompson', points: 245, badges: 7, improvement: '+12%', avatar: '👧' },
    { name: 'Ava Williams', points: 223, badges: 6, improvement: '+18%', avatar: '👧' },
    { name: 'Liam Rodriguez', points: 198, badges: 5, improvement: '+22%', avatar: '👦' },
    { name: 'Ethan Davis', points: 189, badges: 5, improvement: '+8%', avatar: '👦' }
  ];

  const weeklyData = [
    { week: 'Week 1', points: 1850, behaviors: 145, badges: 12 },
    { week: 'Week 2', points: 2100, behaviors: 162, badges: 15 },
    { week: 'Week 3', points: 1950, behaviors: 158, badges: 11 },
    { week: 'Week 4', points: 2300, behaviors: 178, badges: 18 }
  ];

  const behaviorBreakdown = [
    { category: 'Academic Excellence', percentage: 35, color: 'bg-blue-500' },
    { category: 'Social Skills', percentage: 28, color: 'bg-green-500' },
    { category: 'Leadership', percentage: 18, color: 'bg-purple-500' },
    { category: 'Creativity', percentage: 12, color: 'bg-pink-500' },
    { category: 'Improvement', percentage: 7, color: 'bg-yellow-500' }
  ];

  const insights = [
    {
      title: 'Homework Completion Trending Up',
      description: 'Students are showing 18% improvement in homework completion over the past month.',
      type: 'positive',
      action: 'Continue current homework strategies'
    },
    {
      title: 'Punctuality Needs Attention',
      description: 'Late arrivals increased by 4% this week. Consider morning motivation strategies.',
      type: 'attention',
      action: 'Implement morning arrival rewards'
    },
    {
      title: 'Peer Collaboration Excelling',
      description: 'Students helping classmates increased by 25% - great classroom culture!',
      type: 'positive',
      action: 'Expand peer mentoring programs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Classroom Analytics</h1>
              <p className="text-lg text-gray-600">Data-driven insights to enhance student engagement and behavior</p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {classStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-100 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Weekly Trends Chart */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Weekly Trends</h2>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="points">Points Awarded</option>
                <option value="behaviors">Positive Behaviors</option>
                <option value="badges">Badges Earned</option>
              </select>
            </div>
            
            <div className="space-y-4">
              {weeklyData.map((week, index) => {
                const value = selectedMetric === 'points' ? week.points : 
                             selectedMetric === 'behaviors' ? week.behaviors : week.badges;
                const maxValue = Math.max(...weeklyData.map(w => 
                  selectedMetric === 'points' ? w.points : 
                  selectedMetric === 'behaviors' ? w.behaviors : w.badges
                ));
                const percentage = (value / maxValue) * 100;
                
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-700">{week.week}</span>
                      <span className="text-sm font-medium text-purple-600">{value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-purple-600" />
              Top Performers
            </h2>
            <div className="space-y-4">
              {topPerformers.map((student, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
                  <div className="text-2xl">{student.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{student.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{student.points} pts</span>
                      <span>{student.badges} badges</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-green-600">{student.improvement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Behavior Trends */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Behavior Trends</h2>
            <div className="space-y-4">
              {behaviorTrends.map((behavior, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{behavior.behavior}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">{behavior.thisWeek}%</span>
                      <div className={`flex items-center gap-1 ${
                        behavior.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <TrendingUp className={`w-4 h-4 ${behavior.trend === 'down' ? 'rotate-180' : ''}`} />
                        <span className="text-xs font-medium">
                          {Math.abs(behavior.thisWeek - behavior.lastWeek)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        behavior.trend === 'up' ? 'bg-gradient-to-r from-green-500 to-blue-500' : 'bg-gradient-to-r from-orange-500 to-red-500'
                      }`}
                      style={{ width: `${behavior.thisWeek}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Behavior Breakdown */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Behavior Categories</h2>
            <div className="space-y-4">
              {behaviorBreakdown.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{category.category}</span>
                    <span className="text-sm font-medium text-gray-600">{category.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${category.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights & Recommendations */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-600" />
            AI-Powered Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className={`p-6 rounded-2xl border-2 ${
                insight.type === 'positive' 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-yellow-50 border-yellow-200'
              }`}>
                <h3 className={`font-semibold mb-3 ${
                  insight.type === 'positive' ? 'text-green-900' : 'text-yellow-900'
                }`}>
                  {insight.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  insight.type === 'positive' ? 'text-green-700' : 'text-yellow-700'
                }`}>
                  {insight.description}
                </p>
                <div className={`text-xs font-medium px-3 py-2 rounded-full inline-block ${
                  insight.type === 'positive' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  💡 {insight.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;