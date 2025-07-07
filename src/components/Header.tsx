import React, { useState } from 'react';
import { Heart, Menu, X, Phone, Mail, Shield } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isAdminLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, isAdminLoggedIn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'report', label: 'Report Animal' },
    { id: 'resources', label: 'Find Help' },
    { id: 'dashboard', label: 'Impact' },
    { id: 'fundraising', label: 'Donate' },
    { id: 'whatsapp', label: 'WhatsApp' }
  ];

  return (
    <>
      {/* Top Emergency Bar */}
      <div className="bg-red-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Emergency: +91 98765 SAFER</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>help@saferstrays.org</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setActiveSection('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SaferStrays</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Protecting India's Street Animals</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setActiveSection('admin')}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                <Shield className="w-4 h-4" />
                Admin
              </button>
              <button
                onClick={() => setActiveSection('report')}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transition-colors"
              >
                Report Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium rounded ${
                    activeSection === item.id
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setActiveSection('admin');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded font-medium mt-2"
              >
                <Shield className="w-4 h-4" />
                Admin Login
              </button>
              <button
                onClick={() => {
                  setActiveSection('report');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded font-medium mt-2"
              >
                Report Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;