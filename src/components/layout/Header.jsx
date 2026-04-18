import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  const linkClass = (path) =>
    `block py-2 px-3 rounded md:p-0 ${
      isActive(path)
        ? 'text-[#D4AF37]'
        : 'text-[#425B6F] hover:text-[#D4AF37]'
    }`;

  return (
    <nav className="fixed top-0 z-20 w-full bg-[#F7F2E9] shadow-md ">
      <div className="max-w-screen-7xl mx-auto flex flex-wrap items-center justify-between p-4">

        {/* Logo */}
        <Link to="/">
          <img src="/Logo.png" alt="Logo" className="w-60 md:w-48 lg:w-72 h-auto object-contain" />
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-2xl text-[#425B6F]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop + Mobile Menu */}
        <div className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border md:border-0 rounded-lg bg-neutral-secondary-soft md:bg-transparent">

            {/* Nav Links */}
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={linkClass(link.path)}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* User Actions */}
            <li className="relative">
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-4 text-white bg-[#425B6F] rounded-2xl transition md:py-1"
                >
                  Login
                </Link>
              ) : (
                <div className="relative pl-3 pt-2">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-[#425B6F] text-3xl focus:outline-none"
                  >
                    <FaUserCircle />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute right-0 mt-2 w-40 bg-[#F6F4EE] border rounded-xl shadow-lg z-50">
                      <li className="hover:bg-yellow-100">
                        <Link
                          to="/settings"
                          onClick={() => { setDropdownOpen(false); setIsMenuOpen(false); }}
                          className="block px-4 py-2 cursor-pointer"
                        >
                          Profile
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          localStorage.removeItem('isAuthenticated');
                          localStorage.removeItem('userRole');
                          setIsLoggedIn(false);
                          setDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                      >
                        Log Out
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;