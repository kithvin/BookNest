import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {

  // State to store room data 

  const [rooms, setRooms] = useState(roomsDummyData);

  return (
    <div>

    {/* Page title and subtitle */}
    
      <Title
        align="left"
        font="outfit"
        title="Room Listing"
        subTitle="View, edit
    or manage all listed rooms. Keep the information up-todate to provide the
    best experience for users."
      />

      {/* Section title */}

      <p className="text-gray-500 mt-8">All Rooms</p>

      {/* Table container with scroll, shadow, and border styling */}
      <div
        className="w-full max-w-3xl text-left border border-gray-300 rounded-lg 
        shadow-md hover:shadow-lg transition duration-300 bg-white max-h-80 
        overflow-y-scroll mt-6"
      >
      {/* Table displaying room data */}

        <table className="w-full">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Name</th>
              <th
                className="py-3 px-4 text-gray-800 font-medium max-sm:hidden
              "
              >
                Facility
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Price/Night
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Action
              </th>
            </tr>
          </thead>

          {/* Table body with dynamic room rows */}

          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index}>
                <td
                  className="py-3 px-4 text-gray-700 border-t 
                border-gray-300"
                >
                  {item.roomType}
                </td>

              {/* Table body with dynamic room rows */}

                <td
                  className="py-3 px-4 text-gray-700 border-t 
                border-gray-300 max-sm:hidden"
                >
                  {item.amenities.join(", ")}
                </td>

              {/* Price per night */}

                <td
                  className="py-3 px-4 text-gray-700 border-t 
                border-gray-300 text-center"
                >
                  {item.pricePerNight}
                </td>

              {/* Availability toggle switch (read-only in this state) */}

                <td
                  className="py-3 px-4 border-t 
                border-gray-300 text-sm text-red-500 text-center"
                >
                  <label
                    className="relative inline-flex items-center
                  cursor-pointer text-gray-900 gap-3"
                  >
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                    />

                    {/* Switch background */}
                    
                    <div
                      className="w-12 h-7 bg-slate-300 rounded-full peer
                peer-checked:bg-blue-600 transition-colors duration-200"
                    ></div>
                    <span
                      className="dot absolute left-1 top-1 w-5
                    h-5 bg-white rounded-full transition-transform duration-200
                    ease-in-out peer-checked:translate-x-5"
                    ></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
