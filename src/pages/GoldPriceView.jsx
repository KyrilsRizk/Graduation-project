import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RefreshCw, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { goldPrices, currencyRates, chartData1D, chartData1W, chartData1M, chartData1Y } from '../data/mockData';

const GoldPriceView = () => {
  const [timeFrame, setTimeFrame] = useState('1Y');
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const timeFrames = ['1D', '1W', '1M', '1Y'];
  
  const chartDataMap = {
    '1D': chartData1D,
    '1W': chartData1W,
    '1M': chartData1M,
    '1Y': chartData1Y,
  };

  const xAxisKey = {
    '1D': 'time',
    '1W': 'day',
    '1M': 'date',
    '1Y': 'month',
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdate(new Date().toLocaleTimeString());
      setIsRefreshing(false);
    }, 800);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-beige py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Live Prices Section */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4"
          >
            <div>
              <h1 className="text-4xl font-extrabold text-slate mb-2">Live Market Data</h1>
              <p className="text-textGray text-lg">Real-time spot prices and macro-economic factors.</p>
            </div>
            <div className="flex items-center space-x-4 bg-white px-4 py-2 rounded-full shadow-sm border border-beige-dark">
              <span className="text-sm font-medium text-textGray">
                Updated: <span className="text-slate font-bold">{lastUpdate}</span>
              </span>
              <div className="w-px h-6 bg-beige-dark"></div>
              <button
                onClick={handleRefresh}
                className="flex items-center space-x-2 text-gold hover:text-gold-dark transition-colors"
                disabled={isRefreshing}
              >
                <motion.div animate={{ rotate: isRefreshing ? 360 : 0 }} transition={{ repeat: isRefreshing ? Infinity : 0, duration: 1, ease: "linear" }}>
                  <RefreshCw className="w-4 h-4" />
                </motion.div>
                <span className="text-sm font-bold">Refresh</span>
              </button>
            </div>
          </motion.div>

          {/* Gold Prices by Karat */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-gold"/> Gold Spots By Karat
            </h2>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {Object.entries(goldPrices).map(([karat, data]) => (
                <motion.div variants={fadeUp} key={karat}>
                  <Card className="rounded-3xl border border-transparent hover:border-gold/30 hover:shadow-xl transition-all h-full p-6 bg-gradient-to-b from-white to-beige-light">
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-bold tracking-wide">
                          {karat} GOLD
                        </span>
                        <div className="flex items-center space-x-1 bg-white px-2 py-1 rounded-md shadow-sm">
                          {data.change >= 0 ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          )}
                          <span className={`text-sm font-bold ${
                            data.change >= 0 ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {data.change}%
                          </span>
                        </div>
                      </div>
                      <p className="text-4xl font-extrabold text-slate mb-1">
                        ${data.price.toFixed(2)}
                      </p>
                      <span className="text-sm text-textGray font-medium uppercase">USD / Troy Ounce</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Chart Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="chart" 
          className="mb-12"
        >
          <Card className="p-8 rounded-[2rem] shadow-lg border-0 bg-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate mb-1">24K Historical Price Chart</h2>
                <p className="text-textGray text-sm">Analyze historical support and resistance zones.</p>
              </div>
              <div className="flex bg-beige-light p-1 rounded-xl shadow-inner">
                {timeFrames.map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeFrame(tf)}
                    className={`px-6 py-2 rounded-lg font-bold transition-all ${
                      timeFrame === tf
                        ? 'bg-white text-gold shadow-sm'
                        : 'text-textGray hover:text-slate'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="popLayout">
              <motion.div
                key={timeFrame}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%', height: '450px' }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartDataMap[timeFrame]} margin={{ left: -10, right: 10 }}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C9A961" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#C9A961" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis 
                      dataKey={xAxisKey[timeFrame]} 
                      stroke="#888"
                      tick={{ fill: '#888', fontSize: 13 }}
                      axisLine={false}
                      tickLine={false}
                      dy={10}
                    />
                    <YAxis 
                      stroke="#888"
                      tick={{ fill: '#888', fontSize: 13 }}
                      domain={['auto', 'auto']}
                      tickFormatter={(value) => `$${value}`}
                      axisLine={false}
                      tickLine={false}
                      dx={-10}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                        padding: '12px 16px',
                        fontWeight: 'bold',
                      }}
                      formatter={(value) => [`$${value}`, 'Price']}
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#C9A961"
                      strokeWidth={3}
                      dot={{ fill: '#C9A961', r: 4, strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 8, stroke: '#fff', strokeWidth: 2 }}
                      fillOpacity={1}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </AnimatePresence>
          </Card>
        </motion.div>

        {/* Currency Exchange Rates */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-slate mb-6">Major Currency Exchange Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(currencyRates).map(([currency, data], idx) => (
              <motion.div
                key={currency}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="rounded-2xl p-6 border-transparent hover:border-slate/10 transition-colors">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-slate/5 flex items-center justify-center font-bold text-slate">
                        {currency}
                      </div>
                      <div className="flex items-center space-x-1">
                        {data.change >= 0 ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                        <span className={`text-sm font-bold ${
                          data.change >= 0 ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {Math.abs(data.change)}%
                        </span>
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-textGray mb-1 uppercase tracking-wider">
                      {currency === 'GBP' ? 'British Pound' : 
                       currency === 'EUR' ? 'Euro' :
                       currency === 'CAD' ? 'Canadian Dollar' : 'Australian Dollar'}
                    </h3>
                    <p className="text-2xl font-black text-slate">
                      {currency === 'GBP' ? '£' : 
                       currency === 'EUR' ? '€' : 
                       currency === 'CAD' ? 'C$' : 'A$'} {data.rate.toFixed(4)}
                    </p>
                    <span className="text-xs text-textGray mt-1">Relative to 1 USD</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GoldPriceView;
