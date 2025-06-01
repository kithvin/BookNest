import React from "react";
import Navbar from "./components/Navbar";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBooking.jsx";


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

          {/* All Room page route */}
          <Route path="/rooms" element={<AllRooms />} />

           {/* Rooms Details page route */}
           <Route path="/rooms/:id" element={<RoomDetails />} />

           {/*My Booking page route */}
           <Route path="/my-bookings" element={<MyBookings />} />

        </Routes>
      </div>
     {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
