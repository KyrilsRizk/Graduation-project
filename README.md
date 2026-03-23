# AI Gold Price Prediction Platform

A modern, AI-powered web application for predicting gold prices using historical data, market trends, and economic indicators.

## 🌟 Features

- **Live Gold Prices**: Real-time gold prices by karat (24K, 22K, 21K, 18K)
- **AI-Powered Predictions**: Advanced neural network predictions for 24 hours, 1 week, 1 month, and 1 year
- **Interactive Charts**: Historical price charts with multiple time frames
- **Price Alerts**: Set custom price alerts with email and in-app notifications
- **Investment Calculators**: Gold calculator and currency converter tools
- **News & Insights**: Latest news, analysis, and educational content
- **User Management**: Account settings and preferences

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React & Google Material Symbols
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
ai-gold-prediction/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Input.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   └── features/
│   │       ├── home/
│   │       ├── goldPrice/
│   │       ├── prediction/
│   │       ├── alerts/
│   │       ├── calculators/
│   │       ├── news/
│   │       ├── about/
│   │       └── settings/
│   ├── data/
│   │   └── mockData.js
│   ├── hooks/
│   │   └── useAuth.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── GoldPriceView.jsx
│   │   ├── AIPrediction.jsx
│   │   ├── PriceAlerts.jsx
│   │   ├── InvestmentCalculators.jsx
│   │   ├── News.jsx
│   │   ├── AboutUs.jsx
│   │   └── Settings.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-gold-prediction
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Color Palette

- **Primary Gold**: `#C9A961` (rgb(201, 169, 97))
- **Background Beige**: `#F5F1E8` (rgb(245, 241, 232))
- **Dark Slate**: `#4A5F6D` (rgb(74, 95, 109))
- **Text Gray**: `#626670` (rgb(98, 102, 112))
- **White**: `#FFFFFF`

## 📱 Pages Overview

### 1. Home
- Welcome section with hero image
- Platform introduction
- Quick links to main features

### 2. Gold Price View
- Live prices by karat
- Historical price charts (1D, 1W, 1M, 1Y)
- Currency exchange rates
- Refresh functionality

### 3. AI Prediction
- Configurable prediction parameters
- Time period selection (24H, 1W, 1M, 1Y)
- Gold purity selection (18K, 21K, 22K, 24K)
- Interactive prediction charts
- Forecast tables

### 4. Price Alerts
- Create new alerts
- Active alerts management
- Edit and delete functionality
- Email and in-app notifications

### 5. Investment Calculators
- Gold Calculator
- Currency Converter
- Real-time calculations

### 6. News & Market Insights
- Latest news articles
- Technical analysis
- Educational content
- Featured articles

### 7. About Us
- Expert team information
- Platform overview
- Mission statement

### 8. User Settings
- Account information
- Profile management
- Notification preferences

### 9. Admin Dashboard
- **Role-Based Access**: Specialized high-end "Sovereign Analyst" command center UI
- **Live Ticking Charts**: Real-time mock data integration with Recharts
- **KPI Monitoring**: Staggered animated metrics, volume, and active user counts
- **Prediction Ledger**: Historical AI prediction tracking with confidence gauges
- **Mobile Responsive**: Retracting sidebar and full responsive grid scaling

### 10. Login Portal
- Standalone immersive authentication page
- Smart routing (Distinguishes between Admin vs Standard User)
- Framer Motion ambient background animations
- Secure token setup via `localStorage`

## 🔐 Authentication

The application includes interactive user authentication with smart routing:
- **Standard Users**: Logging in smoothly redirects the user back to the main website layout.
- **Administrators**: Use the specific credentials `admin@sovereign.ai` / `admin123` to be securely routed directly into the standalone Admin Dashboard environment.
- **State Management**: Authentication state is stored natively in `localStorage` to persist active sessions across reloads and instantly automatically update the global navigation Header menus without a refresh.

## 📊 Data Sources

Currently using mock data for demonstration. In production, integrate with:
- Real-time gold price APIs
- AI prediction models
- News APIs
- Currency exchange rate APIs

## 🌐 Deployment

Build the application for production:

```bash
npm run build
```

The `dist` folder will contain the optimized production build.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

**AI Gold Price Prediction Project**

- Email: info@aigoldprediction.com
- Phone: +1 (555) 123-4567
- Address: 123 Financial District, New York, NY 10004

---

© 2025 AI Gold Price Prediction Project | All Rights Reserved
