# URL Shortener Frontend

A modern, responsive frontend application for URL shortening service built with React/Vue.js (or your preferred framework).

## Features

- 🔗 Shorten long URLs with custom aliases
- 📊 View URL analytics and click statistics
- 📱 Responsive design for mobile and desktop
- 🎨 Clean and intuitive user interface
- ⚡ Fast and lightweight

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd url-shortener-frontend
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory and add your environment variables:

   ```env
   REACT_APP_API_BASE_URL=http://localhost:3001/api
   REACT_APP_APP_NAME=URL Shortener
   ```

## Running Locally

### Development Server

Start the development server:

```bash
# Using npm
npm start

# Or using yarn
yarn start
```

The application will be available at `http://localhost:3000`

### Build for Production

Create a production build:

```bash
# Using npm
npm run build

# Or using yarn
yarn build
```

### Preview Production Build

```bash
# Using npm
npm run preview

# Or using yarn
yarn preview
```

## Project Structure

```
url-shortener-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── styles/
│   ├── App.js
│   └── index.js
├── package.json
├── README.md
└── .env
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## API Integration

Make sure your backend API is running on the configured port (default: 3001). The frontend expects the following endpoints:

- `POST /api/shorten` - Create shortened URL
- `GET /api/urls` - Get user's URLs
- `GET /api/stats/:id` - Get URL statistics

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Kill process on port 3000
npx kill-port 3000
```

**Node modules issues:**

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions, please create an issue in the repository.
