import React from "react";
import Navbar from "./components/Navbar";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBooking.jsx";
import HotelReg from "./components/HotelReg.jsx";
import Layout from "./pages/hotelOwner/Layout.jsx";
import Dashboard from "./pages/hotelOwner/Dashboard.jsx";
import AddRoom from "./pages/hotelOwner/AddRoom.jsx";
import ListRoom from "./pages/hotelOwner/ListRoom.jsx";

const App = () => {
  // Get current URL path to determine if it includes "owner"

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {/* Render Navbar only if the current path does NOT include "owner" */}

      {!isOwnerPath && <Navbar />}

      {/* Render Hotel Registration page */}

      {false && <HotelReg />}

      {/* Main content container with minimum height to cover the full viewport */}

      <div className="min-h-screen">
        {/* Define application routes */}

        <Routes>
          {/* Home Page route */}
          <Route path="/" element={<Home />} />

          {/* All Room Page route */}
          <Route path="/rooms" element={<AllRooms />} />

          {/* Rooms Details Page route */}
          <Route path="/rooms/:id" element={<RoomDetails />} />

          {/* My Booking Page route */}
          <Route path="/my-bookings" element={<MyBookings />} />

          {/* Hotel Owner layout and nested routes */}

          <Route path="/owner" element={<Layout />}>
            {/* Dashboard home (index route) */}
            <Route index element={<Dashboard />} />
            {/* Add new room route */}
            <Route path="add-room" element={<AddRoom />} />
            {/* List all rooms route */}
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
