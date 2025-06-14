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
- **npm** (comes with Node.js) 
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


   ```

## Running Locally

### Development Server

Start the development server:

```bash
# Using npm
npm start

```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production

## API Integration

Make sure your backend API is running on the configured port (default: 3001). The frontend expects the following endpoints:

- `POST /api/shorten` - Create shortened URL
- `GET /api/urls` - Get user's URLs
- `GET /api/stats/:id` - Get URL statistics
