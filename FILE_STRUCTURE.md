# Complete File Structure

This document provides a detailed overview of every file in the project and its purpose.

## Root Directory

```
ai-gold-prediction/
├── index.html                    # Main HTML template
├── package.json                  # Project dependencies and scripts
├── vite.config.js               # Vite build tool configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── .gitignore                   # Git ignore rules
├── README.md                    # Project documentation
├── INSTALLATION_GUIDE.md        # Detailed installation instructions
└── FILE_STRUCTURE.md            # This file
```

## Source Directory (`src/`)

### Main Application Files

```
src/
├── main.jsx                     # Application entry point
├── App.jsx                      # Main app component with routing
└── index.css                    # Global styles and Tailwind directives
```

### Components (`src/components/`)

#### Common Components (`src/components/common/`)
```
common/
├── Button.jsx                   # Reusable button component
├── Card.jsx                     # Card container component
└── Input.jsx                    # Input field component
```

Purpose: Shared UI components used throughout the application.

#### Layout Components (`src/components/layout/`)
```
layout/
├── Header.jsx                   # Top navigation bar
├── Footer.jsx                   # Bottom footer
└── Layout.jsx                   # Main layout wrapper
```

Purpose: Structural components that define the overall page layout.

#### Feature Components (`src/components/features/`)

**Gold Price Components** (`features/goldPrice/`)
```
goldPrice/
├── GoldPriceCard.jsx           # Individual gold price display card
└── PriceChart.jsx              # Chart component for historical prices
```

**Prediction Components** (`features/prediction/`)
```
prediction/
└── PredictionChart.jsx         # Chart showing AI predictions vs real data
```

**Alert Components** (`features/alerts/`)
```
alerts/
└── AlertCard.jsx               # Price alert card with edit/delete actions
```

**News Components** (`features/news/`)
```
news/
└── NewsCard.jsx                # News article card
```

**About Components** (`features/about/`)
```
about/
└── TeamMember.jsx              # Team member profile card
```

### Pages (`src/pages/`)

```
pages/
├── Home.jsx                     # Homepage / Landing page
├── GoldPriceView.jsx           # Live prices and historical charts
├── AIPrediction.jsx            # AI prediction configuration and results
├── PriceAlerts.jsx             # Price alerts management
├── InvestmentCalculators.jsx   # Gold calculator & currency converter
├── News.jsx                    # News, analysis, and educational content
├── AboutUs.jsx                 # Team and platform information
└── Settings.jsx                # User account settings
```

### Data (`src/data/`)

```
data/
└── mockData.js                 # Mock data for demonstration
```

Contains:
- Gold prices by karat (24K, 22K, 21K, 18K)
- Currency exchange rates
- Historical chart data (1D, 1W, 1M, 1Y)
- AI prediction data
- Forecast tables
- News articles
- Team members
- Price alerts

### Utilities (`src/utils/`)

```
utils/
└── helpers.js                  # Helper functions (to be implemented)
```

Purpose: Utility functions for data formatting, calculations, etc.

### Hooks (`src/hooks/`)

```
hooks/
└── useAuth.js                  # Authentication hook (to be implemented)
```

Purpose: Custom React hooks for shared logic.

### Assets (`src/assets/`)

```
assets/
├── images/                     # Image files
└── styles/                     # Additional style files
```

Purpose: Static assets like images, fonts, and additional stylesheets.

## Detailed Component Breakdown

### 1. Layout Components

**Header.jsx**
- Responsive navigation bar
- Logo and brand name
- Navigation links
- Mobile menu toggle
- User authentication state
- Login/logout functionality

**Footer.jsx**
- About section
- Quick links
- Contact information
- Social media links (placeholder)
- Copyright notice

**Layout.jsx**
- Wraps Header, main content, and Footer
- Provides consistent layout across all pages

### 2. Common Components

**Button.jsx**
Props:
- `children`: Button content
- `variant`: 'primary', 'secondary', 'outline', 'ghost'
- `size`: 'sm', 'md', 'lg'
- `onClick`: Click handler
- `className`: Additional CSS classes

**Card.jsx**
Props:
- `children`: Card content
- `className`: Additional CSS classes

**Input.jsx**
Props:
- `type`: Input type (text, email, number, etc.)
- `placeholder`: Placeholder text
- `value`: Input value
- `onChange`: Change handler
- `label`: Optional label
- `className`: Additional CSS classes

### 3. Feature Components

**GoldPriceCard.jsx**
- Displays individual gold price by karat
- Shows current price
- Displays price change percentage
- Color-coded trend indicator

**PriceChart.jsx**
- Line chart for historical gold prices
- Configurable time frames
- Responsive design
- Tooltip on hover

**PredictionChart.jsx**
- Dual-line chart (real vs prediction)
- Legend
- Different line styles for distinction
- Configurable time frames

**AlertCard.jsx**
- Shows alert details
- Target vs current price
- Status badge
- Edit and delete actions
- Notification method display

**NewsCard.jsx**
- Article image
- Category badge
- Title and description
- Source and timestamp
- "Read Full Article" link

**TeamMember.jsx**
- Profile image placeholder
- Name and role
- Description
- Consistent styling

### 4. Pages

