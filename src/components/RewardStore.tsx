import React, { useState } from 'react';
import { Gift, Star, Clock, Users, ShoppingCart, Award, Zap, Heart, BookOpen, Gamepad2 } from 'lucide-react';

const RewardStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<number[]>([]);

  const categories = [
    { id: 'all', label: 'All Rewards', icon: Gift },
    { id: 'privileges', label: 'Special Privileges', icon: Star },
    { id: 'supplies', label: 'School Supplies', icon: BookOpen },
    { id: 'activities', label: 'Fun Activities', icon: Gamepad2 },
    { id: 'recognition', label: 'Recognition', icon: Award }
  ];

  const rewards = [
    {
      id: 1,
      name: 'Extra Recess Time',
      description: '10 minutes of additional playground time',
      cost: 50,
      category: 'privileges',
      icon: '⏰',
      popularity: 95,
      available: true,
      type: 'individual'
    },
    {
      id: 2,
      name: 'Teacher Helper Badge',
      description: 'Be the teacher\'s special helper for the day',
      cost: 75,
      category: 'privileges',
      icon: '🎖️',
      popularity: 88,
      available: true,
      type: 'individual'
    },
    {
      id: 3,
      name: 'Choose Your Seat',
      description: 'Pick any seat in the classroom for the week',
      cost: 40,
      category: 'privileges',
      icon: '🪑',
      popularity: 82,
      available: true,
      type: 'individual'
    },
    {
      id: 4,
      name: 'Colorful Pencil Set',
      description: 'Set of 12 colored pencils with eraser',
      cost: 100,
      category: 'supplies',
      icon: '✏️',
      popularity: 76,
      available: true,
      type: 'physical'
    },
    {
      id: 5,
      name: 'Sticker Sheet Collection',
      description: 'Pack of 50 motivational stickers',
      cost: 60,
      category: 'supplies',
      icon: '⭐',
      popularity: 91,
      available: true,
      type: 'physical'
    },
    {
      id: 6,
      name: 'Class Movie Time',
      description: 'Vote for the next class movie (requires 5 students)',
      cost: 200,
      category: 'activities',
      icon: '🎬',
      popularity: 97,
      available: true,
      type: 'group'
    },
    {
      id: 7,
      name: 'Pizza Party Contribution',
      description: 'Help unlock a class pizza party (group goal)',
      cost: 150,
      category: 'activities',
      icon: '🍕',
      popularity: 99,
      available: true,
      type: 'group'
    },
    {
      id: 8,
      name: 'Student of the Week',
      description: 'Featured on the classroom wall with photo',
      cost: 300,
      category: 'recognition',
      icon: '🏆',
      popularity: 85,
      available: true,
      type: 'individual'
    },
    {
      id: 9,
      name: 'Homework Pass',
      description: 'Skip one homework assignment (with parent approval)',
      cost: 120,
      category: 'privileges',
      icon: '📝',
      popularity: 94,
      available: true,
      type: 'individual'
    },
    {
      id: 10,
      name: 'Art Supply Kit',
      description: 'Mini art kit with crayons, markers, and paper',
      cost: 180,
      category: 'supplies',
      icon: '🎨',
      popularity: 73,
      available: false,
      type: 'physical'
    }
  ];

  const filteredRewards = rewards.filter(reward => 
    selectedCategory === 'all' || reward.category === selectedCategory
  );

  const addToCart = (rewardId: number) => {
    setCart(prev => [...prev, rewardId]);
  };

  const removeFromCart = (rewardId: number) => {
    setCart(prev => prev.filter(id => id !== rewardId));
  };

  const isInCart = (rewardId: number) => cart.includes(rewardId);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'individual': return 'bg-blue-100 text-blue-700';
      case 'group': return 'bg-purple-100 text-purple-700';
      case 'physical': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPopularityColor = (popularity: number) => {
    if (popularity >= 90) return 'text-green-600';
    if (popularity >= 80) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Classroom Reward Store</h1>
              <p className="text-lg text-gray-600">Students can redeem their hard-earned points for exciting rewards</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-purple-100">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Items in Cart</p>
                    <p className="text-2xl font-bold text-purple-600">{cart.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Store Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Gift className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{rewards.length}</p>
                  <p className="text-sm text-gray-600">Total Rewards</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">847</p>
                  <p className="text-sm text-gray-600">Points Redeemed</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">18</p>
                  <p className="text-sm text-gray-600">Active Shoppers</p>
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
                  <p className="text-sm text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredRewards.map((reward) => (
            <div
              key={reward.id}
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                !reward.available ? 'opacity-60 border-gray-200' : 'border-transparent hover:border-purple-200'
              }`}
            >
              {/* Reward Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{reward.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{reward.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(reward.type)}`}>
                        {reward.type}
                      </span>
                      <span className={`text-xs font-medium ${getPopularityColor(reward.popularity)}`}>
                        {reward.popularity}% ❤️
                      </span>
                    </div>
                  </div>
                </div>
                {!reward.available && (
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{reward.description}</p>

              {/* Cost and Action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-2xl font-bold text-gray-900">{reward.cost}</span>
                  <span className="text-sm text-gray-600">points</span>
                </div>
                
                {reward.available ? (
                  <button
                    onClick={() => isInCart(reward.id) ? removeFromCart(reward.id) : addToCart(reward.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all ${
                      isInCart(reward.id)
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                    }`}
                  >
                    {isInCart(reward.id) ? 'Remove' : 'Add to Cart'}
                  </button>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 rounded-xl font-medium bg-gray-300 text-gray-500 cursor-not-allowed"
                  >
                    Unavailable
                  </button>
                )}
              </div>

              {/* Popularity Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Popularity</span>
                  <span>{reward.popularity}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${reward.popularity}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Group Goals Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-600" />
            Class Group Goals
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🍕</span>
                <div>
                  <h3 className="font-bold text-gray-900">Pizza Party Goal</h3>
                  <p className="text-sm text-gray-600">Class needs 2,000 total points</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">1,650 / 2,000 points</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style={{ width: '82.5%' }}></div>
                </div>
                <p className="text-xs text-gray-600">350 points to go! 🎉</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎬</span>
                <div>
                  <h3 className="font-bold text-gray-900">Movie Day Goal</h3>
                  <p className="text-sm text-gray-600">Class needs 1,500 total points</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">1,247 / 1,500 points</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '83.1%' }}></div>
                </div>
                <p className="text-xs text-gray-600">253 points to go! 🍿</p>
              </div>
            </div>
          </div>
        </div>

        {/* Store Management */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Store Management</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <button className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-200 hover:shadow-md transition-all text-left">
              <div className="flex items-center gap-3 mb-3">
                <Gift className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-gray-900">Add New Reward</h3>
              </div>
              <p className="text-sm text-gray-600">Create custom rewards for your classroom</p>
            </button>

            <button className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 hover:shadow-md transition-all text-left">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-purple-600" />
                <h3 className="font-semibold text-gray-900">Manage Inventory</h3>
              </div>
              <p className="text-sm text-gray-600">Update availability and stock levels</p>
            </button>

            <button className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 hover:shadow-md transition-all text-left">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-yellow-600" />
                <h3 className="font-semibold text-gray-900">Redemption History</h3>
              </div>
              <p className="text-sm text-gray-600">View all student redemptions and trends</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardStore;