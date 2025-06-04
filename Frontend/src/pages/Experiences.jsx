import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import StarRating from "../components/StarRating";
import { useNavigate } from "react-router-dom";

const Experiences = () => {
  const navigate = useNavigate();

  // Experience categories data

  const categories = [
    {
      id: 1,
      name: "Adventure",
      icon: assets.mountainIcon1,
      description: "Thrilling outdoor activities and expeditions",
    },
    {
      id: 2,
      name: "Wellness",
      icon: assets.spaIcon,
      description: "Rejuvenating spa and relaxation experiences",
    },
    {
      id: 3,
      name: "Cultural",
      icon: assets.cultureIcon,
      description: "Authentic local traditions and heritage",
    },
    {
      id: 4,
      name: "Gourmet",
      icon: assets.foodIcon,
      description: "Exceptional culinary journeys",
    },
  ];

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen">

      {/* Hero Section */}

      <div className="relative h-100 rounded-xl overflow-hidden mb-16">
        <img
          src={assets.expHero}
          alt="Travel experiences"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-center">
            Unforgettable Experiences
          </h1>
          <p className="text-lg max-w-2xl text-center">
            Discover unique activities offered by our partner hotels worldwide
          </p>
        </div>
      </div>

      {/* Categories Section */}

      <section className="mb-20">
        <Title
          title="Experience Categories"
          subTitle="Find activities that match your travel style"
          align="center"
        />

        {/* Grid layout for categories */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 ">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-primary/1 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="h-12 w-12"
                />
              </div>
              <h3 className="font-playfair text-xl mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}

      <section className="mb-20">
        <Title
          title="Experience Reviews"
          subTitle="What travelers say about these activities"
          align="center"
        />
        
        {/* Testimonials grid */}

        {/* testimonial cards follow the same pattern */}
          
          {/* Each card contains:
               - User avatar
               - User name and experience type
               - Star rating
               - Review text */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="bg-primary/5 p-6 rounded-xl shadow mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials1}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">James Wilson</p>
                <p className="text-gray-500 text-sm">On Personalized Stay</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={5} />
            </div>
            <p className="text-gray-600">
              "Every part of my stay felt handpicked. 
              Booknest really knows how to make it personal."
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl shadow mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials2}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">Sophia Chen</p>
                <p className="text-gray-500 text-sm">On Comfort</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={5} />
            </div>
            <p className="text-gray-600">
              "Booknest wasn’t just a booking app.
              it felt like a travel buddy who cared about my comfort."
            </p>
          </div>

          {/* More testimonial cards... */}
          {/* Note: In a production app, these would likely be mapped from an array of testimonials */}

          <div className="bg-primary/5 p-6 rounded-xl shadow mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials3}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">Ethan Patel</p>
                <p className="text-gray-500 text-sm">On Service</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={4} />
            </div>

            <p className="text-gray-600">
              "The service felt designed around me. 
              Booknest made my trip smoother and way more memorable."
            </p>
          </div>


          <div className="bg-primary/5 p-6 rounded-xl shadow mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials4}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">Sophia Lee</p>
                <p className="text-gray-500 text-sm">On Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={2} />
            </div>
            <p className="text-gray-600">
              "I've used other platforms, 
              but Booknest stands out for its genuine care and personalized touches."
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials5}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">Liam Johnson</p>
                <p className="text-gray-500 text-sm">On Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={3} />
            </div>
            <p className="text-gray-600">
              "From start to finish, Booknest felt like home. 
              Clean, thoughtful, and incredibly user-focused."
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials6}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">Olivia Martinez</p>
                <p className="text-gray-500 text-sm">On Booking</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={5} />
            </div>
            <p className="text-gray-600">
              "Booking was easy, 
              but what surprised me was how personal and smooth the entire stay was."
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials7}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">Noah Wilson</p>
                <p className="text-gray-500 text-sm">On Details</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={4} />
            </div>
            <p className="text-gray-600">
              "Booknest nailed every detail. 
              It felt like someone knew exactly what I needed."
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials8}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">Emma Davis</p>
                <p className="text-gray-500 text-sm">On Hospitality</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={4} />
            </div>
            <p className="text-gray-600">
              "I’ve never felt this looked after. 
              Booknest goes beyond just bookings — it’s thoughtful hospitality."
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials9}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">James Brown</p>
                <p className="text-gray-500 text-sm">On Usability</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={4} />
            </div>
            <p className="text-gray-600">
              "Super easy to use, 
              and the experience felt warm and personalized. Booknest gets it right."
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials10}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">Isabella Garcia</p>
                <p className="text-gray-500 text-sm">On Warm Hospitality</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={5} />
            </div>
            <p className="text-gray-600">
              "Booknest wasn’t just efficient.
              it made me feel genuinely welcomed and cared for."
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials11}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">Mia Thompson</p>
                <p className="text-gray-500 text-sm">On User Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={4} />
            </div>
            <p className="text-gray-600">
              "It’s rare to find an app that 
              combines ease with a human touch. Booknest does both."
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl shadow mt-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200">
                <img
                  src={assets.testimonials12}
                  alt=""
                  className="w-12 h-12 rounded-full object-fit"
                />
              </div>
              <div>
                <p className="font-playfair text-lg">Alexandra Green</p>
                <p className="text-gray-500 text-sm">On Personalization</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <StarRating rating={3} />
            </div>
            <p className="text-gray-600">
              "Loved the experience! Booknest turned an ordinary stay 
              into something that felt specially arranged for me."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      {/* <section className="bg-primary text-white rounded-xl p-16 text-center mb-20">
        <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
          Ready to enhance your stay?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Book unique experiences with your hotel reservation or separately
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all cursor-pointer"
        >
          Browse All Experiences
        </button>
      </section> */}
    </div>
  );
};

export default Experiences;
