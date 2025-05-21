import React from "react";
import { assets, cities } from "../assets/assets";

// Hero component to display the landing section of the hotel booking site

const Hero = () => {
  return (
    <div
      className="flex flex-col items-start justify-center px-6 
    md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover 
    bg-center h-screen"
    >
      {/* Tagline */}

      <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
        The Ultimate Hotel Experience
      </p>

      {/* Main heading */}

      <h1 className="font-playfair text-2xl md:text-5xl md:text-[59px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Discover Your Perfect Getaway Destination
      </h1>

      {/* Subheading */}

      <p className="max-w-130 mt-3 text">
        Unparalleled Luxury and Comfort awaits at the world's most prestigious
        hotels and resorts.Start Your Journey Now.
      </p>

      {/* Search form */}

      <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">

        {/* Destination Field with datalist for suggestions */}

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="calendar" className="h-4"/>
            <label htmlFor="destinationInput"> Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          
          {/* City suggestions */}

          <datalist id="destinations">
            {cities.map((city,index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

          {/* Check-in date field */}

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="calendar" className="h-4"/>
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        {/* Check-out date field */}

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4"/>
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        {/* Guests number input */}

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
            placeholder="0"
          />
        </div>

        {/* Search button with icon */}

        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1 mt-[18px]">
          <img src={assets.searchIcon} alt="searchIcon" className="h-7"/>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
