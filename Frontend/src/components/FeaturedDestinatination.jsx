import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

// Component to display featured destinations
const FeaturedDestinatination = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    // Container with padding and background color

    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-sand-50 py-20">
      {/* Title section with main and subtitle */}

      <Title
        title="Featured Destinations"
        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
      />

      {/* Room cards grid */}

      <div className="flex flex-wrap items-center justify-center gap-16 mt-22">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      {/* Button to navigate to the full list of destinations */}

      <button
        onClick={() => {
          navigate("/rooms"); // Navigate to all rooms page
          scrollTo(0, 0);
        }} // Scroll to top
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        View All Destinations
      </button>
    </div>
  );
};

export default FeaturedDestinatination;
