import React, { useState } from 'react';
import { MapPin, Phone, Mail, Star, Clock, Filter, Search, Navigation } from 'lucide-react';

const ResourceMap = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      id: 1,
      name: 'Mumbai Animal Rescue Foundation',
      type: 'NGO',
      city: 'Mumbai',
      area: 'Bandra West',
      address: '123 Linking Road, Bandra West, Mumbai 400050',
      phone: '+91 98765 43210',
      email: 'emergency@mumbairescue.org',
      website: 'www.mumbairescue.org',
      rating: 4.8,
      responseTime: '25-30 mins',
      services: ['24/7 Emergency', 'Surgery', 'Adoption', 'Vaccination'],
      status: 'Active',
      specialization: 'Street Dogs & Cats',
      established: '2015',
      volunteers: 45
    },
    {
      id: 2,
      name: 'Bangalore Animal Care Center',
      type: 'Shelter',
      city: 'Bangalore',
      area: 'Koramangala',
      address: '456 5th Block, Koramangala, Bangalore 560095',
      phone: '+91 98765 43211',
      email: 'help@bangalorecare.org',
      website: 'www.bangalorecare.org',
      rating: 4.6,
      responseTime: '35-45 mins',
      services: ['Shelter', 'Medical Care', 'Spaying/Neutering', 'Rehabilitation'],
      status: 'Active',
      specialization: 'All Animals',
      established: '2012',
      volunteers: 32
    },
    {
      id: 3,
      name: 'Delhi Emergency Veterinary Hospital',
      type: 'Veterinary',
      city: 'Delhi',
      area: 'Connaught Place',
      address: '789 CP Block, Connaught Place, New Delhi 110001',
      phone: '+91 98765 43212',
      email: 'emergency@delhivet.com',
      website: 'www.delhivet.com',
      rating: 4.9,
      responseTime: '15-20 mins',
      services: ['24/7 Emergency', 'Critical Care', 'Surgery', 'Diagnostics'],
      status: 'Active',
      specialization: 'Emergency Medicine',
      established: '2008',
      volunteers: 28
    },
    {
      id: 4,
      name: 'Pune Street Animal Welfare',
      type: 'NGO',
      city: 'Pune',
      area: 'Kothrud',
      address: '321 FC Road, Kothrud, Pune 411038',
      phone: '+91 98765 43213',
      email: 'rescue@punestreet.org',
      website: 'www.punestreet.org',
      rating: 4.7,
      responseTime: '30-40 mins',
      services: ['Rescue', 'Rehabilitation', 'Adoption', 'Community Programs'],
      status: 'Busy',
      specialization: 'Street Animals',
      established: '2018',
      volunteers: 38
    },
    {
      id: 5,
      name: 'Hyderabad Animal Welfare Society',
      type: 'NGO',
      city: 'Hyderabad',
      area: 'Jubilee Hills',
      address: '654 Road No. 36, Jubilee Hills, Hyderabad 500033',
      phone: '+91 98765 43214',
      email: 'info@hydanimalwelfare.org',
      website: 'www.hydanimalwelfare.org',
      rating: 4.5,
      responseTime: '35-45 mins',
      services: ['Rescue', 'Medical Care', 'Awareness', 'Training'],
      status: 'Active',
      specialization: 'Community Outreach',
      established: '2014',
      volunteers: 41
    }
  ];

  const cities = ['all', 'Mumbai', 'Bangalore', 'Delhi', 'Pune', 'Hyderabad'];
  const types = ['all', 'NGO', 'Shelter', 'Veterinary'];

  const filteredResources = resources.filter(resource => {
    const matchesCity = selectedCity === 'all' || resource.city === selectedCity;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesSearch = searchTerm === '' || 
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCity && matchesType && matchesSearch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'NGO': return 'bg-blue-100 text-blue-800';
      case 'Shelter': return 'bg-purple-100 text-purple-800';
      case 'Veterinary': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Busy': return 'bg-yellow-100 text-yellow-800';
      case 'Offline': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Find Animal Welfare Resources</h1>
          <p className="text-lg text-gray-600">Connect with verified rescue organizations and veterinary services across India</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, area, or services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city === 'all' ? 'All Cities' : city}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredResources.length}</span> organizations
            {selectedCity !== 'all' && ` in ${selectedCity}`}
            {selectedType !== 'all' && ` (${selectedType})`}
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{resource.name}</h3>
                    <p className="text-gray-600 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {resource.area}, {resource.city}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(resource.status)}`}>
                      {resource.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                  </div>
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">{resource.rating} rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{resource.responseTime}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Est:</span> {resource.established}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Volunteers:</span> {resource.volunteers}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <a href={`tel:${resource.phone}`} className="text-orange-600 hover:text-orange-700 font-medium">
                      {resource.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <a href={`mailto:${resource.email}`} className="text-orange-600 hover:text-orange-700">
                      {resource.email}
                    </a>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Specialization:</span> {resource.specialization}
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {resource.services.map((service, index) => (
                      <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-4 rounded-xl font-medium hover:from-orange-600 hover:to-red-700 transition-all">
                    Contact Now
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                    <Navigation className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Interactive Map</h2>
            <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
              View Full Map
            </button>
          </div>
          <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Interactive Map Coming Soon</h3>
              <p className="text-gray-500 max-w-md">
                We're building an interactive map that will show real-time locations of all partner organizations, 
                their current availability, and optimal routes for emergency responses.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Emergency Situation?</h3>
          <p className="mb-4">If an animal is in immediate life-threatening danger, call our 24/7 emergency line</p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            +91 98765 SAFER
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceMap;