# Installation & Setup Guide

## Quick Start

Follow these steps to get the AI Gold Price Prediction platform running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Step 1: Extract the Project

Extract the `ai-gold-prediction` folder to your desired location.

### Step 2: Navigate to Project Directory

```bash
cd ai-gold-prediction
```

### Step 3: Install Dependencies

Run one of the following commands to install all required dependencies:

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

This will install:
- React 18
- React Router v6
- Recharts (for charts)
- Lucide React (for icons)
- Tailwind CSS
- Vite (build tool)

### Step 4: Start Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will automatically open in your default browser at:
```
http://localhost:5173
```

If it doesn't open automatically, manually navigate to the URL above.

### Step 5: Explore the Application

You should now see the AI Gold Price Prediction homepage. Navigate through the following pages:

1. **Home** - Landing page with platform introduction
2. **Gold Price View** - Live prices and historical charts
3. **AI Prediction** - Configure and view AI predictions
4. **Price Alerts** - Manage price alerts
5. **Investment Calculators** - Gold calculator and currency converter
6. **News** - Market news and insights
7. **About Us** - Team information
8. **Settings** - User account settings (click user icon)

## Building for Production

To create an optimized production build:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

The production-ready files will be generated in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
ai-gold-prediction/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and styles
│   ├── components/     # Reusable React components
│   │   ├── common/     # Common UI components
│   │   ├── layout/     # Layout components (Header, Footer)
│   │   └── features/   # Feature-specific components
│   ├── data/           # Mock data
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # Project documentation
```

## Available Scripts

### Development

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Customization

### Changing Colors

Edit the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      gold: {
        DEFAULT: '#C9A961',
        light: '#D4BA7F',
        dark: '#B89950',
      },
      // ... more colors
    },
  },
}
```

### Adding Real Data

Replace the mock data in `src/data/mockData.js` with real API calls:

```javascript
// Example: Fetch real gold prices
const fetchGoldPrices = async () => {
  const response = await fetch('YOUR_API_ENDPOINT');
  const data = await response.json();
  return data;
};
```

### Integrating AI Model

To integrate a real AI prediction model:

1. Create an API endpoint for your AI model
2. Update the prediction pages to call your API
3. Process and display the results

## Deployment

### Deploying to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Deploying to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite settings
4. Deploy!

### Deploying to Traditional Hosting

1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. Check the console output for the actual URL.

### Dependencies Installation Fails

Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

Ensure you're using Node.js version 16 or higher:
```bash
node --version
```

### Charts Not Displaying

Ensure Recharts is properly installed:
```bash
npm install recharts
```

## Browser Support

The application supports all modern browsers:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Getting Help

For issues or questions:
1. Check the README.md file
2. Review the console for error messages
3. Ensure all dependencies are installed correctly
4. Verify Node.js version compatibility

## Next Steps

1. **Integrate Real APIs**: Replace mock data with actual gold price APIs
2. **Add Authentication**: Implement user authentication system
3. **Deploy AI Model**: Connect to your trained AI prediction model
4. **Add Database**: Store user data, alerts, and preferences
5. **Implement Payment**: Add subscription or payment features
6. **Mobile App**: Consider React Native for mobile versions
7. **Analytics**: Add Google Analytics or similar tracking
8. **SEO**: Optimize for search engines

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Credits

Built with:
- React
- Tailwind CSS
- Recharts
- Lucide Icons
- Vite

---

Happy coding! 🚀
