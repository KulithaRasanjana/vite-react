import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/Logo.webp";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Rooms", path: "/rooms" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-2 relative z-50 bg-gray-100">
      <div className="logo">
        <img src={logo} alt="Logo" className="h-[90px] md:h-[90px]" />
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-around w-[30px] h-[25px] cursor-pointer z-50"
      >
        <span
          className={`w-full h-0.5 bg-black rounded-sm transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-[11px]" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-black rounded-sm transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-black rounded-sm transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[11px]" : ""
          }`}
        ></span>
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-4 lg:space-x-[60px] items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`text-black font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-[#41B2A3] ${
              location.pathname === item.path
                ? "after:w-full"
                : "after:w-0 hover:after:w-full after:transition-all"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Book now (desktop only) */}
      <a
        href="/booking"
        className="hidden md:block bg-[#41B2A3] text-white px-9 py-3 rounded-md no-underline mr-23"
      >
        Book now
      </a>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-500 ease-in-out z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="flex justify-center items-center mt-8">
            <img src={logo} alt="Logo" className="h-[200px]" />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-3xl font-medium ${
                location.pathname === item.path
                  ? "text-[#41B2A3] underline underline-offset-8"
                  : "text-black"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="#"
            className="bg-[#41B2A3] text-white px-6 py-3 rounded-md text-xl no-underline mt-8"
            onClick={() => setIsOpen(false)}
          >
            Book now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;