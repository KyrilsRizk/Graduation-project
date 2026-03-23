# AI Gold Price Prediction - Project Structure

## Complete File Tree

```
ai-gold-prediction/
│
├── public/
│   └── index.html                      # Main HTML template
│
├── src/
│   ├── assets/
│   │   ├── images/                     # Image assets (to be added)
│   │   └── styles/                     # Additional styles (optional)
│   │
│   ├── components/
│   │   ├── common/                     # Reusable UI components
│   │   │   ├── Button.jsx              # Button component with variants
│   │   │   ├── Card.jsx                # Card container component
│   │   │   └── Input.jsx               # Input field component
│   │   │
│   │   ├── layout/                     # Layout components
│   │   │   ├── Header.jsx              # Navigation header
│   │   │   ├── Footer.jsx              # Footer with links and contact
│   │   │   └── Layout.jsx              # Main layout wrapper
│   │   │
│   │   └── features/                   # Feature-specific components
│   │       ├── home/                   # Home page components
│   │       ├── goldPrice/              # Gold price components
│   │       ├── prediction/             # AI prediction components
│   │       ├── alerts/                 # Price alerts components
│   │       ├── calculators/            # Calculator components
│   │       ├── news/                   # News components
│   │       ├── about/                  # About page components
│   │       └── settings/               # Settings components
│   │
│   ├── data/
│   │   └── mockData.js                 # Mock data for development
│   │
│   ├── hooks/
│   │   └── useAuth.js                  # Authentication hook (to be implemented)
│   │
│   ├── pages/                          # Page components
│   │   ├── Home.jsx                    # Home/Landing page
│   │   ├── GoldPriceView.jsx           # Live gold prices and charts
│   │   ├── AIPrediction.jsx            # AI prediction interface
│   │   ├── PriceAlerts.jsx             # Price alerts management
│   │   ├── InvestmentCalculators.jsx   # Calculators page
│   │   ├── News.jsx                    # News and insights
│   │   ├── AboutUs.jsx                 # About us page
│   │   └── Settings.jsx                # User settings
│   │
│   ├── utils/
│   │   └── helpers.js                  # Helper functions (to be implemented)
│   │
│   ├── App.jsx                         # Main App component with routing
│   ├── main.jsx                        # Application entry point
│   └── index.css                       # Global styles with Tailwind
│
├── .gitignore                          # Git ignore rules
├── package.json                        # Project dependencies
├── vite.config.js                      # Vite configuration
├── tailwind.config.js                  # Tailwind CSS configuration
├── postcss.config.js                   # PostCSS configuration
├── README.md                           # Project documentation
└── PROJECT_STRUCTURE.md                # This file

```

## Component Breakdown

### Common Components (`src/components/common/`)

