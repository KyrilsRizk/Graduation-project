import React, { useState } from 'react';
import { ArrowLeftRight, Calculator, Coins, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const InvestmentCalculators = () => {
  const [activeTab, setActiveTab] = useState('currency');
  
  // Currency State
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  // Gold Calculator State
  const [goldWeight, setGoldWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('ounces');
  const [goldPurity, setGoldPurity] = useState('24K');
  const [goldResult, setGoldResult] = useState(null);

  const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CHF'];
  const exchangeRates = {
    USD: 1, EUR: 0.92, GBP: 0.79, CAD: 1.36, AUD: 1.52, JPY: 149.5, CHF: 0.88,
  };

  const handleConvert = () => {
    if (!amount) return;
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    const converted = (parseFloat(amount) / fromRate) * toRate;
    setResult(converted.toFixed(2));
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
  };

  // Gold Calculation Logic
  const calculateGoldValue = () => {
    if (!goldWeight) return;
    
    // Mock Base Spot Price per Troy Ounce of 24K Gold
    const BASE_OUNCE_PRICE = 2100.50; 

    const weight = parseFloat(goldWeight);
    
    // Convert weight to Troy Ounces
    // 1 Troy Ounce = 31.1034768 grams, 1 Kg = 32.1507466 Troy Ounces
    let weightInOunces = weight;
    if (weightUnit === 'grams') {
      weightInOunces = weight / 31.1034768;
    } else if (weightUnit === 'kilograms') {
      weightInOunces = weight * 32.1507466;
    }

    // Adjust for purity
    // Karat / 24 = Purity %
    let purityMultiplier = 1;
    if (goldPurity === '22K') purityMultiplier = 22 / 24;
    else if (goldPurity === '21K') purityMultiplier = 21 / 24;
    else if (goldPurity === '18K') purityMultiplier = 18 / 24;
    else if (goldPurity === '14K') purityMultiplier = 14 / 24;

    const finalValue = weightInOunces * BASE_OUNCE_PRICE * purityMultiplier;
    setGoldResult(finalValue.toFixed(2));
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-beige py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-slate mb-4">
            Investment <span className="text-gold">Calculators</span>
          </h1>
          <p className="text-lg text-textGray max-w-2xl mx-auto">
            Utilize our advanced calculation tools to seamlessly convert currencies and evaluate your gold portfolio's true holding value in real-time.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center space-x-4 mb-10"
        >
          <button
            onClick={() => setActiveTab('gold')}
            className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'gold'
                ? 'bg-gold text-white shadow-lg shadow-gold/30 -translate-y-1'
                : 'bg-beige-light text-textGray hover:bg-gold hover:text-white'
            }`}
          >
            <Coins className="w-5 h-5"/> Gold Calculator
          </button>
          <button
            onClick={() => setActiveTab('currency')}
            className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'currency'
                ? 'bg-gold text-white shadow-lg shadow-gold/30 -translate-y-1'
                : 'bg-beige-light text-textGray hover:bg-gold hover:text-white'
            }`}
          >
            <TrendingUp className="w-5 h-5"/> Currency Converter
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Currency Converter */}
          {activeTab === 'currency' && (
            <motion.div
              key="currency"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="max-w-3xl mx-auto p-8 rounded-3xl shadow-xl border-0 bg-white">
                <div className="flex items-center space-x-4 mb-8 bg-beige-light p-4 rounded-2xl">
                  <div className="bg-gold p-3 rounded-xl shadow-md">
                    <ArrowLeftRight className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate">Currency Converter</h2>
                    <p className="text-sm text-textGray">Live mid-market exchange rates</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* From */}
                  <div className="bg-beige-light/50 p-4 rounded-2xl border border-beige-dark/50 hover:border-gold/30 transition-colors">
                    <label className="block text-sm font-bold text-slate mb-3 uppercase tracking-wider">
                      From
                    </label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-semibold text-slate shadow-sm"
                    >
                      {currencies.map((curr) => (
                        <option key={curr} value={curr}>{curr}</option>
                      ))}
                    </select>
                  </div>

                  {/* To */}
                  <div className="bg-beige-light/50 p-4 rounded-2xl border border-beige-dark/50 hover:border-gold/30 transition-colors">
                    <label className="block text-sm font-bold text-slate mb-3 uppercase tracking-wider">
                      To
                    </label>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-semibold text-slate shadow-sm"
                    >
                      {currencies.map((curr) => (
                        <option key={curr} value={curr}>{curr}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Amount */}
                <div className="mb-8 bg-beige-light/50 p-4 rounded-2xl border border-beige-dark/50">
                  <Input
                    type="number"
                    label="Amount to convert"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                {/* Convert Button */}
                <div className="flex justify-center space-x-4 mb-8">
                  <Button onClick={handleConvert} size="lg" className="flex-1 py-4 text-lg shadow-lg shadow-gold/20 hover:-translate-y-1 transition-all">
                    Calculate Conversion
                  </Button>
                  <button
                    onClick={handleSwap}
                    className="p-4 bg-white hover:bg-beige-light border-2 border-beige-dark rounded-xl transition-all hover:scale-105 active:scale-95"
                    title="Swap Currencies"
                  >
                    <ArrowLeftRight className="w-6 h-6 text-slate" />
                  </button>
                </div>

                {/* Result */}
                <AnimatePresence>
                  {result && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gradient-to-br from-beige-light to-white border border-gold/20 p-8 rounded-2xl text-center shadow-inner"
                    >
                      <p className="text-sm font-bold text-textGray mb-2 uppercase tracking-widest">Conversion Result</p>
                      <p className="text-4xl md:text-5xl font-black text-slate">
                        {result} <span className="text-gold text-3xl">{toCurrency}</span>
                      </p>
                      <p className="text-xs text-textGray mt-3">Indicative rates only. Actual execution rates may vary.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          )}

          {/* Gold Calculator */}
          {activeTab === 'gold' && (
            <motion.div
              key="gold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="max-w-3xl mx-auto p-8 rounded-3xl shadow-xl border-0 bg-white">
                <div className="flex items-center space-x-4 mb-8 bg-beige-light p-4 rounded-2xl">
                  <div className="bg-gold p-3 rounded-xl shadow-md">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate">Gold Calculator Engine</h2>
                    <p className="text-sm text-textGray">Evaluate your holdings based on live spot metrics</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Weight Unit */}
                  <div className="bg-beige-light/50 p-4 rounded-2xl border border-beige-dark/50 hover:border-gold/30 transition-colors">
                    <label className="block text-sm font-bold text-slate mb-3 uppercase tracking-wider">
                      Measurement Unit
                    </label>
                    <select
                      value={weightUnit}
                      onChange={(e) => setWeightUnit(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-semibold text-slate shadow-sm"
                    >
                      <option value="ounces">Troy Ounces (oz)</option>
                      <option value="grams">Grams (g)</option>
                      <option value="kilograms">Kilograms (kg)</option>
                    </select>
                  </div>

                  {/* Purity */}
                  <div className="bg-beige-light/50 p-4 rounded-2xl border border-beige-dark/50 hover:border-gold/30 transition-colors">
                    <label className="block text-sm font-bold text-slate mb-3 uppercase tracking-wider">
                      Gold Purity (Karat)
                    </label>
                    <select
                      value={goldPurity}
                      onChange={(e) => setGoldPurity(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-semibold text-slate shadow-sm"
                    >
                      <option value="24K">24 Karat (99.9%)</option>
                      <option value="22K">22 Karat (91.6%)</option>
                      <option value="21K">21 Karat (87.5%)</option>
                      <option value="18K">18 Karat (75.0%)</option>
                      <option value="14K">14 Karat (58.3%)</option>
                    </select>
                  </div>
                </div>

                {/* Weight Amount */}
                <div className="mb-8 bg-beige-light/50 p-4 rounded-2xl border border-beige-dark/50">
                  <Input
                    type="number"
                    label={`Weight in ${weightUnit}`}
                    placeholder={`e.g. 5.5`}
                    value={goldWeight}
                    onChange={(e) => setGoldWeight(e.target.value)}
                  />
                </div>

                {/* Calculate Button */}
                <div className="flex justify-center mb-8">
                  <Button onClick={calculateGoldValue} size="lg" className="w-full py-4 text-lg shadow-lg shadow-gold/20 hover:-translate-y-1 transition-all">
                    Determine Value
                  </Button>
                </div>

                {/* Result */}
                <AnimatePresence>
                  {goldResult && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gradient-to-br from-beige-light to-white border border-gold/20 p-8 rounded-2xl text-center shadow-inner relative overflow-hidden"
                    >
                      <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
                        <Coins className="w-64 h-64 text-gold"/>
                      </div>
                      <p className="text-sm font-bold text-textGray mb-2 uppercase tracking-widest relative z-10">Estimated Market Value</p>
                      <p className="text-4xl md:text-5xl font-black text-slate relative z-10">
                        <span className="text-gold text-3xl">$</span>{goldResult} <span className="text-gold text-2xl">USD</span>
                      </p>
                      <p className="text-xs text-textGray mt-3 relative z-10">Based on a live spot index rate of $2100.50/oz (24K).</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InvestmentCalculators;
