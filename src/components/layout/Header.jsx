import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Diamond, User, Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isAuthenticated') === 'true');

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gold-price-view', label: 'Gold Price View' },
    { path: '/ai-prediction', label: 'AI Prediction' },
    { path: '/price-alerts', label: 'Price Alerts' },
    { path: '/investment-calculators', label: 'Investment Calculators' },
    { path: '/news', label: 'News' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-beige border-b border-beige-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Diamond className="w-8 h-8 text-gold" fill="#C9A961" />
            <div className="hidden md:block">
              <span className="text-gold font-semibold text-lg tracking-wide">
                AI GOLD PRICE
              </span>
              <span className="text-gold font-light text-lg ml-2">
                PREDICTION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-gold font-semibold'
                    : 'text-textGray hover:text-gold'
                } transition-colors duration-200 text-sm font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Link to="/settings" title="Settings">
                  <button className="p-2 rounded-full hover:bg-beige-dark transition-colors">
                    <User className="w-6 h-6 text-slate" />
                  </button>
                </Link>
                <button 
                  onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    localStorage.removeItem('userRole');
                    setIsLoggedIn(false);
                  }}
                  className="text-xs font-semibold text-red-500 hover:text-red-700 ml-2"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden lg:flex items-center justify-center bg-slate hover:bg-slate-dark text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
              >
                log in
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-beige-dark"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-slate" />
              ) : (
                <Menu className="w-6 h-6 text-slate" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-beige-dark">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActive(link.path)
                      ? 'text-gold font-semibold'
                      : 'text-textGray'
                  } py-2 px-4 hover:bg-beige-dark rounded-lg transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex justify-center bg-slate hover:bg-slate-dark text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium mx-4"
                >
                  log in
                </Link>
              ) : (
                <button
                  onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    localStorage.removeItem('userRole');
                    setIsLoggedIn(false);
                    setIsMenuOpen(false);
                  }}
                  className="flex justify-center bg-red-100/50 hover:bg-red-100 text-red-600 px-6 py-2 rounded-lg transition-colors duration-200 font-medium mx-4"
                >
                  Log Out
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
