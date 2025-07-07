import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReportForm from './components/ReportForm';
import Dashboard from './components/Dashboard';
import ResourceMap from './components/ResourceMap';
import WhatsAppIntegration from './components/WhatsAppIntegration';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Fundraising from './components/Fundraising';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const renderContent = () => {
    if (isAdminLoggedIn && activeSection === 'admin') {
      return <AdminDashboard onLogout={() => {
        setIsAdminLoggedIn(false);
        setActiveSection('home');
      }} />;
    }

    switch (activeSection) {
      case 'home':
        return <Hero onReportNow={() => setActiveSection('report')} />;
      case 'report':
        return <ReportForm />;
      case 'dashboard':
        return <Dashboard />;
      case 'resources':
        return <ResourceMap />;
      case 'whatsapp':
        return <WhatsAppIntegration />;
      case 'fundraising':
        return <Fundraising />;
      case 'admin':
        return <AdminLogin 
          onLogin={() => setIsAdminLoggedIn(true)} 
          onBack={() => setActiveSection('home')} 
        />;
      default:
        return <Hero onReportNow={() => setActiveSection('report')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isAdminLoggedIn={isAdminLoggedIn}
      />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;