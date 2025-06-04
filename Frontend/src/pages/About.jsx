import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // Team members data

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: assets.team1,
      bio: "Tech entrepreneur passionate about transforming travel experiences",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Head of Partnerships",
      image: assets.team2,
      bio: "Connects travelers with the finest hotel partners worldwide",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Tech Lead",
      image: assets.team3,
      bio: "Builds seamless booking experiences",
    },
  ];

   // Stats shown in the statistics section
  const stats = [
    { number: "500+", label: "Partner Hotels" },
    { number: "1M+", label: "Travelers Served" },
    { number: "50+", label: "Destinations" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen">
      
      {/* Hero Section */}

      <div className="relative h-96 rounded-xl overflow-hidden mb-20">
        <img
          src={assets.aboutHero}
          alt="Travel booking platform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white">
            Our Story
          </h1>
        </div>
      </div>

      {/* Mission Section */}

      <section className="mb-20">
        <Title
          title="The Smarter Way to Book"
          subTitle="Connecting travelers with exceptional accommodations worldwide"
          align="center"
        />

      {/* Text content about the platform */}

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Left column - Company description text */}

          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-medium">Our Platform</h3>
            <p className="text-gray-600 text-justify">
              Founded in 2025, BookNest was created to simplify hotel discovery
              and booking, transforming how travelers find their ideal
              accommodations with ease, confidence, and peace of mind. We are
              not a hotel chain but your trusted partner, offering a carefully
              curated selection of premium hotels that consistently meet the
              highest standards of comfort, quality, and exceptional
              personalized service. Whether you’re planning a relaxing getaway,
              a business trip, or an adventurous vacation, BookNest provides
              personalized recommendations and seamless booking experiences
              tailored specifically to your unique preferences and travel needs.
              Our advanced technology intelligently matches your requirements
              with hand-picked hotels, while our comprehensive price comparison
              tools ensure you receive the best possible value for your stay.
              Supported by expert insights, real customer reviews, and a
              dedicated customer support team, we are committed to making your
              journey of finding the perfect stay effortless, enjoyable, and
              worry-free. Discover the difference with BookNest where your ideal
              stay truly awaits, ready to turn your travel dreams into reality.
            </p>
          </div>

          {/* Right column - Mission image */}

          <div className="relative h-87 rounded-xl overflow-hidden">
            <img
              src={assets.aboutMission}
              alt="Person using booking app"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}

      <section className="bg-gray-50 py-16 rounded-xl mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <p className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}

      <section className="mb-20">
        <Title
          title="Why Choose BookNest?"
          subTitle="We make hotel booking effortless"
          align="center"
        />

        {/* Highlights of the service features */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-primary/5 p-6 rounded-xl shadow-sm">
            <h3 className="font-playfair text-xl font-bold mb-3 text-center text-blue-500">
              Curated Selection
            </h3>
            <p className="text-gray-600 text-center">
              Every property in our network meets strict quality standards for
              comfort, service, and guest satisfaction.
            </p>
          </div>
          <div className="bg-primary/5 p-6 rounded-xl shadow-sm">
            <h3 className="font-playfair text-xl font-bold mb-3 text-center text-blue-500">
              Best Price Guarantee
            </h3>
            <p className="text-gray-600 text-center">
              We compare prices across providers to ensure you always get the
              most competitive rates.
            </p>
          </div>
        
        {/* Seamless Experience benefit */}

          <div className="bg-primary/5 p-6 rounded-xl shadow-sm">
            <h3 className="font-playfair text-xl font-bold mb-3 text-center text-blue-500">
              Seamless Experience
            </h3>
            <p className="text-gray-600 text-center">
              From discovery to booking to stay - we optimize every step of your
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}

      <section className="mb-20">
        <Title
          title="Meet Our Team"
          subTitle="The people building your perfect booking experience"
          align="center"
        />

      {/* Three-column grid of team members */}
      
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="group text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-primary transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member info */}

              <h3 className="text-xl font-playfair font-medium">
                {member.name}
              </h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-To-Action Section */}
      
      <section className="bg-primary text-white rounded-xl p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
          Ready to find your perfect stay?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Join millions of travelers who trust BookNest for their accommodation
          needs.
        </p>
        <button
          onClick={() => navigate("/rooms")}
          className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all"
        >
          Browse Hotels
        </button>
      </section>
    </div>
  );
};

export default About;
