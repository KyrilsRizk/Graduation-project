import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import {
  predictionData24H,
  predictionData1W,
  predictionData1M,
  predictionData1Y,
  forecastTable24H,
  forecastTable1W,
  forecastTable1M,
  forecastTable1Y,
} from '../data/mockData';

const AIPrediction = () => {
  const [period, setPeriod] = useState('next 24 hours');
  const [purity, setPurity] = useState('18K');
  const [showPrediction, setShowPrediction] = useState(false);

  const periods = ['next 24 hours', 'next week', 'next month', 'next year'];
  const purities = ['18K', '21K', '22K', '24K'];

  const dataMap = {
    'next 24 hours': { chart: predictionData24H, table: forecastTable24H, label: '24H', tableKey: 'time' },
    'next week': { chart: predictionData1W, table: forecastTable1W, label: '1W', tableKey: 'day' },
    'next month': { chart: predictionData1M, table: forecastTable1M, label: '1M', tableKey: 'date' },
    'next year': { chart: predictionData1Y, table: forecastTable1Y, label: '1Y', tableKey: 'month' },
  };

  const xAxisKey = {
    'next 24 hours': 'time',
    'next week': 'day',
    'next month': 'date',
    'next year': 'month',
  };

  const handleGenerate = () => {
    setShowPrediction(true);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-beige py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!showPrediction ? (
            /* Configuration Page */
            <motion.div
              key="config"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="max-w-4xl mx-auto p-12 rounded-[2rem] shadow-lg border border-white">
                <motion.div variants={fadeUp} initial="hidden" animate="visible">
                  <h1 className="text-4xl font-bold text-slate text-center mb-4">
                    AI-Powered <span className="text-gold">Prediction Engine</span>
                  </h1>
                  <p className="text-center text-textGray text-lg mb-12 max-w-2xl mx-auto">
                    Configure your parameters and deploy our neural network to forecast future gold prices with high statistical confidence.
                  </p>
                </motion.div>

                {/* Choose Prediction Period */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="mb-10">
                  <h2 className="text-xl font-bold text-slate mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-gold"/> Choose Prediction Period
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {periods.map((p) => (
                      <button
                        key={p}
                        onClick={() => setPeriod(p)}
                        className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                          period === p
                            ? 'bg-gold text-white shadow-lg shadow-gold/30 -translate-y-1'
                            : 'bg-beige-light text-textGray border border-beige-dark hover:border-gold hover:text-gold'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Choose Gold Purity */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mb-12">
                  <h2 className="text-xl font-bold text-slate mb-4 flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-gold"/> Choose Gold Purity
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {purities.map((pur) => (
                      <button
                        key={pur}
                        onClick={() => setPurity(pur)}
                        className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                          purity === pur
                            ? 'bg-slate text-white shadow-lg shadow-slate/30 -translate-y-1'
                            : 'bg-beige-light text-textGray border border-beige-dark hover:border-slate hover:text-slate'
                        }`}
                      >
                        {pur}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Advanced AI Model Badge */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                  <div className="flex items-center justify-between bg-gradient-to-r from-beige-light to-white p-6 rounded-2xl mb-10 border border-gold/20 shadow-sm">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate text-lg">Advanced Neural Network Active</h3>
                        <p className="text-sm text-textGray">
                          Analyzing 20+ years of macros, inflation rates, and geopolitical occurrences.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Generate Button */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="flex justify-center">
                  <Button size="lg" onClick={handleGenerate} className="flex items-center space-x-3 px-10 py-4 text-lg shadow-xl shadow-gold/20 hover:-translate-y-1 transition-all">
                    <TrendingUp className="w-6 h-6" />
                    <span>Generate Forecast</span>
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ) : (
            /* Prediction Results */
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-slate">AI Forecast Results</h1>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="px-5 py-2 bg-gold text-white rounded-full font-bold shadow-md">
                    {purity} - {dataMap[period].label}
                  </span>
                  <Button variant="outline" onClick={() => setShowPrediction(false)} className="hover:bg-slate hover:text-white hover:border-slate transition-colors">
                    Configure New Prediction
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart */}
                <Card className="lg:col-span-2 p-8 rounded-3xl shadow-md border-0">
                  <ResponsiveContainer width="100%" height={450}>
                    <LineChart data={dataMap[period].chart} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" vertical={false} />
                      <XAxis
                        dataKey={xAxisKey[period]}
                        stroke="#626670"
                        tick={{ fill: '#626670', fontSize: 13 }}
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                      />
                      <YAxis
                        stroke="#626670"
                        tick={{ fill: '#626670', fontSize: 13 }}
                        domain={['dataMin - 50', 'dataMax + 50']}
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
                        formatter={(value) => `$${value}`}
                      />
                      <Legend wrapperStyle={{ paddingTop: '20px' }} />
                      <Line
                        type="monotone"
                        dataKey="real"
                        stroke="#4A5F6D"
                        strokeWidth={3}
                        name="Historical Data"
                        dot={{ fill: '#4A5F6D', r: 4, strokeWidth: 2, stroke: '#fff' }}
                        activeDot={{ r: 8, strokeWidth: 0 }}
                        connectNulls={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="prediction"
                        stroke="#C9A961"
                        strokeWidth={3}
                        strokeDasharray="6 6"
                        name="AI Trajectory"
                        dot={{ fill: '#C9A961', r: 4, strokeWidth: 2, stroke: '#fff' }}
                        activeDot={{ r: 8, strokeWidth: 0 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>

                {/* Forecast Table */}
                <Card className="p-8 rounded-3xl shadow-md border-0 bg-gradient-to-b from-white to-beige-light">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-gold"/>
                    </div>
                    <h2 className="text-xl font-bold text-slate">
                      {period === 'next 24 hours' ? '24H Trajectory' :
                       period === 'next week' ? '7-Day Forecast' :
                       period === 'next month' ? '30-Day Outlook' : 'Annual Projection'}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {dataMap[period].table.map((row, index) => (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={index}
                        className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-beige-dark/50"
                      >
                        <span className="text-textGray font-semibold">
                          {row[dataMap[period].tableKey]}
                        </span>
                        <span className="text-slate font-black text-lg">{row.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIPrediction;
