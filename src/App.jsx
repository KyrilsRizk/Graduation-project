import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import GoldPriceView from './pages/GoldPriceView';
import AIPrediction from './pages/AIPrediction';
import PriceAlerts from './pages/PriceAlerts';
import InvestmentCalculators from './pages/InvestmentCalculators';
import News from './pages/News';
import AboutUs from './pages/AboutUs';
import Settings from './pages/Settings';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gold-price-view" element={<GoldPriceView />} />
              <Route path="/ai-prediction" element={<AIPrediction />} />
              <Route path="/price-alerts" element={<PriceAlerts />} />
              <Route path="/investment-calculators" element={<InvestmentCalculators />} />
              <Route path="/news" element={<News />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
