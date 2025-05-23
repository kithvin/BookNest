import React from "react";
import Navbar from "./components/Navbar";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  // Get current URL path to determine if it includes "owner"

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {/* Render Navbar only if the current path does NOT include "owner" */}

      {!isOwnerPath && <Navbar />}

      {/* Main content container with minimum height to cover the full viewport */}

      <div className="min-h-screen">
        {/* Define application routes */}

        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
     {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
