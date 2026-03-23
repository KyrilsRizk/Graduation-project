import React from 'react';
import { Users, Target, Shield, Award } from 'lucide-react';
import Card from '../components/common/Card';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/mockData';

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-beige py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp} 
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate mb-6">OUR EXPERT TEAM & MISSION</h1>
          <p className="text-lg md:text-xl text-textGray max-w-3xl mx-auto leading-relaxed">
            Meet the talented professionals, financial analysts, and AI experts behind our revolutionary gold price prediction platform.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {teamMembers.map((member) => (
            <motion.div variants={fadeInUp} key={member.id} whileHover={{ y: -10 }} className="h-full">
              <Card className="text-center h-full flex flex-col items-center p-8 hover:shadow-xl transition-all border border-beige-dark/50 rounded-3xl">
                <div className="w-24 h-24 bg-gradient-to-br from-white to-beige-light rounded-full flex items-center justify-center border-4 border-gold shadow-md mb-6 relative">
                  <Users className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-slate mb-2">{member.name}</h3>
                <p className="text-gold font-semibold mb-4 text-sm tracking-wide uppercase">{member.role}</p>
                <p className="text-sm text-textGray leading-relaxed flex-grow">
                  {member.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
           {[
             { title: "Precision", icon: <Target className="w-8 h-8 text-gold"/>, desc: "Leveraging cutting-edge ML models for maximum prediction accuracy." },
             { title: "Security", icon: <Shield className="w-8 h-8 text-gold"/>, desc: "Providing reliable insights backed by rigorous data testing." },
             { title: "Excellence", icon: <Award className="w-8 h-8 text-gold"/>, desc: "Award-winning advisory board combining tech and finance." }
           ].map((val, i) => (
             <motion.div variants={fadeInUp} key={i}>
                <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-beige-dark/50 hover:border-gold/30 transition-colors h-full">
                  <div className="w-16 h-16 bg-beige rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm">
                    {val.icon}
                  </div>
                  <h4 className="text-slate font-bold text-xl mb-3">{val.title}</h4>
                  <p className="text-textGray">{val.desc}</p>
                </div>
             </motion.div>
           ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-[3rem] p-12 md:p-16 text-center shadow-md relative overflow-hidden"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-light opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">
              Smart AI Predictions For A <span className="text-gold">Smarter Gold Investment</span>
            </h2>
            <p className="text-lg md:text-xl text-textGray max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to predict gold price movements with 
              unprecedented accuracy. Our integrated platform synthesizes historical trends, live spot prices, and advanced analytics to empower your financial future.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
