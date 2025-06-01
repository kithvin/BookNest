import React, { useState } from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  // Store bookings data in state
  const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      
      {/* <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and
        upcoming hotel reservation in one place. Plan your trips seamlessly with
        just a few clicks"
        align="center"
      /> */}

      {/* Page title and subtitle */}

      <Title
        title="My Bookings"
        subTitle={
          <p style={{ marginTop: "0.5rem" }}>
            Easily manage your past, current, and upcoming hotel reservation in
            one place. Plan your trips seamlessly with just a few clicks
          </p>
        }
        align="center"
      />
      {/* Bookings container */}
      <div className="max-w-8xl mt-16 w-full text-gray-800 mx-auto">
        <div
          className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b
        border-gray-300 font-medium text-base py-3"
        >
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>

        {/* List of bookings */}
        {bookings.map((bookings) => (
          <div
            key={bookings._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr]
          w-full border-b border-gray-300 py-6 first:border-t"
          >
            {/* ------------------------ Hotels ------------------------ */}

            <div className="flex flex-col md:flex-row">
              <img
                src={bookings.room.images[0]}
                alt="hotel-img"
                className="min-md:w-44 rounded shadow object-cover"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-2xl">
                  {bookings.hotel.name}
                  <span className="font-inter text-sm">
                    {" "}
                    ({bookings.room.roomType})
                  </span>
                </p>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="location-Icon" />
                  <span>{bookings.hotel.address}</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="guests-icon" />
                  <span>Guests: {bookings.guests}</span>
                </div>
                <p className="text-base">Total: ${bookings.totalPrice}</p>
              </div>
            </div>

            {/* ------------------------ Date & Timings ------------------------ */}
            <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
              <div>
                <p>Check-In :</p>
                <p className="text-gray-500 text-sm">
                  {new Date(bookings.checkInDate).toDateString()}
                </p>
              </div>

              <div>
                <p>Check-Out :</p>
                <p className="text-gray-500 text-sm">
                  {new Date(bookings.checkOutDate).toDateString()}
                </p>
              </div>
            </div>

            {/* ------------------------ Payment Status ------------------------ */}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2">
                <div
                  className={`h-3 w-3 rounded-full ${
                    bookings.isPaid ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <p
                  className={`text-sm ${
                    bookings.isPaid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {bookings.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>

              {/* Show pay button if unpaid */}

              {!bookings.isPaid && (
                <button
                  className="px-4 py-1.5 mt-4 text-xs border border-gray-400
                rounded-full hover:bg-gray-50 transition-all cursor-pointer"
                >
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
