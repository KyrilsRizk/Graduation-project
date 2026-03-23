import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, ResponsiveContainer, Cell
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const initialChartData = [
  { name: '1H', uv: 4000 },
  { name: '4H', uv: 3000 },
  { name: '1D', uv: 2000 },
  { name: '1W', uv: 2780 },
  { name: '1M', uv: 5890, peak: true },
  { name: '3M', uv: 2390 },
  { name: '1Y', uv: 3490 },
];

const AdminDashboard = () => {
  const [liveChartData, setLiveChartData] = useState(initialChartData);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simulate Live updating chart data
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveChartData(prevData => {
        const newData = [...prevData];
        // Fluctuate the last bar (1Y) and the peak bar (1M) slightly to look "live"
        newData[4] = { ...newData[4], uv: 5890 + Math.floor(Math.random() * 400 - 200) };
        newData[6] = { ...newData[6], uv: 3490 + Math.floor(Math.random() * 300 - 150) };
        return newData;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  const SidebarContent = () => (
    <>
      <div className="px-8 mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-amber-500 uppercase tracking-widest font-headline">Sovereign AI</h1>
          <p className="text-slate-500 text-xs font-headline tracking-tight font-medium uppercase mt-1">Gold Intelligence</p>
        </div>
        <button 
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <nav className="flex-1 space-y-1 px-4">
        <a className="flex items-center gap-4 px-4 py-3 rounded text-amber-400 font-bold border-r-4 border-amber-500 bg-slate-800/50 transition-all duration-200" href="#">
          <span className="material-symbols-outlined shrink-0" data-icon="dashboard">dashboard</span>
          <span className="font-headline tracking-tight font-medium">Dashboard</span>
        </a>
        <a className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 transition-all duration-200" href="#">
          <span class="material-symbols-outlined shrink-0" data-icon="monitoring">monitoring</span>
          <span className="font-headline tracking-tight font-medium">Analytics</span>
        </a>
        <a className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 transition-all duration-200" href="#">
          <span className="material-symbols-outlined shrink-0" data-icon="group">group</span>
          <span className="font-headline tracking-tight font-medium">User Management</span>
        </a>
        <a className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 transition-all duration-200" href="#">
          <span className="material-symbols-outlined shrink-0" data-icon="settings">settings</span>
          <span className="font-headline tracking-tight font-medium">Model Settings</span>
        </a>
        <a className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 transition-all duration-200" href="#">
          <span className="material-symbols-outlined shrink-0" data-icon="notifications">notifications</span>
          <span className="font-headline tracking-tight font-medium">Notifications</span>
        </a>
      </nav>
      <div className="mt-auto px-8 pt-6 border-t border-slate-800 pb-6 shrink-0">
        <div className="flex items-center gap-3">
          <img alt="Admin User Avatar" className="w-10 h-10 rounded-full border border-slate-700 shrink-0 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHzGYcb3UKXhoZs2H3huCI-FSDLr3_pPc6lHP2hf3tVA8woo8zP0-CJbdi7AKSaSfQS3U9-7vvNUBlIM359at_J9cYcM5_fdgLzBcC1n6bBCIQPLh-i1ftAE0DQh07hmOpEvzJ3ensk8Zx1xfuXuqT6tpIf2cnreY6KWI-ZZxYLhFhJ6Yxht1zMkt5pV-FMvFht5V-iLRzsVFgPp77JOuALaulDV45PJrXyQMnJu2XQ7ovkovP_MUQcETt71m9FQyq96j3cPHKK9M"/>
          <div className="min-w-0">
            <p className="text-slate-200 text-sm font-bold truncate">Admin User</p>
            <p className="text-slate-500 text-xs truncate">Lead Analyst</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-surface font-body text-on-surface flex min-h-screen relative overflow-hidden">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex bg-slate-900 dark:bg-black w-64 flex-col h-screen py-6 shadow-[20px_0_40px_-15px_rgba(0,0,0,0.3)] sticky top-0 z-50 shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar (Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-72 bg-slate-900 flex flex-col py-6 shadow-2xl z-50 md:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-4 md:px-8 h-20 shrink-0 sticky top-0 z-40 bg-slate-50/80 backdrop-blur-xl border-b border-surface-container-high transition-all">
          <div className="flex items-center gap-4 md:gap-6 w-full md:w-1/2">
            <button 
              className="md:hidden text-slate-500 hover:text-amber-500"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full max-w-md hidden sm:block group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input className="w-full bg-surface-container-highest border-none rounded py-2.5 pl-10 pr-4 text-sm font-headline focus:ring-2 focus:ring-amber-500/20 transition-all duration-200 outline-none" placeholder="Search global markets..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-8 shrink-0">
            <div className="hidden sm:flex items-center gap-3">
              <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></motion.span>
              <span className="font-headline text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">System Online</span>
            </div>
            <div className="bg-primary-container/10 px-3 py-1.5 md:px-4 md:py-2 rounded">
              <span className="text-amber-600 font-headline font-extrabold tracking-tight text-xs md:text-base whitespace-nowrap">Live: $2,154.20</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-slate-500 pl-4 border-l border-surface-container-high">
              <button className="material-symbols-outlined hover:text-amber-500 transition-colors">account_circle</button>
              <button className="material-symbols-outlined hover:text-amber-500 transition-colors">settings</button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 w-full scroll-smooth">
          <AnimatePresence mode="wait">
            <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-[1600px] mx-auto space-y-8 pb-10">
              
              {/* Mobile Search */}
              <div className="sm:hidden relative w-full group mb-4">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                <input className="w-full bg-surface-container-highest border-none rounded py-3 md:py-2.5 pl-10 pr-4 text-sm font-headline focus:ring-2 focus:ring-amber-500/20 transition-all duration-200 outline-none" placeholder="Search markets..." type="text"/>
              </div>

              {/* KPI Section */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <motion.div variants={fadeUp} whileHover={{ y: -4, boxShadow: '0 20px 40px -5px rgba(26,28,30,0.1)' }} className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_40px_-5px_rgba(26,28,30,0.06)] flex flex-col justify-between transition-shadow cursor-pointer min-h-[160px]">
                  <div>
                    <p className="text-[10px] md:text-xs font-label font-medium uppercase tracking-widest text-secondary mb-1">Prediction Accuracy</p>
                    <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface tracking-tighter">94.2<span className="text-primary text-xl md:text-2xl ml-1">%</span></h2>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-emerald-600 font-semibold text-xs md:text-sm">
                    <span className="material-symbols-outlined text-sm shrink-0">trending_up</span>
                    <span className="truncate">+1.2% this month</span>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} whileHover={{ y: -4, boxShadow: '0 20px 40px -5px rgba(26,28,30,0.1)' }} className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_40px_-5px_rgba(26,28,30,0.06)] flex flex-col justify-between transition-shadow cursor-pointer min-h-[160px]">
                  <div>
                    <p className="text-[10px] md:text-xs font-label font-medium uppercase tracking-widest text-secondary mb-1">Total Active Users</p>
                    <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface tracking-tighter">12.4<span className="text-primary text-xl md:text-2xl ml-1">k</span></h2>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-slate-500 font-medium text-xs md:text-sm">
                    <span className="material-symbols-outlined text-sm shrink-0">groups</span>
                    <span className="truncate">Verified Accounts</span>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} whileHover={{ y: -4, boxShadow: '0 20px 40px -5px rgba(26,28,30,0.1)' }} className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_40px_-5px_rgba(26,28,30,0.06)] flex flex-col justify-between transition-shadow cursor-pointer min-h-[160px]">
                  <div>
                    <p className="text-[10px] md:text-xs font-label font-medium uppercase tracking-widest text-secondary mb-1">Active Predictions</p>
                    <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface tracking-tighter">03</h2>
                  </div>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 px-2 py-1 md:px-3 text-[9px] md:text-[10px] bg-amber-100 text-amber-700 font-bold rounded uppercase tracking-wider">High Confidence</span>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} whileHover={{ y: -4, boxShadow: '0 20px 40px -5px rgba(26,28,30,0.1)' }} className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_40px_-5px_rgba(26,28,30,0.06)] flex flex-col justify-between transition-shadow cursor-pointer min-h-[160px]">
                  <div>
                    <p className="text-[10px] md:text-xs font-label font-medium uppercase tracking-widest text-secondary mb-1">24h Volume</p>
                    <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface tracking-tighter"><span className="text-primary text-xl md:text-2xl mr-1">$</span>2.1<span className="text-primary text-xl md:text-2xl ml-1">B</span></h2>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-emerald-600 font-semibold text-xs md:text-sm">
                    <span className="material-symbols-outlined text-sm shrink-0">arrow_upward</span>
                    <span className="truncate">14% Daily Growth</span>
                  </div>
                </motion.div>
              </section>

              {/* Main Interactive Section (Asymmetric) */}
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                
                {/* Central Chart & Table (Left Column) */}
                <div className="lg:col-span-2 space-y-6 min-w-0">
                  
                  {/* Chart Card */}
                  <motion.div variants={fadeUp} className="bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_-5px_rgba(26,28,30,0.06)] overflow-hidden">
                    <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-surface-container-low">
                      <div>
                        <h3 className="text-lg md:text-xl font-headline font-bold text-on-surface">Gold Price Projection (XAU/USD)</h3>
                        <p className="text-xs md:text-sm text-secondary">Neural Network Analysis v4.2</p>
                      </div>
                      <div className="flex bg-surface-container-low p-1 rounded-md self-stretch sm:self-auto overflow-x-auto">
                        {['1H', '4H', '1D', '1W'].map((t) => (
                          <button key={t} className={`px-4 py-1.5 text-xs font-bold rounded-sm whitespace-nowrap transition-all ${t === '1D' ? 'bg-gradient-to-br from-primary to-primary-container text-white shadow-sm' : 'bg-transparent text-secondary hover:text-on-surface'}`}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="h-64 md:h-96 w-full relative bg-slate-50/50 p-4 pt-10">
                      {/* Integrated Live Recharts */}
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={liveChartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                          <Bar dataKey="uv" radius={[4, 4, 0, 0]}>
                            {liveChartData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                className="transition-all duration-500 ease-out"
                                fill={entry.peak ? '#facc15' : '#e2e8f0'} 
                                fillOpacity={entry.peak ? 0.7 : 1}
                                stroke={entry.peak ? '#f59e0b' : 'transparent'}
                                strokeWidth={entry.peak ? 2 : 0}
                                style={{ filter: entry.peak ? 'drop-shadow(0 -10px 20px rgba(212,175,55,0.4))' : 'none' }}
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>

                      {/* Floating Glassmorphism Peak Card */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, type: 'spring' }}
                        className="absolute top-[10%] right-[10%] bg-white/70 backdrop-blur-xl p-3 md:p-4 rounded-lg shadow-xl border border-white/40 z-10 pointer-events-none"
                      >
                        <p className="text-[9px] md:text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">AI Prediction Peak</p>
                        <p className="text-base md:text-lg font-headline font-extrabold text-primary">$2,198.40</p>
                        <p className="text-[9px] md:text-[10px] text-emerald-600 font-bold">Confidence: 92%</p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Recent Predictions Table */}
                  <motion.div variants={fadeUp} className="bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_-5px_rgba(26,28,30,0.06)] p-6 md:p-8 overflow-hidden">
                    <h3 className="text-lg md:text-xl font-headline font-bold text-on-surface mb-6">Recent Prediction Ledger</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left min-w-[600px]">
                        <thead>
                          <tr className="border-b border-surface-container-low">
                            <th className="pb-4 text-[9px] md:text-[10px] font-label font-bold uppercase tracking-widest text-secondary">Signal</th>
                            <th className="pb-4 text-[9px] md:text-[10px] font-label font-bold uppercase tracking-widest text-secondary">Timestamp</th>
                            <th className="pb-4 text-[9px] md:text-[10px] font-label font-bold uppercase tracking-widest text-secondary">Target Price</th>
                            <th className="pb-4 text-[9px] md:text-[10px] font-label font-bold uppercase tracking-widest text-secondary">Confidence</th>
                            <th className="pb-4 pr-2 text-[9px] md:text-[10px] font-label font-bold uppercase tracking-widest text-secondary text-right">Result</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container-low">
                          <tr className="group hover:bg-surface-container-low/50 transition-colors cursor-pointer">
                            <td className="py-4">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-emerald-500" data-icon="trending_up">trending_up</span>
                                <span className="text-xs md:text-sm font-bold text-on-surface">Bullish Breakout</span>
                              </div>
                            </td>
                            <td className="py-4 text-[11px] md:text-sm text-slate-500">14:22:10 UTC</td>
                            <td className="py-4 text-xs md:text-sm font-headline font-bold text-on-surface">$2,165.50</td>
                            <td className="py-4">
                              <div className="w-20 md:w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: '94%' }} transition={{ duration: 1 }} className="h-full bg-amber-500"></motion.div>
                              </div>
                            </td>
                            <td className="py-4 text-right pr-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[9px] md:text-[10px] font-bold rounded uppercase whitespace-nowrap">In Progress</span>
                            </td>
                          </tr>
                          <tr className="group hover:bg-surface-container-low/50 transition-colors cursor-pointer">
                            <td className="py-4">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-error" data-icon="trending_down">trending_down</span>
                                <span className="text-xs md:text-sm font-bold text-on-surface">Support Retest</span>
                              </div>
                            </td>
                            <td className="py-4 text-[11px] md:text-sm text-slate-500">10:45:00 UTC</td>
                            <td className="py-4 text-xs md:text-sm font-headline font-bold text-on-surface">$2,142.10</td>
                            <td className="py-4">
                              <div className="w-20 md:w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: '88%' }} transition={{ duration: 1 }} className="h-full bg-amber-500"></motion.div>
                              </div>
                            </td>
                            <td className="py-4 text-right pr-2">
                              <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[9px] md:text-[10px] font-bold rounded uppercase whitespace-nowrap">Successful</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                </div>

                {/* Right Sidebar Widgets */}
                <div className="space-y-6 lg:space-y-8 min-w-0">
                  
                  {/* System Health Widget */}
                  <motion.div variants={fadeUp} className="bg-inverse-surface p-6 md:p-8 rounded-xl shadow-2xl text-white">
                    <h3 className="text-base md:text-lg font-headline font-bold mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-amber-500" data-icon="terminal">terminal</span>
                      System Health
                    </h3>
                    <div className="space-y-6 lg:space-y-8">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-xs md:text-sm font-medium">AI Model Cluster</span>
                        <span className="text-[10px] md:text-xs font-bold text-emerald-400 flex items-center gap-1">
                          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_5px_rgba(52,211,153,0.8)]"></motion.span>
                          ONLINE
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-xs md:text-sm font-medium">Real-time Feed</span>
                        <span className="text-[10px] md:text-xs font-bold text-emerald-400 flex items-center gap-1">
                          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_5px_rgba(52,211,153,0.8)]"></motion.span>
                          ACTIVE
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-xs md:text-sm font-medium">Model Latency</span>
                        <span className="text-xs font-bold text-amber-400">142ms</span>
                      </div>
                      <div className="pt-4 border-t border-slate-700">
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 rounded bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-bold text-xs md:text-sm transition-shadow hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                        >
                          Recalibrate Model
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>

                  {/* AI Insight Chips Section */}
                  <motion.div variants={fadeUp} className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-[0_12px_40px_-5px_rgba(26,28,30,0.06)]">
                    <h3 className="text-[10px] md:text-xs font-label font-bold uppercase tracking-widest text-secondary mb-6">Market Sentiment</h3>
                    <div className="space-y-4">
                      <motion.div whileHover={{ y: -2 }} className="p-4 rounded-lg bg-tertiary-container/10 border border-tertiary/10 transition-transform cursor-pointer">
                        <p className="text-tertiary font-bold text-xs md:text-sm mb-1">Federal Reserve Impact</p>
                        <p className="text-[11px] md:text-xs text-on-surface-variant leading-relaxed">High probability of interest rate stabilization increasing gold appeal.</p>
                      </motion.div>
                      <motion.div whileHover={{ y: -2 }} className="p-4 rounded-lg bg-tertiary-container/10 border border-tertiary/10 transition-transform cursor-pointer">
                        <p className="text-tertiary font-bold text-xs md:text-sm mb-1">Geopolitical Signal</p>
                        <p className="text-[11px] md:text-xs text-on-surface-variant leading-relaxed">Rising tensions in trade corridors favoring safe-haven assets.</p>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="p-4 rounded-lg bg-amber-50 border border-amber-200 mt-6 relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-16 h-16 bg-amber-200/40 rounded-full blur-xl filter -translate-y-1/2 translate-x-1/4"></div>
                        <p className="text-primary font-bold text-xs md:text-sm mb-1 relative z-10">AI Recommendation</p>
                        <p className="text-[11px] md:text-xs text-on-surface-variant leading-relaxed font-semibold relative z-10">Maintain Long positions. TP: $2,185. SL: $2,130.</p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Activity Feed (Minimalist) */}
                  <motion.div variants={fadeUp} className="px-2 pb-6">
                    <h4 className="text-[9px] md:text-[10px] font-label font-bold uppercase tracking-widest text-secondary mb-4">Live Activity</h4>
                    <div className="space-y-5">
                      <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0 shadow-[0_0_5px_rgba(245,158,11,0.6)]"></div>
                        <div>
                          <p className="text-[11px] md:text-xs text-on-surface-variant leading-relaxed"><span className="font-bold text-on-surface">Predictor-X</span> generated a new Gold short-term signal.</p>
                          <p className="text-[9px] md:text-[10px] text-slate-400 mt-1">2 minutes ago</p>
                        </div>
                      </motion.div>
                      <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>
                        <div>
                          <p className="text-[11px] md:text-xs text-on-surface-variant leading-relaxed"><span className="font-bold text-on-surface">System</span> data backup completed successfully.</p>
                          <p className="text-[9px] md:text-[10px] text-slate-400 mt-1">14 minutes ago</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                </div>
              </section>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
