# Simple Shop - React E-Commerce App

## Project Overview

Simple Shop is a React-based e-commerce web application that allows users to browse products, add them to a cart, and manage their orders. It also includes an Admin Dashboard for managing products, viewing analytics, and performing CRUD operations. The app is built using modern React practices, including React Router for navigation, React Context for state management, and TailwindCSS for styling.

## Key Features

### User Features:

- Browse products with filtering and sorting options.
- View product details, including images, descriptions, and reviews.
- Add products to the cart and manage cart items.
- Checkout and place orders (mock implementation).

### Admin Features:

- View sales performance, product comparison, and inventory status using charts.
- Perform CRUD operations on products (Create, Read, Update, Delete).
- Add new products with image upload functionality.

### Technical Features:

- Responsive design using TailwindCSS.
- Form validation for user inputs.
- Mock API integration using FakeStoreAPI.
- Error handling and loading states.

## Setup Instructions

### Clone the Repository:

```bash
git clone https://github.com/FrancisMosoti/Simple-Shop
cd Simple-Shop
```

### Install Dependencies:

Run the following command to install all required dependencies:

```bash
npm install
```

### Run the Application:

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Dependency Installation Steps

The project uses the following dependencies. They are automatically installed when you run `npm install`, but here’s a list for reference:

### Core Dependencies:

- `react`: JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `react-router-dom`: For routing and navigation in the app.
- `axios`: For making HTTP requests to the API.
- `tailwindcss`: Utility-first CSS framework for styling.

### Additional Dependencies:

- `chart.js` and `react-chartjs-2`: For rendering charts in the Admin Dashboard.

To install all dependencies manually:

```bash
npm install react react-dom react-router-dom axios tailwindcss chart.js react-chartjs-2
```

## Running Instructions

### Start the Development Server:

```bash
npm run dev
```

The app will open in your default browser at [http://localhost:5173](http://localhost:5173).

### Build for Production:

To create an optimized production build, run:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

### Run Tests:

To run the test suite (if any), use:

```bash
npm test
```

## Project Structure Documentation

Here’s an overview of the project structure:

```
simple-shop/
├── public/                  # Static assets (e.g., index.html, favicon)
├── src/
│   ├── components/          # Reusable UI components (e.g., Navbar, Footer)
│   ├── context/             # React Context for state management (e.g., CartContext, AuthContext)
│   ├── pages/               # Page components (e.g., Home, ProductDetails, AdminDashboard)
│   ├── App.jsx              # Main application component with routing
│   └── index.js             # Entry point for the app
├── .gitignore               # Files and folders to ignore in Git
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation (this file)
└── vite.config.js           # Vite configuration file
```

## Key Files and Folders

### `src/components/`:

- Contains reusable components like `Navbar`, `Footer`, `ProductCard`, etc.

### `src/context/`:

- Contains React Context providers for managing global state (e.g., `CartContext`, `AuthContext`).

### `src/pages/`:

- Contains page components like `Home`, `ProductDetails`, `CartPage`, `AdminDashboard`, etc.

### `src/App.jsx`:

- The main application component with routing logic.

### `src/index.js`:

- The entry point for the app, where the root component is rendered.

### `vite.config.js`:

- Configuration file for Vite.

---

This README provides a comprehensive overview of the project, ensuring that users and developers can easily set up, understand, and contribute to the application.
