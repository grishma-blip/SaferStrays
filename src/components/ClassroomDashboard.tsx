import React, { useState } from 'react';
import { Star, Award, Clock, Users, Plus, Filter, Search, Zap, Heart, BookOpen, HandHeart, Timer } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  avatar: string;
  totalPoints: number;
  weeklyPoints: number;
  badges: string[];
  recentBehaviors: string[];
  level: string;
  streak: number;
}

interface ClassroomDashboardProps {
  onStudentSelect: (studentId: number) => void;
}

const ClassroomDashboard: React.FC<ClassroomDashboardProps> = ({ onStudentSelect }) => {
  const [selectedBehavior, setSelectedBehavior] = useState('');
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const [showPointsModal, setShowPointsModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const behaviors = [
    { id: 'participation', label: 'Great Participation', points: 5, icon: '🙋‍♀️', color: 'blue' },
    { id: 'homework', label: 'Homework Complete', points: 10, icon: '📚', color: 'green' },
    { id: 'punctuality', label: 'On Time', points: 3, icon: '⏰', color: 'yellow' },
    { id: 'helping', label: 'Helped Classmate', points: 8, icon: '🤝', color: 'purple' },
    { id: 'creativity', label: 'Creative Thinking', points: 7, icon: '🎨', color: 'pink' },
    { id: 'leadership', label: 'Leadership', points: 10, icon: '👑', color: 'orange' },
    { id: 'kindness', label: 'Acts of Kindness', points: 6, icon: '💝', color: 'red' },
    { id: 'improvement', label: 'Needs Encouragement', points: -2, icon: '🌱', color: 'gray' }
  ];

  const students: Student[] = [
    {
      id: 1,
      name: 'Emma Thompson',
      avatar: '👧',
      totalPoints: 245,
      weeklyPoints: 42,
      badges: ['Super Helper', 'Reading Star', 'Team Player'],
      recentBehaviors: ['Helped classmate with math', 'Completed homework early'],
      level: 'Gold Star',
      streak: 5
    },
    {
      id: 2,
      name: 'Liam Rodriguez',
      avatar: '👦',
      totalPoints: 198,
      weeklyPoints: 38,
      badges: ['Creative Thinker', 'Punctuality Pro'],
      recentBehaviors: ['Amazing art project', 'On time all week'],
      level: 'Silver Star',
      streak: 3
    },
    {
      id: 3,
      name: 'Sophia Chen',
      avatar: '👧',
      totalPoints: 267,
      weeklyPoints: 45,
      badges: ['Math Wizard', 'Kind Heart', 'Leader'],
      recentBehaviors: ['Tutored struggling classmate', 'Led group project'],
      level: 'Gold Star',
      streak: 7
    },
    {
      id: 4,
      name: 'Noah Johnson',
      avatar: '👦',
      totalPoints: 156,
      weeklyPoints: 28,
      badges: ['Improvement Star', 'Good Listener'],
      recentBehaviors: ['Better focus in class', 'Raised hand to answer'],
      level: 'Bronze Star',
      streak: 2
    },
    {
      id: 5,
      name: 'Ava Williams',
      avatar: '👧',
      totalPoints: 223,
      weeklyPoints: 41,
      badges: ['Reading Champion', 'Homework Hero'],
      recentBehaviors: ['Read extra books', 'Perfect homework week'],
      level: 'Silver Star',
      streak: 4
    },
    {
      id: 6,
      name: 'Ethan Davis',
      avatar: '👦',
      totalPoints: 189,
      weeklyPoints: 35,
      badges: ['Sports Star', 'Team Spirit'],
      recentBehaviors: ['Great teamwork in PE', 'Encouraged teammates'],
      level: 'Silver Star',
      streak: 3
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleStudentSelection = (studentId: number) => {
    setSelectedStudents(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const awardPoints = () => {
    if (selectedBehavior && selectedStudents.length > 0) {
      const behavior = behaviors.find(b => b.id === selectedBehavior);
      // Here you would typically update the backend
      console.log(`Awarding ${behavior?.points} points for ${behavior?.label} to students:`, selectedStudents);
      
      // Reset selections
      setSelectedStudents([]);
      setSelectedBehavior('');
      setShowPointsModal(false);
      
      // Show success animation (you could add a toast notification here)
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Gold Star': return 'from-yellow-400 to-orange-500';
      case 'Silver Star': return 'from-gray-300 to-gray-500';
      case 'Bronze Star': return 'from-orange-300 to-orange-600';
      default: return 'from-blue-300 to-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Mrs. Johnson's 2nd Grade Heroes
              </h1>
              <p className="text-lg text-gray-600">Celebrating positive behaviors and building character</p>
            </div>
            <button
              onClick={() => setShowPointsModal(true)}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Award Points
            </button>
          </div>

          {/* Class Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-sm text-gray-600">Total Students</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                  <p className="text-sm text-gray-600">Points This Week</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">89</p>
                  <p className="text-sm text-gray-600">Badges Earned</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">96%</p>
                  <p className="text-sm text-gray-600">Positive Behaviors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors bg-white">
              <Filter className="w-5 h-5 text-gray-500" />
              Filter by Level
            </button>
          </div>
        </div>

        {/* Student Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                selectedStudents.includes(student.id) 
                  ? 'border-purple-500 ring-4 ring-purple-100' 
                  : 'border-transparent hover:border-purple-200'
              }`}
              onClick={() => toggleStudentSelection(student.id)}
            >
              {/* Student Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{student.avatar}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{student.name}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getLevelColor(student.level)} text-white`}>
                      {student.level}
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onStudentSelect(student.id);
                  }}
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  <Award className="w-5 h-5" />
                </button>
              </div>

              {/* Points Display */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <p className="text-2xl font-bold text-blue-600">{student.totalPoints}</p>
                  <p className="text-xs text-gray-600">Total Points</p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                  <p className="text-2xl font-bold text-green-600">+{student.weeklyPoints}</p>
                  <p className="text-xs text-gray-600">This Week</p>
                </div>
              </div>

              {/* Streak */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(Math.min(student.streak, 5))].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  ))}
                </div>
                <span className="text-sm font-medium text-orange-600">
                  {student.streak} day streak!
                </span>
              </div>

              {/* Recent Badges */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-600 mb-2">Recent Badges</p>
                <div className="flex flex-wrap gap-1">
                  {student.badges.slice(0, 3).map((badge, index) => (
                    <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Behaviors */}
              <div>
                <p className="text-xs font-medium text-gray-600 mb-2">Recent Achievements</p>
                <div className="space-y-1">
                  {student.recentBehaviors.slice(0, 2).map((behavior, index) => (
                    <p key={index} className="text-xs text-gray-500 truncate">• {behavior}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Award Points Modal */}
        {showPointsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Award Points to Students</h2>
              
              {/* Selected Students */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Selected Students ({selectedStudents.length})
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedStudents.map(studentId => {
                    const student = students.find(s => s.id === studentId);
                    return (
                      <span key={studentId} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {student?.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Behavior Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-3">Select Behavior</p>
                <div className="grid grid-cols-2 gap-3">
                  {behaviors.map((behavior) => (
                    <button
                      key={behavior.id}
                      onClick={() => setSelectedBehavior(behavior.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        selectedBehavior === behavior.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{behavior.icon}</span>
                        <div>
                          <p className="font-medium text-gray-900">{behavior.label}</p>
                          <p className={`text-sm ${behavior.points > 0 ? 'text-green-600' : 'text-orange-600'}`}>
                            {behavior.points > 0 ? '+' : ''}{behavior.points} points
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={awardPoints}
                  disabled={!selectedBehavior || selectedStudents.length === 0}
                  className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Award Points
                </button>
                <button
                  onClick={() => setShowPointsModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassroomDashboard;