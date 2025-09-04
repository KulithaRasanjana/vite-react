import React from "react";
import { Link } from "react-router-dom";
//import { Facebook, Instagram, Book, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#41B2A3] text-white py-8 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-7 gap-6 text-center md:text-left">
        {/* About */}
        <div className="md:col-span-2 pr-12">
          <h3
            className="mb-2"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 600,
              fontSize: "30px",
            }}
          >
            Light House Beach Home
          </h3>
          <p className="text-sm text-justify">
            Light House Beach Home, Devinuwara - A cozy beachfront stay with ocean views, direct beach access, and warm hospitality.
            Perfect for relaxation, cultural exploration, and unforgettable seaside getaways in southern Sri Lanka.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/booking" className="hover:underline">
                Rooms Booking
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:underline">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/explore" className="hover:underline">
                Explore
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                F.A.Q
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Social Media</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="https://www.facebook.com/share/1CSZKJbe9J/?mibextid=wwXIfr" className="hover:underline">
                FaceBook
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/lighthouse_beach_home?igsh=dmdoZXEza2dyZnhn&utm_source=qr" className="hover:underline">
                Instagram
              </Link>
            </li>
            <li>
              <Link to="https://www.booking.com/Share-Vj9jOe" className="hover:underline">
                Booking.com
              </Link>
            </li>
          </ul>
        </div>

        {/* News Letter */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <p className="text-sm">
            Kindly subscribe to our newsletter to get the latest deals on our rooms and vacation discounts.
          </p>
          <form className="mt-2 flex"> {/* Added flex to the form for proper alignment */}
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-white/20 bg-white text-[#41B2A3] placeholder:text-[#41B2A3]/70 flex-grow" // Added flex-grow
            />
            <button className="bg-[#41B2A3] text-white px-5 py-2 rounded-r-md border-4 border-white hover:bg-white hover:text-[#41B2A3] transition-colors hover:border-[#41B2A3]">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-6 text-sm border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Lighthouse Beach Home. All rights reserved.
      </div>
      <div className="text-center mt-2 text-sm">
        Developed by{" "}
        <a href="https://opiksoft.com/" className="hover:underline">
          {/* <img src={developer} alt="Opiksoft.com" className="inline-block align-middle w-19 h-5" /> */}
          Opiksoft.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
