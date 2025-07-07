import React, { useState } from 'react';
import { MessageCircle, Smartphone, Bot, Users, CheckCircle, ArrowRight, Globe, Zap } from 'lucide-react';

const WhatsAppIntegration = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const languages = [
    { code: 'english', name: 'English', native: 'English', flag: '🇬🇧' },
    { code: 'hindi', name: 'Hindi', native: 'हिंदी', flag: '🇮🇳' },
    { code: 'marathi', name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
    { code: 'tamil', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
    { code: 'bengali', name: 'Bengali', native: 'বাংলা', flag: '🇮🇳' },
    { code: 'telugu', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
    { code: 'gujarati', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'kannada', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' }
  ];

  const chatFlow = [
    { step: 1, message: 'Hi! I found a stray animal that needs help. 🐕', type: 'user' },
    { step: 2, message: 'Thank you for reaching out! I\'m SaferStrays AI assistant. Can you tell me your exact location?', type: 'bot' },
    { step: 3, message: 'I\'m near the bus stop at Linking Road, Bandra West, Mumbai', type: 'user' },
    { step: 4, message: 'Got it! Now, what type of animal is it and what\'s its condition? Please describe what you see.', type: 'bot' },
    { step: 5, message: 'It\'s a dog, looks injured. There\'s blood on its leg and it can\'t walk properly', type: 'user' },
    { step: 6, message: '🚨 EMERGENCY ALERT SENT!\n\nI\'ve immediately notified:\n• Mumbai Animal Rescue (+91 98765 43210)\n• Bandra Vet Clinic (+91 98765 43211)\n\nExpected response: 25-30 minutes\nYour report ID: #SR12345', type: 'bot' }
  ];

  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Assistant',
      description: 'Advanced natural language processing understands reports in multiple Indian languages and dialects'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Supports 8+ Indian languages including Hindi, Tamil, Bengali, Marathi, and regional dialects'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Reports processed and rescue teams notified within 60 seconds of receiving your message'
    },
    {
      icon: CheckCircle,
      title: 'Real-time Updates',
      description: 'Receive live updates on rescue status, team dispatch, and animal recovery progress'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">WhatsApp Emergency Reporting</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Report animal emergencies instantly via WhatsApp in your preferred language. 
            Our AI assistant processes your report and connects you with local rescue teams in under 60 seconds.
          </p>
        </div>

        {/* Quick Start CTA */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Reporting Now!</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-3">
                <Smartphone className="w-8 h-8" />
                <div className="text-left">
                  <p className="font-medium">Save our WhatsApp number:</p>
                  <p className="text-2xl font-bold">+91 98765 SAFER</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-green-100 mb-2">or scan QR code</p>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                  <div className="text-2xl">📱</div>
                </div>
              </div>
            </div>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2 shadow-lg">
              <MessageCircle className="w-6 h-6" />
              Open WhatsApp Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Language Selection */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Choose Your Language</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`p-4 rounded-xl border-2 text-center transition-all hover:scale-105 ${
                  selectedLanguage === lang.code
                    ? 'border-green-500 bg-green-50 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">{lang.flag}</div>
                <div className="font-medium text-gray-900">{lang.name}</div>
                <div className="text-sm text-gray-600">{lang.native}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Demo */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">How It Works - Live Demo</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-100 rounded-2xl p-6 space-y-4 max-h-96 overflow-y-auto">
              {chatFlow.map((chat, index) => (
                <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    chat.type === 'user' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white text-gray-900 shadow-sm border'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{chat.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                This is a sample conversation. Actual responses may vary based on your specific situation.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Step-by-Step Guide */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-8 text-center">How to Report via WhatsApp</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Save Number',
                description: 'Add +91 98765 SAFER to your WhatsApp contacts',
                icon: '📱'
              },
              {
                step: 2,
                title: 'Send Message',
                description: 'Text us about the animal emergency in any language',
                icon: '💬'
              },
              {
                step: 3,
                title: 'AI Processing',
                description: 'Our AI analyzes your report and identifies location',
                icon: '🤖'
              },
              {
                step: 4,
                title: 'Rescue Dispatch',
                description: 'Local teams are notified and dispatched immediately',
                icon: '🚑'
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-sm text-blue-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Recent WhatsApp Rescues</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                location: 'Mumbai, Maharashtra',
                time: '2 hours ago',
                story: 'Injured dog reported via WhatsApp in Hindi. Rescued within 28 minutes.',
                status: 'Recovered'
              },
              {
                location: 'Bangalore, Karnataka',
                time: '5 hours ago',
                story: 'Cat with kittens reported in Kannada. All safely relocated to shelter.',
                status: 'Safe'
              },
              {
                location: 'Chennai, Tamil Nadu',
                time: '1 day ago',
                story: 'Bird rescue reported in Tamil. Successfully treated and released.',
                status: 'Released'
              }
            ].map((story, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-600">{story.location}</span>
                  <span className="text-xs text-gray-500">{story.time}</span>
                </div>
                <p className="text-gray-800 mb-3">{story.story}</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  {story.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Every Second Counts</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Don't hesitate when you see an animal in distress. Your WhatsApp message can save a life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Start WhatsApp Chat
            </a>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center gap-2"
            >
              📞 Call Emergency Line
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppIntegration;