import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Bell, ShieldAlert, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { priceAlerts as initialAlerts } from '../data/mockData';

const PriceAlerts = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Gold 24K');
  const [targetPrice, setTargetPrice] = useState('');
  const [notifyMethod, setNotifyMethod] = useState('both');

  const goldTypes = ['Gold 24K', 'Gold 22K', 'Gold 21K', 'Gold 18K'];
  const notifyOptions = [
    { value: 'email', label: 'Email Only' },
    { value: 'in-app', label: 'Push Notification' },
    { value: 'both', label: 'Email & Push' },
  ];

  const handleCreateAlert = () => {
    if (!targetPrice) return;

    const newAlert = {
      id: alerts.length + 1,
      type: selectedItem,
      targetPrice: parseFloat(targetPrice),
      currentPrice: 2100.50, // Mock current price
      status: 'active',
      createdDate: new Date().toISOString().split('T')[0],
      notifyVia: notifyMethod,
    };

    setAlerts([...alerts, newAlert]);
    setShowCreateModal(false);
    setTargetPrice('');
  };

  const handleDeleteAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-beige py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="bg-gradient-to-r from-slate to-slate-dark rounded-[2.5rem] p-10 mb-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative icons for background */}
          <div className="absolute -right-10 -top-10 opacity-10">
             <Bell className="w-64 h-64 text-white" />
          </div>
          <div className="absolute left-1/2 bottom-0 opacity-5 transform translate-y-1/3">
             <Zap className="w-48 h-48 text-white" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Price <span className="text-gold">Alerts</span></h1>
              <p className="text-white/80 text-lg max-w-xl">
                Set personalized triggers when gold prices cross your target thresholds. Never miss a buying or selling opportunity again.
              </p>
            </div>
            <Button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center space-x-2 bg-gold hover:bg-gold-light text-slate px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:-translate-y-1 transition-transform border-none"
            >
              <Plus className="w-6 h-6" />
              <span>Create New Alert</span>
            </Button>
          </div>
        </motion.div>

        {/* Active Alerts */}
        <div className="mb-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
            <ShieldAlert className="w-6 h-6 text-slate" />
            <h2 className="text-2xl font-bold text-slate">Your Active Monitors</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {alerts.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-12 bg-white rounded-3xl border border-dashed border-beige-dark">
                  <Bell className="w-16 h-16 text-textGray mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-bold text-slate mb-2">No Active Alerts</p>
                  <p className="text-textGray">Click "Create New Alert" to set up your first price monitor.</p>
                </motion.div>
              )}
              {alerts.map((alert, idx) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="rounded-2xl border border-beige-dark/50 hover:shadow-xl transition-shadow bg-white p-6 relative overflow-hidden group">
                    {/* Status indicator bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light"></div>
                    
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-extrabold text-slate">{alert.type}</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider text-textGray mt-1">Setup: {alert.createdDate}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold uppercase tracking-widest border border-green-200 shadow-sm">
                        {alert.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 bg-beige-light/50 p-4 rounded-xl border border-beige-dark/50">
                      <div>
                        <p className="text-xs font-bold text-textGray mb-1 uppercase tracking-wider">Target Value</p>
                        <p className="text-2xl font-black text-gold">
                          ${alert.targetPrice.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-textGray mb-1 uppercase tracking-wider">Spot Price</p>
                        <p className="text-2xl font-black text-slate">
                          ${alert.currentPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="bg-slate/5 px-3 py-1.5 rounded-lg">
                        <p className="text-xs font-bold text-slate flex items-center gap-2">
                           <Bell className="w-3 h-3 text-gold"/>
                           {alert.notifyVia === 'both' ? 'Mail & Push' : alert.notifyVia === 'email' ? 'Email Only' : 'Push Notification'}
                        </p>
                      </div>

                      <div className="flex space-x-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-beige-light hover:bg-beige rounded-lg transition-colors shadow-sm">
                          <Edit2 className="w-4 h-4 text-slate" />
                        </button>
                        <button
                          onClick={() => handleDeleteAlert(alert.id)}
                          className="p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors shadow-sm"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Create Alert Modal */}
        <AnimatePresence>
          {showCreateModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="w-full max-w-2xl"
              >
                <Card className="rounded-[2rem] shadow-2xl p-8 md:p-10 relative overflow-hidden bg-white border-0">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold to-gold-dark"></div>
                  
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h2 className="text-3xl font-bold text-slate mb-1">Configure Monitor</h2>
                      <p className="text-textGray">Set the parameters for your price alert.</p>
                    </div>
                    <div className="w-12 h-12 bg-beige-light rounded-full flex items-center justify-center">
                      <Bell className="w-6 h-6 text-gold"/>
                    </div>
                  </div>

                  {/* Select Item */}
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-slate mb-3 uppercase tracking-wider">
                      Asset Type
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {goldTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedItem(type)}
                          className={`px-4 py-3 rounded-xl font-bold transition-all shadow-sm ${
                            selectedItem === type
                              ? 'bg-slate text-white shadow-md scale-[1.02]'
                              : 'bg-white text-textGray border border-beige-dark hover:border-slate'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Price */}
                  <div className="mb-8">
                    <Input
                      type="number"
                      label="Target Price Boundary (USD)"
                      placeholder="e.g. 2200.00"
                      value={targetPrice}
                      onChange={(e) => setTargetPrice(e.target.value)}
                    />
                  </div>

                  {/* Notification Method */}
                  <div className="mb-10">
                    <label className="block text-sm font-bold text-slate mb-4 uppercase tracking-wider">
                      Delivery Method
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {notifyOptions.map((option) => (
                         <div 
                           key={option.value}
                           onClick={() => setNotifyMethod(option.value)}
                           className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-colors ${
                              notifyMethod === option.value ? 'bg-beige font-semibold border-gold shadow-sm' : 'bg-white border-beige-dark text-textGray'
                           }`}
                         >
                            <input
                              type="radio"
                              name="notify"
                              value={option.value}
                              checked={notifyMethod === option.value}
                              readOnly
                              className="w-4 h-4 text-gold focus:ring-gold"
                            />
                            <span>{option.label}</span>
                         </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-4 pt-6 border-t border-beige-dark">
                    <Button
                      variant="outline"
                      onClick={() => setShowCreateModal(false)}
                      className="py-4 hover:bg-slate hover:text-white transition-colors"
                    >
                      Cancel Setup
                    </Button>
                    <Button onClick={handleCreateAlert} className="py-4 shadow-lg shadow-gold/20 flex items-center justify-center gap-2">
                      <Plus className="w-5 h-5"/> Initialize Alert
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PriceAlerts;
