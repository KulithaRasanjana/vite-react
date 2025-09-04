import React, { useRef } from "react";
import { Monitor, ShowerHead, Wifi, ChevronDown } from "lucide-react";

const roomsData = [
  {
    title: "Triple Room With Sea View",
    price: "LKR 24,172",
    available: true,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Budget Double Room",
    price: "LKR 30,215",
    available: true,
    image:
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Budget Double Room",
    price: "LKR 24,172",
    available: true,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Superior Triple Room with Sea View",
    price: "LKR 30,215",
    available: true,
    image:
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Budget Double Room",
    price: "LKR 30,215",
    available: true,
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

const Rooms: React.FC = () => {
  const roomsSectionRef = useRef<HTMLDivElement>(null);

  const handleBooking = (room: string) => {
    alert(
      `Thank you for your interest in booking the ${room}! You will be redirected to our booking page.`
    );
  };

  const handleScrollToRooms = () => {
    roomsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center text-white text-center py-56 px-5 relative">
        <div className="absolute inset-0 bg-gray-700 opacity-45"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-5">Rooms and Suites</h1>
          <p className="text-lg">
            The elegant luxury bedrooms in this gallery showcase custom interior
            designs & decorating ideas. View pictures and find your perfect
            luxury bedroom design.
          </p>
        </div>
        {/* Scroll-down Button */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={handleScrollToRooms}
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronDown size={28} className="text-white" />
          </button>
        </div>
      </section>

      {/* Rooms Section */}
      <section ref={roomsSectionRef} className="container mx-auto px-5 py-16">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-12"></div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-[#41B2A3]">
                    {room.title}
                  </h3>
                  <div className="flex items-center text-[#41B2A3] font-medium">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span>{room.available ? "Available: Yes" : "Available: No"}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-[#41B2A3] mb-5">
                  {room.price}
                </div>
                <div className="w-full h-[1px] bg-[#41B2A3] mx-auto my-2"></div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#41B2A3]">
                      <Monitor size={20} className="text-[#41B2A3]" />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#41B2A3]">
                      <ShowerHead size={20} className="text-[#41B2A3]" />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#41B2A3]">
                      <Wifi size={20} className="text-[#41B2A3]" />
                    </div>
                  </div>
                  <button
                    onClick={() => handleBooking(room.title)}
                    className="bg-[#41B2A3] text-white py-3 px-8 rounded-md font-semibold hover:bg-[#369285] transition"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;