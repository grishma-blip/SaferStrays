import React, { useState } from 'react';
import { Heart, DollarSign, Users, Target, TrendingUp, Gift, Star, CheckCircle, ArrowRight } from 'lucide-react';

const Fundraising = () => {
  const [donationAmount, setDonationAmount] = useState(500);
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);

  const campaigns = [
    {
      id: 1,
      title: 'Emergency Medical Fund',
      description: 'Critical surgeries and medical treatments for severely injured street animals',
      raised: 125000,
      goal: 200000,
      donors: 234,
      daysLeft: 15,
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      urgent: true
    },
    {
      id: 2,
      title: 'Mobile Rescue Van',
      description: 'Equipping our teams with a fully-equipped mobile veterinary unit for faster response',
      raised: 89000,
      goal: 150000,
      donors: 156,
      daysLeft: 30,
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      urgent: false
    },
    {
      id: 3,
      title: 'Shelter Expansion',
      description: 'Building new facilities to house and rehabilitate more rescued animals',
      raised: 45000,
      goal: 100000,
      donors: 89,
      daysLeft: 45,
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      urgent: false
    }
  ];

  const impactStats = [
    { icon: Heart, label: 'Animals Rescued', value: '2,847', description: 'Lives saved through donations' },
    { icon: DollarSign, label: 'Funds Raised', value: '₹12.5L', description: 'Total community support' },
    { icon: Users, label: 'Active Donors', value: '1,234', description: 'Compassionate supporters' },
    { icon: Target, label: 'Success Rate', value: '94%', description: 'Successful rescues' }
  ];

  const donationOptions = [100, 250, 500, 1000, 2500, 5000];

  const recentDonors = [
    { name: 'Priya Sharma', amount: 2500, time: '2 hours ago', message: 'For the injured dog in Mumbai' },
    { name: 'Rajesh Kumar', amount: 1000, time: '5 hours ago', message: 'Keep up the great work!' },
    { name: 'Anonymous', amount: 5000, time: '1 day ago', message: 'Every life matters' },
    { name: 'Meera Patel', amount: 500, time: '1 day ago', message: 'Small contribution, big heart' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Help Us Save More Lives
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation directly funds rescue operations, medical treatments, and shelter for India's street animals. 
            Every rupee makes a difference in saving innocent lives.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Quick Donation */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-12 border border-orange-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Quick Donation</h2>
            <p className="text-gray-600">Choose an amount or enter a custom donation to support our mission</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Amount Selection */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
              {donationOptions.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount)}
                  className={`py-3 px-4 rounded-xl font-medium transition-all ${
                    donationAmount === amount
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  ₹{amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Custom Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">₹</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            {/* Impact Message */}
            <div className="bg-orange-50 rounded-xl p-4 mb-6">
              <p className="text-orange-800 text-center">
                <strong>Your ₹{donationAmount} can:</strong> {
                  donationAmount >= 5000 ? 'Fund a complete rescue operation including surgery and rehabilitation' :
                  donationAmount >= 2000 ? 'Cover emergency medical treatment for an injured animal' :
                  donationAmount >= 1000 ? 'Provide food and shelter for a rescued animal for a month' :
                  donationAmount >= 500 ? 'Fund vaccination and basic medical care' :
                  'Contribute to our emergency medical fund'
                }
              </p>
            </div>

            {/* Donation Button */}
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg flex items-center justify-center gap-2">
              <Heart className="w-6 h-6" />
              Donate ₹{donationAmount} Now
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Secure payment • Tax deductible under 80G • Instant receipt
            </p>
          </div>
        </div>

        {/* Active Campaigns */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Active Fundraising Campaigns</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {campaign.urgent && (
                  <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">
                    🚨 URGENT CAMPAIGN
                  </div>
                )}
                
                <img 
                  src={campaign.image} 
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>
                  
                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-700">
                        {formatCurrency(campaign.raised)} raised
                      </span>
                      <span className="text-gray-500">
                        {formatCurrency(campaign.goal)} goal
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${getProgressPercentage(campaign.raised, campaign.goal)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{campaign.donors} donors</span>
                    <span>{campaign.daysLeft} days left</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-xl font-medium hover:from-orange-600 hover:to-red-600 transition-colors">
                    Support This Campaign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Donors */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-orange-600" />
              Recent Donors
            </h3>
            <div className="space-y-4">
              {recentDonors.map((donor, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-semibold">
                    {donor.name === 'Anonymous' ? '?' : donor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{donor.name}</span>
                      <span className="text-sm text-gray-500">{donor.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{donor.message}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-orange-600">₹{donor.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Gift className="w-6 h-6 text-orange-600" />
              Donation Benefits
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Tax Deduction</h4>
                  <p className="text-sm text-gray-600">80G certified - Get tax benefits on your donation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Regular Updates</h4>
                  <p className="text-sm text-gray-600">Receive updates on animals you've helped save</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Transparent Usage</h4>
                  <p className="text-sm text-gray-600">Track exactly how your donation is being used</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Community Recognition</h4>
                  <p className="text-sm text-gray-600">Join our wall of compassionate donors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Partnerships */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Partnerships</h3>
          <p className="text-gray-600 mb-6">
            Partner with us for CSR initiatives and make a larger impact on animal welfare across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-medium hover:from-orange-600 hover:to-red-600 transition-colors">
              Corporate Partnership
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              Download CSR Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundraising;