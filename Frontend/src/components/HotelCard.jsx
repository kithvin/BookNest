import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={"/rooms/" + room._id}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="block max-w-md mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
    >
      <img
        src={room.images[0]}
        alt=""
        className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
      />

      {index % 2 === 0 && (
        <p
          className="px-3 py-1 absolute top-3 left-3 text-xs bg-yellow-300 text-yellow-900 font-semibold rounded-full shadow-sm select-none"
        >
          Best Seller
        </p>
      )}

      <div className="p-5 pt-6">
        <div className="flex items-center justify-between mb-1">
          <p className="font-playfair text-xl font-semibold text-gray-900 truncate max-w-[70%]">
            {room.hotel.name}
          </p>
          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-0.5 rounded-full">
            <img src={assets.starIconFilled} alt="star icon" className="w-4 h-4" />
            <span className="text-yellow-800 font-semibold text-sm">4.5</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
          <img src={assets.locationIcon} alt="location icon" className="w-4 h-4" />
          <span className="truncate">{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-900 font-semibold text-xl">
            ${room.pricePerNight}
            <span className="text-gray-600 font-normal text-sm">/night</span>
          </p>
          <button className="px-4 py-2 text-sm font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;