**Home.jsx**
- Hero section with welcome message
- Call-to-action button
- Feature highlights
- Responsive grid layout

**GoldPriceView.jsx**
- Live prices by karat (24K, 22K, 21K, 18K)
- Price change indicators
- Historical price chart
- Time frame selector (1D, 1W, 1M, 1Y)
- Currency exchange rates
- Refresh functionality

**AIPrediction.jsx**
- Prediction configuration panel
- Time period selection (24H, 1W, 1M, 1Y)
- Gold purity selection (18K, 21K, 22K, 24K)
- AI model information
- Prediction chart
- Forecast table
- "Generate Prediction" button

**PriceAlerts.jsx**
- Active alerts list
- Create new alert form
- Alert type selection (24K, 22K, 21K, 18K)
- Target price input
- Notification method selection
- Edit and delete functionality

**InvestmentCalculators.jsx**
- Tab navigation (Gold Calculator, Currency Converter)
- Gold Calculator:
  - Weight input
  - Karat selection
  - Price calculation
- Currency Converter:
  - From/To currency selection
  - Amount input
  - Conversion result
  - Swap currencies button

**News.jsx**
- Category tabs (News, Analysis, Educational)
- Featured articles
- Article cards with images
- Filtering by category
- Responsive grid layout

**AboutUs.jsx**
- "Our Expert Team" section
- Team member cards
- Platform mission statement
- Professional layout

**Settings.jsx**
- User profile section
- Account information form
- Notification preferences
- Profile picture placeholder
- Save changes button
- Logout option

## Data Structure

### mockData.js

**goldPrices**
```javascript
{
  '24K': { price: number, change: number },
  '22K': { price: number, change: number },
  // ...
}
```

**currencyRates**
```javascript
{
  'EUR': { rate: number, change: number },
  'GBP': { rate: number, change: number },
  // ...
}
```

**chartData***
```javascript
[
  { time/day/date/month: string, price: number },
  // ...
]
```

**predictionData***
```javascript
[
  { time/day/date/month: string, real: number, prediction: number },
  // ...
]
```

**newsArticles**
```javascript
[
  {
    id: number,
    category: string,
    title: string,
    description: string,
    source: string,
    time: string,
    featured: boolean,
    image: string
  },
  // ...
]
```

**priceAlerts**
```javascript
[
  {
    id: number,
    type: string,
    targetPrice: number,
    currentPrice: number,
    status: string,
    createdDate: string,
    notifyVia: string
  },
  // ...
]
```

**teamMembers**
```javascript
[
  {
    id: number,
    name: string,
    role: string,
    description: string
  },
  // ...
]
```

## Styling Approach

### Tailwind CSS Configuration

**Custom Colors:**
- gold: #C9A961
- beige: #F5F1E8
- slate: #4A5F6D
- textGray: #626670

**Custom Classes:**
- `.btn-primary`: Primary button style
- `.btn-secondary`: Secondary button style
- `.card`: Card container style
- `.input-field`: Input field style
- `.nav-link`: Navigation link style
- `.badge-*`: Badge styles (green, red, blue)

### Component Styling Philosophy

1. **Utility-First**: Use Tailwind utility classes
2. **Responsive**: Mobile-first design
3. **Consistent Spacing**: Use Tailwind spacing scale
4. **Reusable**: Extract common patterns to components
5. **Accessible**: Semantic HTML and ARIA labels

## Routing Structure

```
/ (Home)
/gold-price-view (GoldPriceView)
/ai-prediction (AIPrediction)
/price-alerts (PriceAlerts)
/investment-calculators (InvestmentCalculators)
/news (News)
/about-us (AboutUs)
/settings (Settings)
```

All routes are defined in `App.jsx` using React Router v6.

## State Management

Currently using React's built-in state management:
- `useState` for component-level state
- Props for data passing
- Context API (to be implemented) for global state

Future enhancements could include:
- Redux for complex state management
- React Query for server state
- Zustand for lightweight global state

## Future Expansion Areas

### Recommended Additions

1. **API Integration**
   - Create `src/api/` directory
   - Add service files for different endpoints
   - Implement error handling

2. **Authentication**
   - Add `src/contexts/AuthContext.jsx`
   - Implement protected routes
   - Add login/register pages

3. **Database Integration**
   - Firebase, Supabase, or custom backend
   - User data persistence
   - Alert storage

4. **Testing**
   - Create `src/__tests__/` directory
   - Add unit tests for components
   - Integration tests for pages
   - E2E tests with Playwright/Cypress

5. **Advanced Features**
   - WebSocket for real-time prices
   - Push notifications
   - Export data functionality
   - Portfolio tracking

## Development Guidelines

1. **Component Creation**
   - Keep components small and focused
   - Use prop-types or TypeScript for type checking
   - Follow naming conventions

2. **File Naming**
   - PascalCase for component files
   - camelCase for utility files
   - kebab-case for CSS files

3. **Code Organization**
   - Group related files in feature folders
   - Keep common components separate
   - Maintain consistent file structure

4. **Best Practices**
   - Use semantic HTML
   - Implement proper error boundaries
   - Add loading states
   - Handle edge cases
   - Write clean, readable code

---

This structure provides a solid foundation for a production-ready gold price prediction platform. The modular design allows for easy expansion and maintenance.
