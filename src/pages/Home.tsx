import React from "react";
import { Link } from "react-router-dom";
import { Star } from 'lucide-react';
import heroImg from "../assets/heroImg.webp";
import luxuriousroom1 from "../assets/luxuriousroom1.webp";
import luxuriousroom2 from "../assets/luxuriousroom2.webp";
import luxuriousroom3 from "../assets/luxuriousroom3.webp";
import luxuriousroombg from "../assets/luxuriousroomsbg.webp";
// Import profile images
import profileMiriam from "../assets/Miriam.webp";
import profileAnastasiya from "../assets/Anastasiya.webp";
import profilePeter from "../assets/Peter.webp";

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen md:h-[90vh] flex items-center md:bg-gray-100">
        {/* Mobile: Full-width dark background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Desktop: Image on the right half */}
        <div
          className="hidden md:block absolute top-0 right-12 w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>

        {/* Content - Visible on both mobile and desktop */}
        <div className="relative z-10 w-full px-6 md:w-1/2 md:px-12 md:-mt-25 text-white md:text-black">
          <h2
            className="text-[#41B2A3] mb-2"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 600,
              fontSize: "50px",
            }}
          >
            Light House Beach Home
          </h2>

          <h1
            className="leading-tight"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700,
              fontSize: "55px",
            }}
          >
            Hotel for every <br /> moment rich in <br /> emotion
          </h1>

          <p className="text-lg text-gray-200 md:text-gray-700 mt-4"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 500,
              fontSize: "15px",
            }}>
            Every moment feels like the first time <br /> in Lighthouse Beach Home.
          </p>

          <div className="mt-6 flex items-center space-x-4">
            <a
              href="/booking"
              className="bg-[#41B2A3] text-white px-8 py-3 rounded-full font-medium no-underline"
            >
              Book now
            </a>
            <Link
              to="/explore"
              className="flex items-center space-x-2 cursor-pointer text-lg font-medium text-white md:text-black"
            >
              <i className="fa-solid fa-circle-play text-5xl mb-1"></i>
              <span>Take a tour</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <div className="relative z-20 md:-mt-30">
        <div className="flex flex-col md:flex-row justify-around p-6 bg-white mx-6 md:mx-12 text-center md:text-left space-y-4 md:space-y-0 shadow-lg">
          <div>
            <i className="fas fa-location-dot text-xl mb-2"></i>{" "}
            <b>Location</b> <br /> Matara
          </div>
          <div>
            <i className="fas fa-bed text-xl mb-2"></i> <b>Room type</b> <br /> Standard
          </div>
          <div>
            <i className="fas fa-user text-xl mb-2"></i> <b>Person</b> <br /> 01
          </div>
          <div>
            <i className="fas fa-calendar-alt text-xl mb-2"></i> <b>Check in</b> <br /> 20 Aug 2025
          </div>
          <div>
            <i className="fas fa-calendar-alt text-xl mb-2"></i> <b>Check out</b> <br /> 22 Aug 2025
          </div>
          <a
            href="/booking"
            className="bg-[#41B2A3] text-white px-9 py-3 rounded-md no-underline"
          >
            Book now
          </a>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="text-center p-[50px]">
        <h2 className="text-3xl font-bold"
          style={{
            fontFamily: "'Poppins'",
            fontWeight: 500,
            fontSize: "40px",
          }}>Our Facilities</h2>
        <p className="mt-2 text-gray-600">
          We offer modern (5 star) hotel facilities for your comfort.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-5 pr-12 pl-12">
          {/* The change is in the className of the div below */}
          <div className="bg-[#f8f8f8] p-5 rounded-lg flex flex-col items-center justify-center h-[200px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <i className="fas fa-person-swimming text-3xl mb-2"></i>
            <span>Beach Access</span>
          </div>
          <div className="bg-[#f8f8f8] p-5 rounded-lg flex flex-col items-center justify-center h-[200px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <i className="fas fa-wifi text-3xl mb-2"></i>
            <span>Wifi</span>
          </div>
          <div className="bg-[#f8f8f8] p-5 rounded-lg flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <i className="fas fa-mug-saucer text-3xl mb-2"></i>
            <span>Breakfast</span>
          </div>
          <div className="bg-[#f8f8f8] p-5 rounded-lg flex flex-col items-center justify-center h-[200px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <i className="fas fa-concierge-bell text-3xl mb-2"></i>
            <span>Room Service</span>
          </div>
          <div className="bg-[#f8f8f8] p-5 rounded-lg flex flex-col items-center justify-center h-[200px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <i className="fas fa-utensils text-3xl mb-2"></i>
            <span>Restaurant</span>
          </div>
          <div className="bg-[#f8f8f8] p-5 rounded-lg flex flex-col items-center justify-center h-[200px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <i className="fas fa-lightbulb text-3xl mb-2"></i>
            <span>24/7 Light</span>
          </div>
          <div className="bg-[#f8f8f8] p-5 rounded-lg flex flex-col items-center justify-center h-[200px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <i className="fas fa-smoking-ban text-3xl mb-2"></i>
            <span>Non Smoking Rooms</span>
          </div>
          <div className="bg-[#f8f8f8] p-5 rounded-lg flex flex-col items-center justify-center h-[200px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <i className="fas fa-parking text-3xl mb-2"></i>
            <span>Parking space</span>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section
        className="relative p-[50px] text-white text-center"
        style={{
          backgroundImage: `url(${luxuriousroombg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay with reduced opacity */}
        <div className="absolute inset-0 bg-[#41B2A3] opacity-80"></div>

        {/* Content */}
        <div className="relative z-10">

          <h2
            style={{
              fontFamily: "'Raleway'",
              fontWeight: 500,
              fontSize: "40px",
            }}
          >
            Luxurious Rooms
          </h2>
          <div className="w-[100px] h-1 bg-white mx-auto mt-4"></div>
          <p className="mt-2">All rooms are designed for your comfort</p>
          <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
            {[luxuriousroom1, luxuriousroom2, luxuriousroom3].map((room, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-lg overflow-hidden w-full md:w-[400px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              >
                <img
                  src={room}
                  alt="Room"
                  className="w-full h-[360px] rounded-lg object-cover pl-6 pr-6 pt-6"
                />
                <p className="p-3 text-left  pl-6 pr-6 ">
                  Free Wifi, Extra sheets, Breakfast, and Room Service
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonies */}
      <section className="p-[50px] text-center">
        <h2
          style={{
            fontFamily: "'Raleway'",
            fontWeight: 500,
            fontSize: "50px",
          }}
        >
          Testimonies
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
          {[
            {
              date: "11 Mar, 2025",
              name: "Miriam",
              text: "We really enjoyed our stay here and would definitely recommend! It is a beautiful little beach used mostly by locals where you can go swimming (and also a little bit of snorkelling). The room is one of the best we had during our one month in sri lanka - everything nice, clean, thoughtful and the sea view is a big plus. Also the restaurant owned by the brother is super nice and chilled with various options to hang out (hammocks and so one). We would definitely come back to this little paradise",
              image: profileMiriam,
            },
            {
              date: "13 Mar, 2025",
              name: "Anastasiya",
              text: "A very pleasant and calm place to spend a day or several days. The picturesque lighthouse and the bay are within walking distance.The breakfast was wonderful ,and you can also order something for dinner. I recommend this place!",
              image: profileAnastasiya,
            },
            {
              date: "30 Mar, 2025",
              name: "Peter",
              text: "This place is wonderful. It's located in a very pretty bay next to the lighthouse. The family who run it will do everything they can to make your stay memorable. The room was very big and very clean. The breakfast was one of the best we had in 3 months in Sri Lanka. Dinner was cooked fresh and very tasty. We stayed for 5 nights and wish we could have stayed longer.",
              image: profilePeter,
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-[#f8f8f8] p-5 rounded-lg w-full md:w-[400px] md:h-[500px] text-left flex flex-col justify-between"
            >
              <div> {/* Wrapper for top content */}
                <div className="flex justify-between items-center mb-2 pb-6">
                  <small className="text-gray-500">{t.date}</small>
                  <span className="text-yellow-200 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                </div>
                <p className="my-2 text-gray-700 text-justify relative">
                  <i className="fa-solid fa-quote-left text-3xl absolute -top-4 -left-4 text-[#C1B29E]"></i>
                  {t.text} <i className="fa-solid fa-quote-right text-3xl absolute -bottom-4 -right-4 text-[#C1B29E]"></i>
                </p>
              </div>
              <div className="item-bottom flex items-center gap-3 mt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="text-gray-800">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;