import React, { useState, useEffect } from "react";
import explorerheroImg from "../assets/explorerheroImg.webp";
import luxuriousroom from "../assets/luxuriousroom.webp";
import beachaccess from "../assets/beachaccess.webp";
import resturant from "../assets/resturant.webp";
import beachrock from "../assets/beachrock.webp"

// Placeholder for the fifth image
const placeholderImg = explorerheroImg;

// Create an array of all images for the slideshow
const images = [
  beachrock,
  beachaccess,
  placeholderImg
];

const Explore: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the image every 2 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const goToSlide = (slideIndex: number) => {
    setCurrentImageIndex(slideIndex);
  };

  return (
    <div className="bg-white text-black">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[600px] w-full overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Beach view"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-8">
          <div className="flex space-x-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Title */}
      <h2 className="text-center my-10"
        style={{
          fontFamily: "'Raleway'",
          fontWeight: 600,
          fontSize: "40px",
        }}
      >Take a tour</h2>

      {/* Luxurious Rooms */}
      <div className="w-4/5 mx-auto my-10 relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
        <img
          src={luxuriousroom}
          alt="Luxurious Room"
          className="w-full h-[650px] object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#41B2A3] w-3/5 pt-5 rounded-xl shadow-md text-center">
          <div className="bg-white">
            <h3 className="text-[#41B2A3] mb-2 p-4"
              style={{
                fontFamily: "'Raleway'",
                fontWeight: 600,
                fontSize: "24px",
              }}
            >
              Luxurious rooms
            </h3>
            <p className="text-gray-700 p-4">
              The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. 
              View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. 
              See more ideas about luxurious bedrooms, bedroom design
            </p>
          </div>
        </div>
      </div>

      {/* Beach Access */}
      <div className="w-4/5 mx-auto my-10 relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
        <img
          src={beachaccess}
          alt="Beach Access"
          className="w-full h-[650px] object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#41B2A3] w-3/5 pt-5 rounded-xl shadow-md text-center">
          <div className="bg-white">
            <h3 className="text-[#41B2A3] mb-2 p-4"
              style={{
                fontFamily: "'Raleway'",
                fontWeight: 600,
                fontSize: "24px",
              }}
            >
              Beach Access
            </h3>
            <p className="text-gray-700 p-4">
              Stay just steps from the sand at Light House Beach Home, offering direct beach access, cozy rooms, and unforgettable ocean views. 
              Relax, dine, and enjoy your perfect coastal getaway.
            </p>
          </div>
        </div>
      </div>

      {/* Restaurant */}
      <div className="w-4/5 mx-auto my-10 relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
        <img
          src={resturant}
          alt="Restaurant"
          className="w-full h-[650px] object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#41B2A3] w-3/5 pt-5 rounded-xl shadow-md text-center">
          <div className="bottom-5 bg-white">
            <h3 className="text-[#41B2A3] mb-2 p-4"
              style={{
                fontFamily: "'Raleway'",
                fontWeight: 600,
                fontSize: "24px",
              }}
            >Restaurant</h3>
            <p className="text-gray-700 p-4">
              The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas.
              View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again.
              See more ideas about luxurious bedrooms, bedroom design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;