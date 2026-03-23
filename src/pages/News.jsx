import React, { useState } from 'react';
import { Newspaper, BarChart3, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/common/Card';
import { newsArticles, analysisArticles, educationalArticles } from '../data/mockData';

const News = () => {
  const [activeTab, setActiveTab] = useState('news');

  const tabContent = {
    news: newsArticles,
    analysis: analysisArticles,
    educational: educationalArticles,
  };

  const tabs = [
    { id: 'news', label: 'News', icon: Newspaper, desc: 'Latest market updates' },
    { id: 'analysis', label: 'Analysis', icon: BarChart3, desc: 'Expert market sweeps' },
    { id: 'educational', label: 'Educational', icon: BookOpen, desc: 'Learn the fundamentals' },
  ];

  const articles = tabContent[activeTab];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerList = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-beige py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-12"
        >
          <div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-6 border border-beige-dark">
             <Newspaper className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate mb-4">
            Market Insights & <span className="text-gold">Intelligence</span>
          </h1>
          <p className="text-lg text-textGray max-w-2xl mx-auto leading-relaxed">
            Stay ahead of the curve with real-time updates, expert technical analysis, and foundational educational resources tailored for intelligent investors.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 md:p-6 rounded-2xl font-medium transition-all flex flex-col items-center justify-center space-y-3 ${
                  isActive
                    ? 'bg-gold text-white shadow-xl shadow-gold/20 -translate-y-1'
                    : 'bg-white text-textGray hover:bg-beige-light border border-transparent hover:border-gold/30'
                }`}
              >
                <div className={`p-3 rounded-full ${isActive ? 'bg-white/20' : 'bg-beige-light'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <span className={`block font-bold text-lg ${isActive ? 'text-white' : 'text-slate'}`}>{tab.label}</span>
                  <span className={`text-sm ${isActive ? 'text-white/80' : 'text-textGray'}`}>{tab.desc}</span>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            variants={staggerList}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 gap-8"
          >
            {articles.map((article) => (
              <motion.div variants={slideIn} key={article.id}>
                <Card className="overflow-hidden p-0 rounded-3xl group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image */}
                    <div className="md:w-2/5 overflow-hidden relative">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="h-64 md:h-full w-full"
                      >
                        <img
                          src={
                            article.category === 'News'
                              ? 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=400&fit=crop'
                              : article.category === 'Analysis'
                              ? 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop'
                              : 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop'
                          }
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate/80 to-transparent md:hidden pointer-events-none"></div>
                      
                      {article.featured && (
                        <div className="absolute top-4 left-4 bg-gold text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                              article.category === 'News'
                                ? 'bg-blue-100 text-blue-800'
                                : article.category === 'Analysis'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {article.category}
                          </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate mb-4 leading-tight group-hover:text-gold transition-colors">
                          {article.title}
                        </h2>

                        <p className="text-textGray text-lg mb-6 leading-relaxed line-clamp-3">
                          {article.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-beige-dark pt-6 mt-4">
                        <div className="flex items-center space-x-3 text-sm font-semibold text-textGray">
                          <span className="text-slate">{article.source}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                          <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {article.time}</span>
                        </div>
                        <button className="flex items-center space-x-2 text-gold hover:text-gold-dark font-bold transition-colors group/btn">
                          <span>Read</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default News;
