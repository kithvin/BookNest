import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  // Extract the room id from URL parameters
  const { id } = useParams();
  // State to store the room details based on id
  const [room, setRoom] = useState(null);
  // State to store which image is currently shown as the main image
  const [mainImage, setMainImage] = useState(null);

  // On component mount, find the room with matching id and set room and mainImage state
  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]); // Set first image as main image
  }, []);

  // Render only if room data is available
  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room Details */}

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">({room.roomType})</span>
          </h1>
          <p
            className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500
          rounded-full"
          >
            20% OFF
          </p>
        </div>

        {/* Room Raiting */}

        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* Room Address */}

        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Room Images */}

        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="Room Image"
              className="w-full rounded-xl
          shadow-lg object-cover"
            />
          </div>

          {/* Thumbnails for additional images */}

          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="Room Image"
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer
          ${mainImage === image && "outline-3 outline-orange-500"}`}
                />
              ))}
          </div>
        </div>

        {/* Room Highlights and Price */}

        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2
                rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Room Price per night*/}

          <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
        </div>

        {/* CheckIn CheckOut Form */}

        <form
          className="flex flex-col md:flex-row items-start md:items-center
        justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6
        rounded-xl mx-auto mt-16 max-w-6xl"
        >
          <div
            className="flex flex-col flex-wrap md:flex-row items-start
          md:items-center gap-4 md:gap-10 text-gray-500"
          >
            {/* Check-In Date Input */}

            <div className="flex flex-col text-center">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                id="checkInDate"
                placeholder="Check-in"
                className="w-full rounded border border-gray-300 px-3 py-3 mt-1.5
              outline-none"
                required
              />
            </div>

            {/* Vertical separator line */}

            <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

            {/* Check-Out Date Input */}

            <div className="flex flex-col text-center">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                placeholder="Check-Out"
                className="w-full rounded border border-gray-300 px-3 py-3 mt-1.5
              outline-none"
                required
              />
            </div>

            {/* Vertical separator line */}
            <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

            {/* Guests Number Input */}
            <div className="flex flex-col ">
              <label htmlFor="guests" className="font-medium ml-3">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="max-w-20 rounded border border-gray-300 px-3
              py-2 mt-1.5 outline-none"
                required
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dull 
          active:scale-95 transition-all text-white rounded-md max-md:w-full
          max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
          >
            Check Availability
          </button>
        </form>

        {/*  Common Room Specifications Section */}

        <div className="flex justify-center mt-30">
          <div className="mt-20 grid grid-cols-2 gap-x-45 gap-y-8">
            {roomCommonData.map((spec, index) => (
              <div key={index} className="flex items-start gap-2">
                <img
                  src={spec.icon}
                  alt={`${spec.title}-icon`}
                  className="w-6.5"
                />
                <div>
                  <p className="text-base">{spec.title}</p>
                  <p className="text-gray-500">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Room  Description Paragraph */}

        <div className=" mx-auto border-y border-gray-300 my-40 py-10 text-gray-500 text-justify">
          <p>
            Guests will be allocated rooms on the ground floor, depending on
            availability, ensuring convenient access without the need to use
            stairs or elevators—perfect for families, elderly guests, or those
            with lots of luggage. You’ll be staying in a beautifully designed,
            fully furnished two-bedroom apartment that offers a true sense of
            comfort and urban charm. With a modern layout and cozy interiors,
            this space feels just like home while giving you the unique vibes of
            the city. Each room is thoughtfully arranged to ensure your maximum
            comfort and privacy. Whether you’re planning a family vacation, a
            romantic weekend getaway, or a business trip, this apartment caters
            to all your needs. It includes essential amenities like high-speed
            Wi-Fi, air conditioning, a fully equipped kitchen, clean bathrooms,
            and plush bedding to guarantee a restful stay. Please note: the
            displayed price is for two guests only. If you’re traveling in a
            group or with extra companions, kindly select the total number of
            guests during booking. The system will automatically calculate the
            accurate price based on your group size. Additional charges may
            apply for extra guests, and this helps us prepare the space
            accordingly with extra beds, towels, and amenities. Enjoy the
            vibrant city life just outside your door, while relaxing in the calm
            and peaceful ambiance of your private apartment. Whether you're
            staying for a night or an extended trip, this accommodation offers a
            perfect blend of convenience, style, and value for money.
          </p>
        </div>

        {/* Hosted by Section */}

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <img
              src={room.hotel.owner.image}
              alt="Host"
              className="h-14 w-14 md:h-18
              md:w-18 rounded-full"
            />
            <div>
              <p className="text-lg md:text-xl mt-1">
                Hosted by {room.hotel.name}
              </p>
              <div className="flex items-center mt-1">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
            </div>
          </div>

          {/* Contact Button */}

          <button
            className="px-16 py-2.5 mt-4 rounded text-white bg-primary
        hover:bg-primary-dull transition-all cursor-pointer"
          >
            Contact Now
          </button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
