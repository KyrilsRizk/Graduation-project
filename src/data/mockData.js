// Mock data for the application

export const goldPrices = {
  '24K': { price: 2100.50, change: 2.7 },
  '22K': { price: 1925.46, change: 2.5 },
  '21K': { price: 1838.44, change: 2.4 },
  '18K': { price: 1575.38, change: 2.1 },
};

export const currencyRates = {
  EUR: { rate: 0.9200, change: -0.5 },
  GBP: { rate: 0.7900, change: 0.8 },
  CAD: { rate: 1.3600, change: 0.4 },
  AUD: { rate: 1.5200, change: 1.8 },
};

export const chartData1D = [
  { time: '9:00', price: 2100 },
  { time: '10:00', price: 2145 },
  { time: '11:00', price: 2135 },
  { time: '12:00', price: 2115 },
  { time: '13:00', price: 2165 },
  { time: '14:00', price: 2155 },
  { time: '15:00', price: 2100 },
  { time: '16:00', price: 2100 },
];

export const chartData1W = [
  { day: 'Mon', price: 2100 },
  { day: 'Tue', price: 2140 },
  { day: 'Wed', price: 2090 },
  { day: 'Thu', price: 2110 },
  { day: 'Fri', price: 2080 },
];

export const chartData1M = [
  { date: 'Nov 1', price: 2100 },
  { date: 'Nov 10', price: 2200 },
  { date: 'Nov 20', price: 2250 },
  { date: 'Nov 30', price: 2230 },
];

export const chartData1Y = [
  { month: 'SEP', price: 2200 },
  { month: 'OCT', price: 2140 },
  { month: 'NOV', price: 2180 },
  { month: 'DEC', price: 2100 },
];

export const predictionData24H = [
  { time: '1:00', real: 2095, prediction: 2100 },
  { time: '4:00', real: 2105, prediction: 2110 },
  { time: '7:00', real: 2125, prediction: 2140 },
  { time: '10:00', real: 2140, prediction: 2125 },
  { time: '13:00', real: 2160, prediction: 2140 },
  { time: '16:00', real: 2135, prediction: 2135 },
  { time: '19:00', real: null, prediction: 2100 },
  { time: '23:00', real: null, prediction: 2100 },
];

export const predictionData1W = [
  { day: 'Mon', real: 2085, prediction: 2090 },
  { day: 'Tue', real: 2100, prediction: 2140 },
  { day: 'Wed', real: 2100, prediction: 2090 },
  { day: 'Thu', real: 2145, prediction: 2110 },
  { day: 'Fri', real: 2100, prediction: 2080 },
];

export const predictionData1M = [
  { date: 'Nov 1', real: 2100, prediction: 2100 },
  { date: 'Nov 10', real: 2200, prediction: 2200 },
  { date: 'Nov 20', real: 2180, prediction: 2250 },
  { date: 'Nov 30', real: null, prediction: 2230 },
];

export const predictionData1Y = [
  { month: 'SEP', real: 2225, prediction: 2240 },
  { month: 'OCT', real: 2145, prediction: 2130 },
  { month: 'NOV', real: 2190, prediction: 2180 },
  { month: 'DEC', real: null, prediction: 2130 },
];

export const forecastTable24H = [
  { time: '4:00', price: '$2110' },
  { time: '7:00', price: '$2140' },
  { time: '10:00', price: '$2125' },
  { time: '13:00', price: '$2140' },
  { time: '16:00', price: '$2135' },
  { time: '19:00', price: '$2100' },
];

export const forecastTable1W = [
  { day: 'Mon', price: '$2100' },
  { day: 'Tue', price: '$2140' },
  { day: 'Wed', price: '$2090' },
  { day: 'Thu', price: '$2110' },
  { day: 'Fri', price: '$2080' },
];

export const forecastTable1M = [
  { date: 'Nov 1', price: '$2090' },
  { date: 'Nov 10', price: '$2200' },
  { date: 'Nov 20', price: '$2250' },
  { date: 'Nov 30', price: '$2230' },
];

export const forecastTable1Y = [
  { month: 'SEP', price: '$2240' },
  { month: 'OCT', price: '$2130' },
  { month: 'NOV', price: '$2180' },
  { month: 'DEC', price: '$2130' },
];

export const newsArticles = [
  {
    id: 1,
    category: 'News',
    title: 'Gold Prices Surge To Record Highs Amid Global Economic Uncertainty',
    description: 'Central banks increase gold reserves as hedge against inflation and market volatility.',
    source: 'Financial Times',
    time: '2 Hours Ago',
    featured: true,
    image: '/news1.jpg',
  },
  {
    id: 2,
    category: 'News',
    title: 'Fed Rate Decision Impact On Precious Metals Markets',
    description: 'Federal Reserve policy changes create new opportunities for gold and silver investors.',
    source: 'Financial Times',
    time: '1 Day Ago',
    featured: true,
    image: '/news2.jpg',
  },
];

export const analysisArticles = [
  {
    id: 3,
    category: 'Analysis',
    title: 'Technical Analysis: Gold Price Patterns Point To Bullish Trend',
    description: 'Expert analysts examine chart patterns and predict continued upward momentum for gold...',
    source: 'Financial Times',
    time: '4 Hours Ago',
    featured: true,
    image: '/analysis1.jpg',
  },
  {
    id: 4,
    category: 'Analysis',
    title: 'Silver Vs Gold: Which Precious Metal Should You Invest In?',
    description: 'Compare risk profiles, returns, and market dynamics of silver and gold investments.',
    source: 'Financial Times',
    time: '9 Hours Ago',
    featured: true,
    image: '/analysis2.jpg',
  },
];

export const educationalArticles = [
  {
    id: 5,
    category: 'Education',
    title: 'Understanding Gold Karats: A Comprehensive Guide For Investors',
    description: 'Learn the difference between 24K, 22K, 18K, and 14K gold and how purity affects investment..',
    source: 'Financial Times',
    time: '15 Hours Ago',
    featured: true,
    image: '/education1.jpg',
  },
  {
    id: 6,
    category: 'Education',
    title: "Beginner's Guide To Gold Investment: Top 5 Strategies",
    description: 'Essential tips for new investors looking to add gold to their portfolio.',
    source: 'Financial Times',
    time: '3 Days Ago',
    featured: true,
    image: '/education2.jpg',
  },
];

export const priceAlerts = [
  {
    id: 1,
    type: 'Gold 24K',
    targetPrice: 2150.00,
    currentPrice: 2100.50,
    status: 'active',
    createdDate: '2025-11-28',
    notifyVia: 'both',
  },
  {
    id: 2,
    type: 'Gold 22K',
    targetPrice: 2000.00,
    currentPrice: 1900.50,
    status: 'active',
    createdDate: '2025-11-28',
    notifyVia: 'both',
  },
  {
    id: 3,
    type: 'Gold 21K',
    targetPrice: 1900.00,
    currentPrice: 1989.50,
    status: 'active',
    createdDate: '2023-11-28',
    notifyVia: 'both',
  },
];

export const teamMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'AI Research Lead',
    description: 'PhD in Machine Learning, 10+ years in financial forecasting',
  },
  {
    id: 2,
    name: 'Michael Torres',
    role: 'Data Scientist',
    description: 'Expert in time-series analysis and commodity markets',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Financial Analyst',
    description: 'Former gold trader with 15 years market experience',
  },
  {
    id: 4,
    name: 'James Liu',
    role: 'Software Engineer',
    description: 'Full-stack developer specializing in fintech solutions',
  },
];