#### Button.jsx
- **Purpose**: Reusable button component
- **Props**: 
  - `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
  - `size`: 'sm' | 'md' | 'lg'
  - `onClick`: Click handler
  - `children`: Button content
- **Usage**: Throughout the application for actions

#### Card.jsx
- **Purpose**: Container component for content sections
- **Props**: 
  - `children`: Content to display
  - `className`: Additional CSS classes
- **Usage**: Wrapping content sections

#### Input.jsx
- **Purpose**: Form input field
- **Props**: 
  - `type`: Input type
  - `label`: Field label
  - `value`: Input value
  - `onChange`: Change handler
  - `placeholder`: Placeholder text
- **Usage**: Forms and user input

### Layout Components (`src/components/layout/`)

#### Header.jsx
- **Purpose**: Main navigation header
- **Features**:
  - Responsive navigation menu
  - Mobile hamburger menu
  - Login/User profile toggle
  - Active route highlighting
- **Usage**: Wrapped around all pages

#### Footer.jsx
- **Purpose**: Site footer
- **Features**:
  - About section
  - Quick links
  - Contact information
  - Logo
- **Usage**: Bottom of all pages

#### Layout.jsx
- **Purpose**: Main layout wrapper
- **Features**:
  - Contains Header and Footer
  - Wraps page content
- **Usage**: Root layout component

### Pages (`src/pages/`)

#### Home.jsx
- **Route**: `/`
- **Features**:
  - Welcome hero section
  - Platform introduction
  - Gold coin image
  - Call-to-action buttons
- **Components Used**: Button

#### GoldPriceView.jsx
- **Route**: `/gold-price-view`
- **Features**:
  - Live gold prices by karat (24K, 22K, 21K, 18K)
  - Interactive price charts (1D, 1W, 1M, 1Y)
  - Currency exchange rates
  - Refresh functionality
- **Components Used**: Card, Button, Recharts
- **Data**: goldPrices, currencyRates, chartData*

#### AIPrediction.jsx
- **Route**: `/ai-prediction`
- **Features**:
  - Prediction parameter configuration
  - Time period selection (24H, 1W, 1M, 1Y)
  - Gold purity selection (18K-24K)
  - Interactive prediction charts
  - Forecast tables
  - Real vs Prediction comparison
- **Components Used**: Card, Button, Recharts
- **Data**: predictionData*, forecastTable*

#### PriceAlerts.jsx
- **Route**: `/price-alerts`
- **Features**:
  - Create new price alerts
  - View active alerts
  - Edit and delete alerts
  - Notification method selection
  - Target price configuration
- **Components Used**: Card, Button, Input
- **Data**: priceAlerts

#### InvestmentCalculators.jsx
- **Route**: `/investment-calculators`
- **Features**:
  - Currency converter
  - Gold calculator (placeholder)
  - Real-time conversion
  - Currency swap functionality
- **Components Used**: Card, Button, Input
- **Data**: Exchange rates (embedded)

#### News.jsx
- **Route**: `/news`
- **Features**:
  - Tabbed interface (News, Analysis, Educational)
  - Article cards with images
  - Category badges
  - Featured articles
  - Read more links
- **Components Used**: Card
- **Data**: newsArticles, analysisArticles, educationalArticles

#### AboutUs.jsx
- **Route**: `/about-us`
- **Features**:
  - Team member profiles
  - Mission statement
  - Platform overview
- **Components Used**: Card
- **Data**: teamMembers

#### Settings.jsx
- **Route**: `/settings`
- **Features**:
  - User profile management
  - Account information editing
  - Notification preferences
  - Logout functionality
  - Tabbed interface
- **Components Used**: Card, Button, Input

## Data Structure (`src/data/mockData.js`)

### goldPrices
```javascript
{
  '24K': { price: 2100.50, change: 2.7 },
  '22K': { price: 1925.46, change: 2.5 },
  ...
}
```

### currencyRates
```javascript
{
  EUR: { rate: 0.9200, change: -0.5 },
  GBP: { rate: 0.7900, change: 0.8 },
  ...
}
```

### chartData
- chartData1D - Hourly prices for one day
- chartData1W - Daily prices for one week
- chartData1M - Prices for one month
- chartData1Y - Monthly prices for one year

### predictionData
- predictionData24H - 24-hour forecast with real vs prediction
- predictionData1W - Weekly forecast
- predictionData1M - Monthly forecast
- predictionData1Y - Yearly forecast

### Articles
- newsArticles - Latest news articles
- analysisArticles - Technical analysis articles
- educationalArticles - Educational content

### Other Data
- priceAlerts - User price alerts
- teamMembers - Team member information

## Routing Structure

```javascript
/                           → Home
/gold-price-view           → GoldPriceView
/ai-prediction             → AIPrediction
/price-alerts              → PriceAlerts
/investment-calculators    → InvestmentCalculators
/news                      → News
/about-us                  → AboutUs
/settings                  → Settings
```

## Styling

### Tailwind CSS Configuration

#### Color Palette
```javascript
colors: {
  gold: {
    DEFAULT: '#C9A961',
    light: '#D4BA7F',
    dark: '#B89950',
  },
  beige: {
    DEFAULT: '#F5F1E8',
    light: '#FAF8F2',
    dark: '#EDE7D9',
  },
  slate: {
    DEFAULT: '#4A5F6D',
    light: '#5A7080',
    dark: '#3A4F5D',
  },
  textGray: '#626670',
}
```

#### Utility Classes
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.card` - Card container style
- `.input-field` - Input field style
- `.nav-link` - Navigation link style
- `.section-title` - Section heading style
- `.badge-*` - Badge styles (green, red, blue)

## Development Workflow

### Initial Setup
```bash
npm install
```

### Development Server
```bash
npm run dev
```
- Runs on http://localhost:5173
- Hot module replacement enabled

### Production Build
```bash
npm run build
```
- Outputs to `dist/` directory
- Optimized and minified

### Preview Production Build
```bash
npm run preview
```

## Future Enhancements

### To Be Implemented
1. **Authentication System**
   - User registration
   - Login/logout
   - Protected routes
   - JWT tokens

2. **API Integration**
   - Real-time gold price API
   - AI prediction API
   - News API
   - Currency exchange API

3. **Database**
   - User data persistence
   - Price alert storage
   - User preferences

4. **Additional Features**
   - Email notifications
   - Push notifications
   - Export data to CSV/PDF
   - Watchlist functionality
   - Portfolio tracking

5. **Testing**
   - Unit tests (Jest)
   - Integration tests
   - E2E tests (Cypress)

6. **Performance**
   - Code splitting
   - Lazy loading
   - Image optimization
   - Caching strategies

## Notes

- Currently uses mock data for all features
- Images use placeholder URLs (Unsplash)
- Authentication is simulated with local state
- All calculations are client-side only
- Responsive design implemented for mobile, tablet, and desktop
