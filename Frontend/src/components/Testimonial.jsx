import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Testimonial = () => {
  return (
  // Main container for the testimonial section with padding and background color

    <div
      className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-salte-50 
    pt-20 pb-30"
    >
    {/* Section title and subtitle */}
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers
        consistently choose QuickStay fro their exclusive and luxurious accommodation 
        around the world."
      />

      {/* Container for testimonial cards with wrapping and gap */}

      <div className="flex flex-wrap items-center gap-6 mt-20">

        {/* Map through testimonials array to render each testimonial card */}

        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow"
          >

          {/* Testimonial header: guest image and info */}

            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>

                {/* Guest name */}

                <p className="font-playfair text-xl">{testimonial.name}</p>

                {/* Guest address/location */}

                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>

            {/* Star rating component */}

            <div className="flex items-center gap-1 mt-4">
              <StarRating/>
            </div>

            {/* Guest review text */}

            <p className="text-gray-500 max-w-90 mt-4">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
