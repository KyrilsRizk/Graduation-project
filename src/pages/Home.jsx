import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { LineChart, Shield, Zap, TrendingUp, BarChart3, Clock } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-beige overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: "0px" }}
              animate={{ opacity: 1, letterSpacing: "8px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-slate text-2xl md:text-3xl font-black uppercase mb-1 ml-1"
            >
              Welcome To
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <motion.h1 
                className="text-6xl md:text-[5.5rem] leading-[1.1] font-extrabold tracking-tighter bg-gradient-to-r from-gold-dark via-gold-light to-gold bg-clip-text text-transparent pb-2"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                AI GOLD PRICE<br/>PREDICTION
              </motion.h1>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-textGray text-lg md:text-xl leading-relaxed max-w-xl">
              An AI-powered platform that predicts gold prices using historical data, 
              market trends, and economic indicators. Empowering investors with actionable, data-driven insights.
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-6 flex flex-wrap gap-4">
              <Link to="/about-us">
                <Button size="lg" className="shadow-lg shadow-gold/30 hover:shadow-xl hover:-translate-y-1 transition-all">
                  About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center shadow-2xl relative z-10 border-4 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=600&fit=crop"
                  alt="Gold Coin representing wealth and investment"
                  className="w-72 h-72 md:w-88 md:h-88 rounded-full object-cover"
                />
              </motion.div>
              {/* Decorative elements */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-gold-light rounded-full mix-blend-multiply filter blur-2xl opacity-50"
              />
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ repeat: Infinity, duration: 6, delay: 1 }}
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-gold rounded-full mix-blend-multiply filter blur-2xl opacity-40"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24 rounded-t-[3rem] shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-slate text-3xl md:text-5xl font-bold mb-6">
              Smart AI Predictions For <span className="text-gold">Smarter Investment</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-textGray text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Harness the power of machine learning algorithms to predict gold price movements 
              with unprecedented accuracy. Stay ahead of the market curve effortlessly.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="w-8 h-8 text-gold" />,
                title: "Advanced Algorithms",
                desc: "Our AI models analyze decades of historical data, global economic events, and market sentiment to forecast accurate trends."
              },
              {
                icon: <Clock className="w-8 h-8 text-gold" />,
                title: "Real-Time Updates",
                desc: "Get instant price tracking and real-time processing to stay on top of sudden market shifts and macro-economic factors."
              },
              {
                icon: <Shield className="w-8 h-8 text-gold" />,
                title: "Reliable Accuracy",
                desc: "Rigorously backtested against historical crisis events and verified by financial experts for robust reliability you can trust."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-beige-light p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-beige-dark/50"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-gold/10">
                  {feature.icon}
                </div>
                <h3 className="text-slate text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-textGray leading-relaxed text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-24 bg-beige relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-slate text-3xl md:text-5xl font-bold mb-6">
              How The Prediction Engine Works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-textGray text-lg md:text-xl max-w-2xl mx-auto">
              Our proprietary model evaluates multiple financial layers before delivering a high-confidence prediction.
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-dark to-transparent opacity-20 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
              {[
                {
                  step: "01",
                  icon: <BarChart3 className="w-8 h-8 text-white" />,
                  title: "Data Collection",
                  desc: "We aggregate massive datasets from central banks, inflation curves, global currency valuations, and geopolitical news."
                },
                {
                  step: "02",
                  icon: <Zap className="w-8 h-8 text-white" />,
                  title: "AI Processing",
                  desc: "Complex neural networks process the variables to identify subtle, invisible patterns within the chaotic gold market."
                },
                {
                  step: "03",
                  icon: <TrendingUp className="w-8 h-8 text-white" />,
                  title: "Actionable Insights",
                  desc: "You receive highly accurate probability scores and timeline-based price trajectories directly on your dashboard."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6 shadow-xl shadow-gold/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="text-gold-dark font-black tracking-widest text-sm mb-3">STEP {item.step}</div>
                  <h3 className="text-slate text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-textGray text-lg leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
