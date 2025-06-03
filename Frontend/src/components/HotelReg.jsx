
import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <form className="flex bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full max-md:mx-4 animate-fade-in">
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 object-cover hidden md:block"
        />
        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 h-5 w-5 cursor-pointer hover:scale-110 transition-transform"
          />
          <p className="text-3xl font-bold mt-4 text-indigo-600">Register Your Hotel</p>

          {/* Hotel Name */}
          <div className="w-full mt-6">
            <label htmlFor="name" className="font-medium text-gray-600">
              Hotel Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type here"
              className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 outline-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              required
            />
          </div>

          {/* Contact Details */}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-600">
              Phone
            </label>
            <input
              id="contact"
              type="text"
              placeholder="Type here"
              className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 outline-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              required
            />
          </div>

          {/* Hotel Address */}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-600">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Type here"
              className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 outline-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              required
            />
          </div>

          {/* Select City Drop Down */}
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label htmlFor="city" className="font-medium text-gray-600">
              City
            </label>
            <select
              id="city"
              className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 outline-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button
            className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white mr-auto px-6 py-2 rounded-lg mt-10 shadow-md hover:shadow-lg"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
