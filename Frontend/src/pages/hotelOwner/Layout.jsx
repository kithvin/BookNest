import React from "react";
import Navbar from "../../components/hotelOwner/Navbar";
import Sidebar from "../../components/hotelOwner/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (

    // Main container for the layout; uses full screen height and vertical flex layout

    <div className="flex flex-col h-screen">

    {/* Top navigation bar */}

    {/* Main content area: Sidebar + Outlet */}
      <Navbar />
      <div className="flex h-full">

      {/* Sidebar (left panel) */}

        <Sidebar />

      {/* Outlet area where nested routes/components will be rendered */}
      
        <div className="flex-1 p-4 pt-10 md:px-10 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
