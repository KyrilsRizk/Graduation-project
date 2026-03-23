# Quick Start Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation Steps

### 1. Navigate to the Project Directory

```bash
cd ai-gold-prediction
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 18
- React Router DOM v6
- Recharts (for charts)
- Lucide React (for icons)
- Tailwind CSS
- Vite (build tool)

Expected installation time: 2-3 minutes

### 3. Start Development Server

```bash
npm run dev
```

The application will start on http://localhost:5173

You should see output similar to:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

### 4. Open in Browser

Open your browser and navigate to:
```
http://localhost:5173
```

You should see the home page of the AI Gold Price Prediction platform!

## Project Structure Overview

```
ai-gold-prediction/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── data/            # Mock data
│   ├── App.jsx          # Main app with routing
│   └── main.jsx         # Entry point
├── public/              # Static assets
└── package.json         # Dependencies
```

## Available Scripts

### Development

```bash
npm run dev
```
Starts the development server with hot reload at http://localhost:5173

### Build for Production

```bash
npm run build
```
Creates an optimized production build in the `dist/` folder

### Preview Production Build

```bash
npm run preview
```
Preview the production build locally

### Lint Code

```bash
npm run lint
```
Check code for linting errors

## Exploring the Application

### Pages Available

1. **Home** (`/`)
   - Landing page with welcome message

2. **Gold Price View** (`/gold-price-view`)
   - Live gold prices by karat
   - Interactive charts with multiple timeframes
   - Currency exchange rates

3. **AI Prediction** (`/ai-prediction`)
   - Configure prediction parameters
   - View AI-generated forecasts
   - Compare real vs predicted prices

4. **Price Alerts** (`/price-alerts`)
   - Create and manage price alerts
   - Set target prices
   - Configure notifications

5. **Investment Calculators** (`/investment-calculators`)
   - Currency converter
   - Gold calculator (placeholder)

6. **News** (`/news`)
   - Latest news articles
   - Market analysis
   - Educational content

7. **About Us** (`/about-us`)
   - Team information
   - Platform overview

8. **Settings** (`/settings`)
   - User profile management
   - Notification preferences

## Making Changes

### Modify Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  gold: {
    DEFAULT: '#C9A961', // Change this
    // ...
  }
}
```

### Add New Page

1. Create new file in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`:

```javascript
<Route path="/your-page" element={<YourPage />} />
```

3. Add navigation link in `src/components/layout/Header.jsx`

### Modify Mock Data

Edit `src/data/mockData.js` to change:
- Gold prices
- Chart data
- News articles
- Team members

### Change Styling

Global styles: `src/index.css`
Component styles: Use Tailwind classes directly in JSX

## Common Issues & Solutions

### Port Already in Use

If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing

Clear npm cache:
```bash
npm cache clean --force
npm install
```

### Build Errors

Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

### Hot Reload Not Working

Restart the development server:
```bash
# Stop with Ctrl+C
npm run dev
```

## Next Steps

### 1. Connect to Real APIs

Replace mock data in `src/data/mockData.js` with API calls:

```javascript
// Example: Fetch real gold prices
const fetchGoldPrices = async () => {
  const response = await fetch('https://api.example.com/gold-prices');
  const data = await response.json();
  return data;
};
```

### 2. Add Authentication

Implement user authentication:
- Create login/register pages
- Add JWT token management
- Protect routes

### 3. Deploy to Production

Build and deploy:

```bash
npm run build
```

Deploy `dist/` folder to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages

### 4. Add Database

Integrate backend:
- Store user data
- Save price alerts
- Track user preferences

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/ai-gold-prediction",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Getting Help

### Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Recharts Documentation](https://recharts.org/)

### Troubleshooting

If you encounter issues:
1. Check the browser console for errors
2. Check the terminal for build errors
3. Ensure all dependencies are installed
4. Try clearing cache and rebuilding

## Development Tips

### VS Code Extensions (Recommended)

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- Auto Rename Tag

### Code Formatting

Install Prettier:
```bash
npm install --save-dev prettier
```

Create `.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

### Git Workflow

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin <your-repo-url>

# Push
git push -u origin main
```

## Project Status

Current Version: 1.0.0
Status: Development
Last Updated: 2025

### Implemented Features
✅ Responsive design
✅ Navigation system
✅ Gold price charts
✅ AI prediction interface
✅ Price alerts management
✅ Currency converter
✅ News section
✅ User settings

### Pending Features
⏳ Real API integration
⏳ User authentication
⏳ Database integration
⏳ Email notifications
⏳ Portfolio tracking

---

**Happy Coding!** 🚀

For questions or issues, refer to the README.md or PROJECT_STRUCTURE.md files.
