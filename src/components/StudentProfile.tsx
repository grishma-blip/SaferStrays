import React, { useState } from 'react';
import { ArrowLeft, Star, Award, TrendingUp, Calendar, Gift, Trophy, Target, Zap } from 'lucide-react';

interface StudentProfileProps {
  studentId: number | null;
  onBack: () => void;
}

const StudentProfile: React.FC<StudentProfileProps> = ({ studentId, onBack }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // Mock student data - in real app, this would come from props or API
  const student = {
    id: 1,
    name: 'Emma Thompson',
    avatar: '👧',
    totalPoints: 245,
    weeklyPoints: 42,
    level: 'Gold Star',
    streak: 5,
    badges: [
      { name: 'Super Helper', icon: '🤝', earned: '2024-01-15', description: 'Helped classmates 10 times' },
      { name: 'Reading Star', icon: '📚', earned: '2024-01-10', description: 'Read 5 books this month' },
      { name: 'Team Player', icon: '⚽', earned: '2024-01-08', description: 'Great teamwork in group projects' },
      { name: 'Creative Mind', icon: '🎨', earned: '2024-01-05', description: 'Outstanding creative projects' },
      { name: 'Punctuality Pro', icon: '⏰', earned: '2024-01-03', description: 'On time for 2 weeks straight' }
    ],
    recentActivities: [
      { date: '2024-01-16', behavior: 'Helped classmate with math', points: 8, icon: '🤝' },
      { date: '2024-01-16', behavior: 'Completed homework early', points: 10, icon: '📚' },
      { date: '2024-01-15', behavior: 'Great participation in science', points: 5, icon: '🙋‍♀️' },
      { date: '2024-01-15', behavior: 'Showed kindness to new student', points: 6, icon: '💝' },
      { date: '2024-01-14', behavior: 'Led group discussion', points: 10, icon: '👑' },
      { date: '2024-01-14', behavior: 'On time to class', points: 3, icon: '⏰' },
      { date: '2024-01-13', behavior: 'Creative art project', points: 7, icon: '🎨' },
      { date: '2024-01-12', behavior: 'Helped clean classroom', points: 5, icon: '🧹' }
    ],
    goals: [
      { title: 'Reading Champion', progress: 80, target: 'Read 10 books this month', current: 8 },
      { title: 'Helper Hero', progress: 60, target: 'Help classmates 15 times', current: 9 },
      { title: 'Perfect Attendance', progress: 95, target: 'No absences this month', current: 19 }
    ],
    parentNotes: [
      { date: '2024-01-15', note: 'Emma has been very excited about her reading progress!' },
      { date: '2024-01-10', note: 'Thank you for encouraging her creativity in art class.' }
    ]
  };

  const weeklyData = [
    { day: 'Mon', points: 8 },
    { day: 'Tue', points: 12 },
    { day: 'Wed', points: 6 },
    { day: 'Thu', points: 10 },
    { day: 'Fri', points: 6 }
  ];

  const maxPoints = Math.max(...weeklyData.map(d => d.points));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-purple-100"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-4">
            <div className="text-6xl">{student.avatar}</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{student.name}</h1>
              <div className="flex items-center gap-3 mt-1">
                <span className="px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-medium">
                  {student.level}
                </span>
                <span className="flex items-center gap-1 text-orange-600 font-medium">
                  <Zap className="w-4 h-4" />
                  {student.streak} day streak!
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats and Progress */}
          <div className="lg:col-span-2 space-y-8">
            {/* Points Overview */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Points Overview</h2>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600">{student.totalPoints}</div>
                  <div className="text-sm text-gray-600">Total Points</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
                  <div className="text-3xl font-bold text-green-600">+{student.weeklyPoints}</div>
                  <div className="text-sm text-gray-600">This Week</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-600">{student.badges.length}</div>
                  <div className="text-sm text-gray-600">Badges Earned</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
                  <div className="text-3xl font-bold text-orange-600">#{Math.floor(Math.random() * 5) + 1}</div>
                  <div className="text-sm text-gray-600">Class Rank</div>
                </div>
              </div>

              {/* Weekly Chart */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Daily Points This Week</h3>
                <div className="flex items-end justify-between gap-4 h-32">
                  {weeklyData.map((day, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-lg transition-all duration-500 hover:from-purple-600 hover:to-blue-600"
                        style={{ height: `${(day.points / maxPoints) * 100}%` }}
                      ></div>
                      <div className="text-sm font-medium text-gray-600 mt-2">{day.day}</div>
                      <div className="text-xs text-gray-500">{day.points}pts</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Goals Progress */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-purple-600" />
                Current Goals
              </h2>
              <div className="space-y-6">
                {student.goals.map((goal, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                      <span className="text-sm font-medium text-purple-600">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{goal.target} ({goal.current}/{goal.target.match(/\d+/)?.[0]})</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-purple-600" />
                Recent Activities
              </h2>
              <div className="space-y-4">
                {student.recentActivities.slice(0, 6).map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className="text-2xl">{activity.icon}</div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.behavior}</p>
                      <p className="text-sm text-gray-500">{new Date(activity.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        activity.points > 0 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {activity.points > 0 ? '+' : ''}{activity.points} pts
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Badges and Notes */}
          <div className="space-y-8">
            {/* Badge Collection */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-600" />
                Badge Collection
              </h2>
              <div className="space-y-4">
                {student.badges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
                    <div className="text-3xl">{badge.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{badge.name}</h3>
                      <p className="text-xs text-gray-600">{badge.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Earned {new Date(badge.earned).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parent Notes */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Parent Communication</h2>
              <div className="space-y-4">
                {student.parentNotes.map((note, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-2xl border border-blue-200">
                    <p className="text-sm text-gray-700 mb-2">{note.note}</p>
                    <p className="text-xs text-gray-500">{new Date(note.date).toLocaleDateString()}</p>
                  </div>
                ))}
                <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 hover:border-purple-300 hover:text-purple-600 transition-colors">
                  + Add Parent Note
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all">
                  Award Points
                </button>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                  Give Badge
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                  Send Parent Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;