import React, { useState } from 'react';
import { ArrowLeft, User, LogOut, Settings as SettingsIcon, Bell, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const Settings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'johndoe@email.com',
    phone: '',
    location: 'New York, USA',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    // Handle save logic
    alert('Settings saved successfully!');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-beige py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-3 bg-white hover:bg-gold hover:text-white rounded-xl shadow-sm transition-colors border border-beige-dark group"
            >
              <ArrowLeft className="w-6 h-6 text-slate group-hover:text-white transition-colors" />
            </button>
            <div>
              <h1 className="text-4xl font-extrabold text-slate flex items-center gap-3">
                Account Settings <SettingsIcon className="w-8 h-8 text-gold"/>
              </h1>
              <p className="text-textGray">Manage your profile, preferences, and notifications.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeLeft}
            className="lg:col-span-1"
          >
            <Card className="p-6 rounded-[2rem] shadow-lg border-0 bg-white">
              {/* Profile Picture */}
              <div className="flex flex-col items-center mb-8 bg-gradient-to-b from-beige-light to-white p-6 rounded-3xl border border-beige-dark/50">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 border-4 border-gold shadow-md relative group cursor-pointer">
                  <User className="w-16 h-16 text-slate" />
                  <div className="absolute inset-0 bg-slate/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-sm">Edit Photo</span>
                  </div>
                </div>
                <h3 className="font-bold text-slate text-xl">{formData.name}</h3>
                <p className="text-xs text-textGray uppercase tracking-widest mt-1">Free Member</p>
              </div>

              {/* Menu Items */}
              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab('account')}
                  className={`w-full px-5 py-4 rounded-xl text-left font-bold transition-all flex items-center gap-3 ${
                    activeTab === 'account'
                      ? 'bg-slate text-white shadow-md translate-x-2'
                      : 'bg-beige-light text-textGray hover:bg-beige hover:text-slate'
                  }`}
                >
                  <User className="w-5 h-5"/> Profile Details
                </button>
                <button
                  onClick={() => setActiveTab('notification')}
                  className={`w-full px-5 py-4 rounded-xl text-left font-bold transition-all flex items-center gap-3 ${
                    activeTab === 'notification'
                      ? 'bg-slate text-white shadow-md translate-x-2'
                      : 'bg-beige-light text-textGray hover:bg-beige hover:text-slate'
                  }`}
                >
                  <Bell className="w-5 h-5"/> Notifications
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full px-5 py-4 rounded-xl text-left font-bold transition-all flex items-center gap-3 ${
                    activeTab === 'security'
                      ? 'bg-slate text-white shadow-md translate-x-2'
                      : 'bg-beige-light text-textGray hover:bg-beige hover:text-slate'
                  }`}
                >
                  <Shield className="w-5 h-5"/> Security & Privacy
                </button>
              </div>

              {/* Logout */}
              <div className="mt-8 pt-6 border-t border-beige-dark">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-between px-5 py-4 rounded-xl text-left font-bold text-red-500 bg-red-50 hover:bg-red-500 hover:text-white transition-colors group"
                >
                  <span>Secure Logout</span>
                  <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="p-8 md:p-12 rounded-[2rem] shadow-lg border-0 bg-white min-h-[600px]">
              <AnimatePresence mode="wait">
                
                {activeTab === 'account' && (
                  <motion.div
                    key="account"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-10 pb-6 border-b border-beige-dark">
                       <h2 className="text-3xl font-bold text-slate">Personal Information</h2>
                       <p className="text-textGray">Update your personal details below.</p>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div className="space-y-6">
                        <Input
                          label="Full Legal Name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your Name"
                        />
                        <Input
                          label="Primary Contact Number"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div className="space-y-6">
                        <Input
                          label="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                        />
                        <Input
                          label="Billing / Home Location"
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          placeholder="City, Country"
                        />
                      </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end pt-6 border-t border-beige-dark">
                      <Button onClick={handleSave} size="lg" className="px-10 shadow-xl shadow-gold/20 hover:-translate-y-1 transition-transform">
                        Save Changes
                      </Button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'notification' && (
                  <motion.div
                    key="notification"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-10 pb-6 border-b border-beige-dark">
                       <h2 className="text-3xl font-bold text-slate">Communication Preferences</h2>
                       <p className="text-textGray">Control what you see and how you receive alerts.</p>
                    </div>

                    <div className="space-y-6">
                      {[
                        { title: 'Price Threshold Alerts', desc: 'Get notified instantly when gold hits your target price points.' },
                        { title: 'Daily Market Summaries', desc: 'A concise morning report of global gold index health.' },
                        { title: 'Breaking News Flashes', desc: 'Important macro-economic events that will swing the gold market.' },
                        { title: 'Weekly Educational Tips', desc: 'Expand your knowledge with bite-sized investing rules.' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-6 bg-beige-light/50 border border-beige-dark rounded-2xl hover:border-gold/30 transition-colors">
                          <div>
                            <h3 className="font-bold text-slate text-lg">{item.title}</h3>
                            <p className="text-sm text-textGray mt-1">
                              {item.desc}
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked={idx < 2} />
                            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gold shadow-inner border border-transparent peer-checked:border-gold-dark"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'security' && (
                  <motion.div
                    key="security"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                     <div className="mb-10 pb-6 border-b border-beige-dark">
                       <h2 className="text-3xl font-bold text-slate">Security & Privacy</h2>
                       <p className="text-textGray">Keep your account safe.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center py-12 text-center">
                       <Shield className="w-20 h-20 text-textGray/30 mb-6" />
                       <h3 className="text-xl font-bold text-slate mb-2">Advanced Security Setup</h3>
                       <p className="text-textGray max-w-md">Multi-factor authentication and password updates will be available in the next platform update.</p>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
