import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Special admin credentials check
      if (email === 'admin@sovereign.ai' && password === 'admin123') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', 'admin');
        navigate('/admin');
      } else {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', 'user');
        navigate('/'); // Standard users go to home
      }
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-beige flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gold/5 blur-[100px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-slate/5 blur-[120px]"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-white/50"
      >
        {/* Top Header Strip */}
        <div className="h-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light w-full"></div>

        <div className="p-8 sm:p-10">
          
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-textGray hover:text-gold transition-colors text-sm font-semibold mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          {/* Logo & Header */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-10">
            <motion.div variants={itemVariants} className="inline-flex items-center justify-center p-4 bg-beige-light rounded-2xl mb-4 shadow-sm border border-beige-dark/30">
              <ShieldCheck className="w-10 h-10 text-gold" />
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl font-extrabold text-slate tracking-tight mb-2">
              Welcome Back
            </motion.h1>
            <motion.p variants={itemVariants} className="text-textGray text-sm">
              Enter your credentials to access the Sovereign AI Engine
            </motion.p>
          </motion.div>

          {/* Form */}
          <motion.form 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm font-bold text-slate ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-gold transition-colors" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-beige-light/50 border border-gray-200 rounded-xl text-slate placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold focus:bg-white transition-all font-medium"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate">Password</label>
                <a href="#" className="text-sm font-bold text-gold hover:text-gold-dark transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-gold transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-12 py-3.5 bg-beige-light/50 border border-gray-200 rounded-xl text-slate placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold focus:bg-white transition-all font-medium"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-slate transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-gold/20 text-md font-bold text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Authenticating...
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </motion.div>
          </motion.form>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 text-center"
          >
            <p className="text-sm font-medium text-textGray">
              Don't have an account?{' '}
              <a href="#" className="font-bold text-gold hover:text-gold-dark transition-colors">
                Request Access
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
      
    </div>
  );
};

export default Login;
