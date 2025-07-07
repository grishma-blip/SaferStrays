import React, { useState } from 'react';
import { MapPin, Camera, AlertTriangle, Heart, Send, CheckCircle, Clock, Phone, Upload, X, Image } from 'lucide-react';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    animalType: '',
    condition: '',
    description: '',
    urgency: 'medium',
    contactInfo: '',
    images: [] as File[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        location: '',
        animalType: '',
        condition: '',
        description: '',
        urgency: 'medium',
        contactInfo: '',
        images: []
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleImageUpload = (files: FileList | null) => {
    if (!files) return;
    
    const newImages = Array.from(files).filter(file => {
      // Only allow image files
      return file.type.startsWith('image/');
    }).slice(0, 5 - formData.images.length); // Limit to 5 total images
    
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({
            ...prev,
            location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
          }));
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get location. Please enter manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Report Submitted Successfully!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your compassion. We've immediately notified the nearest animal welfare organizations.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-green-900 mb-3">What happens next:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="font-medium text-green-900">Immediate Alert Sent</p>
                    <p className="text-sm text-green-700">Local rescue teams have been notified within 2 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="font-medium text-green-900">Response Team Dispatched</p>
                    <p className="text-sm text-green-700">Expected response time: 30-45 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="font-medium text-green-900">Updates via SMS/WhatsApp</p>
                    <p className="text-sm text-green-700">You'll receive status updates if contact info was provided</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-blue-800">
                <Phone className="w-5 h-5" />
                <span className="font-medium">Emergency Contact: +91 98765 SAFER</span>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Report ID: #SR{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Report Animal Emergency</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every second counts. Provide as much detail as possible to help our rescue teams respond quickly and effectively.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Critical Emergency?</h3>
              <p className="text-sm text-red-700 mt-1">
                If the animal is in immediate life-threatening danger, call our emergency line: 
                <a href="tel:+919876543210" className="font-bold underline ml-1">+91 98765 SAFER</a>
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          {/* Location Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-600" />
              Location Details
            </h2>
            <div className="relative">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter specific address, landmark, or area (e.g., Near Metro Station, Bandra West, Mumbai)"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                required
              />
              <button
                type="button"
                onClick={getCurrentLocation}
                className="absolute right-3 top-3 px-4 py-2 bg-orange-100 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-200 transition-colors"
              >
                Use GPS
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Be as specific as possible. Include nearby landmarks, street names, or building details.
            </p>
          </div>

          {/* Animal Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Animal Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Animal Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="animalType"
                  value={formData.animalType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  <option value="">Select animal type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="cow">Cow</option>
                  <option value="buffalo">Buffalo</option>
                  <option value="goat">Goat</option>
                  <option value="horse">Horse</option>
                  <option value="bird">Bird</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Condition <span className="text-red-500">*</span>
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  <option value="">Select condition</option>
                  <option value="injured">Injured/Bleeding</option>
                  <option value="sick">Sick/Weak</option>
                  <option value="trapped">Trapped/Stuck</option>
                  <option value="aggressive">Aggressive/Dangerous</option>
                  <option value="malnourished">Severely Malnourished</option>
                  <option value="pregnant">Pregnant/With Babies</option>
                  <option value="healthy">Healthy but Stray</option>
                </select>
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-orange-600" />
              Animal Photos <span className="text-sm font-normal text-gray-500">(Optional)</span>
            </h2>
            <p className="text-sm text-gray-600">
              Photos help rescue teams assess the situation better and prepare appropriate equipment. You can upload up to 5 images.
            </p>
            
            {/* Upload Area */}
            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-orange-500 bg-orange-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleImageUpload(e.target.files)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={formData.images.length >= 5}
              />
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">
                    {formData.images.length >= 5 ? 'Maximum 5 images reached' : 'Drop images here or click to browse'}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Supports JPG, PNG, GIF up to 10MB each
                  </p>
                </div>
              </div>
            </div>

            {/* Image Previews */}
            {formData.images.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700">Uploaded Images ({formData.images.length}/5)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Animal photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        {(image.size / 1024 / 1024).toFixed(1)}MB
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Urgency Level */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Urgency Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { 
                  value: 'low', 
                  label: 'Low Priority', 
                  desc: 'Healthy animal, no immediate danger',
                  color: 'green',
                  icon: Clock
                },
                { 
                  value: 'medium', 
                  label: 'Medium Priority', 
                  desc: 'Sick or malnourished, needs attention',
                  color: 'yellow',
                  icon: AlertTriangle
                },
                { 
                  value: 'high', 
                  label: 'High Priority', 
                  desc: 'Injured, trapped, or life-threatening',
                  color: 'red',
                  icon: AlertTriangle
                }
              ].map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, urgency: option.value }))}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.urgency === option.value
                        ? `border-${option.color}-500 bg-${option.color}-50`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`w-5 h-5 ${
                        formData.urgency === option.value 
                          ? `text-${option.color}-600` 
                          : 'text-gray-400'
                      }`} />
                      <span className={`font-medium ${
                        formData.urgency === option.value 
                          ? `text-${option.color}-900` 
                          : 'text-gray-700'
                      }`}>
                        {option.label}
                      </span>
                    </div>
                    <p className={`text-sm ${
                      formData.urgency === option.value 
                        ? `text-${option.color}-700` 
                        : 'text-gray-500'
                    }`}>
                      {option.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Additional Details</h2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Describe the animal's condition, behavior, size, color, and any other relevant details that could help rescue teams..."
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              placeholder="Your phone number or email for updates (optional but recommended)"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <p className="text-sm text-gray-500">
              We'll send you updates about the rescue operation. Your information is kept confidential.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing Emergency Report...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  Submit Emergency Report
                </>
              )}
            </button>
          </div>
        </form>

        {/* Help Information */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-6">
          <h3 className="font-semibold text-blue-900 mb-4">How Our Emergency Response Works:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
              <div>
                <p className="font-medium">AI Analysis</p>
                <p>Our system analyzes your report and extracts key information</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
              <div>
                <p className="font-medium">Location Matching</p>
                <p>We identify the nearest qualified rescue organizations</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
              <div>
                <p className="font-medium">Instant Alerts</p>
                <p>Multiple rescue teams are notified simultaneously</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
              <div>
                <p className="font-medium">Real-time Updates</p>
                <p>You receive status updates throughout the rescue process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;