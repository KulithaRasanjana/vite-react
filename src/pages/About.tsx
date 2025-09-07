import React from "react";
import logo from "../assets/Logo.webp";
import heroImg from '../assets/hero2.webp';

const About: React.FC = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white text-center py-45 px-5 relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-45"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg font-semibold">
            The elegant luxury bedrooms in this gallery showcase custom interior<br />
            designs & decorating ideas. View pictures and find your<br />
            perfect luxury bedroom design.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-6 lg:px-10 py-16 items-start justify-start">
        <div className="pr-10 pl-10">
          <p className="text-justify text-gray-600 leading-relaxed mb-4"
            style={{
              fontFamily: "'Mulish'",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            Welcome to Light House Beach Home, a cozy family-run retreat tucked beside the iconic Dondra Lighthouse in Matara. Overlooking a tranquil bay with direct beach access, our homestay offers the perfect blend of comfort, relaxation, and Sri Lankan charm.
          </p>
          <p className="text-justify text-gray-600 leading-relaxed mb-4"
            style={{
              fontFamily: "'Mulish'",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            Wake up to the sound of the ocean, enjoy stunning sea views from your balcony, and unwind in our peaceful garden with hammocks and swings. Each room is designed with your comfort in mind, featuring private bathrooms, air conditioning, and thoughtful touches for a restful stay.
          </p>
          <p className="text-justify text-gray-600 leading-relaxed mb-4"
            style={{
              fontFamily: "'Mulish'",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            Our in-house café serves fresh breakfasts with tropical fruits, local specialties, and international favorites all with the ocean just steps away. For adventurers, snorkeling, cycling, and guided tours are available, while those seeking calm can enjoy beach strolls and quiet sunsets.
          </p>
          <p className="text-justify text-gray-600 leading-relaxed mb-4"
            style={{
              fontFamily: "'Mulish'",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            What truly sets us apart is our warm hospitality. Guests consistently praise our friendly service, homely atmosphere, and unbeatable location. With superb ratings for cleanliness, comfort, and value, Light House Beach Home is more than just a stay it’s an experience.Whether you’re here for a romantic escape, family holiday, or peaceful getaway, we invite you to feel at home by the sea.
          </p>
          <p className="text-justify text-gray-600 leading-relaxed mb-4"
            style={{
              fontFamily: "'Mulish'",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            At Light House Beach Home, every detail is crafted to make your stay memorable. From the gentle sea breeze drifting through your window to the personalized recommendations from our hosts, you’ll feel cared for from the moment you arrive. Our homestay is not just a place to sleep, but a gateway to experiencing the authentic beauty and culture of southern Sri Lanka.
          </p>
          <p className="text-justify text-gray-600 leading-relaxed mb-4"
            style={{
              fontFamily: "'Mulish'",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            Whether you’re exploring the historic Dondra Lighthouse, discovering hidden beaches, or simply sipping tea while watching the waves, each moment here is designed to bring peace and joy.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="text-center py-20 px-6">
        <div className="flex flex-col items-center justify-center">
          <h3
            className="mb-10"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 600,
              fontSize: "30px",
            }}
          >
            Light House Beach Home - Where the Ocean Meets Comfort.
          </h3>
          <div>
            <img src={logo} alt="Logo" className="h-[183px] md:h-[183px]" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;