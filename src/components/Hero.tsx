import React from 'react';
import { Heart, Phone, ArrowRight, DollarSign } from 'lucide-react';

interface HeroProps {
  onReportNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onReportNow }) => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Every Street Animal
              <br />
              <span className="text-orange-400">Deserves a Chance</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
              Join India's largest network connecting citizens with animal rescue 
              organizations. Your report can save a life in minutes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={onReportNow}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <Heart className="w-6 h-6" />
                Report Animal Emergency
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center gap-2">
                <Phone className="w-6 h-6" />
                Call Emergency Line
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">2,847</div>
                <div className="text-sm text-gray-300">Animals Rescued</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 text-orange-400 text-2xl">👥</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">156</div>
                <div className="text-sm text-gray-300">Partner Organizations</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 text-orange-400 text-2xl">📍</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">12</div>
                <div className="text-sm text-gray-300">Cities Covered</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 text-orange-400 text-2xl">🕐</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300">Emergency Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission: Building a Compassionate India
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              SaferStrays connects caring citizens with local animal welfare organizations across India. 
              Through AI-powered reporting and real-time coordination, we ensure that no street animal suffers alone. 
              Every report contributes to a comprehensive database that helps plan targeted welfare programs and track our collective impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Response</h3>
              <p className="text-gray-600">
                AI-powered system connects reports with nearest rescue teams in under 30 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">👥</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Network</h3>
              <p className="text-gray-600">
                Over 150 partner organizations across 12 major Indian cities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">📊</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Impact</h3>
              <p className="text-gray-600">
                Comprehensive census database helps plan targeted welfare programs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lives We've Saved Together
            </h2>
            <p className="text-lg text-gray-600">
              Every report makes a difference. Here are some recent success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Rescued dog" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Mumbai, Maharashtra
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Rescued from Traffic Accident</h3>
                <p className="text-gray-600 text-sm">
                  This brave dog was rescued from a busy highway after being hit by a vehicle. 
                  Thanks to quick reporting, he made a full recovery.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Cat with kittens" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Bangalore, Karnataka
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mother Cat and Kittens Saved</h3>
                <p className="text-gray-600 text-sm">
                  A mother cat and her newborn kittens were found in harsh conditions. 
                  All are now healthy and have found loving homes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Treated dog" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Delhi, NCR
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Medical Treatment Success</h3>
                <p className="text-gray-600 text-sm">
                  Severe skin condition treated successfully. This dog now lives happily 
                  with a caring family who adopted him.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See an Animal in Distress?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Don't wait. Your quick action can be the difference between life and death. 
            Report now and help us build a safer world for street animals.
          </p>
          <button
            onClick={onReportNow}
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            <Heart className="w-6 h-6" />
            Make a Report Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;