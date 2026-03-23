import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/gold-price-view', label: 'Gold Price View' },
    { path: '/ai-prediction', label: 'AI Prediction' },
    { path: '/news', label: 'News' },
    { path: '/about-us', label: 'About Us' },
  ];

  return (
    <footer className="bg-beige border-t border-beige-dark mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-slate font-bold text-lg mb-4">About</h3>
            <p className="text-textGray text-sm leading-relaxed">
              We leverage cutting-edge AI technology to provide accurate gold price predictions, 
              helping investors make informed decisions in the precious metals market.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-textGray text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-textGray text-sm">info@aigoldprediction.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-textGray text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <span className="text-textGray text-sm">
                  123 Financial District<br />
                  New York, NY 10004
                </span>
              </div>
            </div>

            {/* Logo */}
            <div className="mt-6">
              <Diamond className="w-16 h-16 text-gold" fill="#C9A961" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-beige-dark text-center">
          <p className="text-textGray text-sm">
            © 2025 AI Gold Price Prediction Project | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
