import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Get the root element
const rootElement = document.getElementById("root");

// Check if root element exists
if (!rootElement) {
  throw new Error(
    'Failed to find the root element. Please make sure there is a div with id="root" in your index.html file.'
  );
}

// Create React root
const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring (optional)
if (import.meta.env.DEV) {
  console.log("AnimeHub is running in development mode");
}

// Hot Module Replacement (HMR) for Vite
if (import.meta.hot) {
  import.meta.hot.accept();
}

// Error boundary for the entire app (optional enhancement)
window.addEventListener("error", (event) => {
  console.error("Global error caught:", event.error);
});

// Unhandled promise rejection handler
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
});
