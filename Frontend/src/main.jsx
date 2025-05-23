// Import React DOM's createRoot for rendering the app
import { createRoot } from "react-dom/client";
// Import global CSS styles
import "./index.css";
// Import the main App component
import App from "./App.jsx";
// Import BrowserRouter for client-side routing
import { BrowserRouter } from "react-router-dom";
// Import ClerkProvider for authentication support
import { ClerkProvider } from "@clerk/clerk-react";

// Load Clerk's publishable key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Ensure the publishable key is defined, otherwise throw an error
if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

// Render the root of the React app
createRoot(document.getElementById("root")).render(
  // Provide Clerk authentication context to the app
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    {/* Enable routing for the app */}
    <BrowserRouter>
      {/* Render the main App component */}
      <App />
    </BrowserRouter>
    ,
  </ClerkProvider>
);
