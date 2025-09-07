import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import heroImg from '../assets/hero2.webp';
import emailjs from '@emailjs/browser';
import { AppConfig } from '../utils/config';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const location = useLocation(); // Initialize the hook
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "",
    country: "",
    email: "",
    room: "",
    checkIn: "",
    checkOut: "",
    personCount: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);

  useEffect(() => {
    // Initialize EmailJS and reCAPTCHA
    if (AppConfig.emailJsBooking.publicKey) {
      emailjs.init(AppConfig.emailJsBooking.publicKey);
    }
    
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${AppConfig.recaptchaSiteKey}`;
    script.async = true;
    script.onload = () => setIsRecaptchaReady(true);
    script.onerror = () => {
      console.error("Failed to load reCAPTCHA script.");
      setStatus("error");
    };
    document.body.appendChild(script);

    // Check for state from the Home page and pre-fill form
    if (location.state) {
      const { personCount, checkIn, checkOut, roomType } = location.state as { personCount: string; checkIn: string; checkOut: string; roomType: string };
      setFormData(prevState => ({
        ...prevState,
        personCount: personCount || "",
        checkIn: checkIn || "",
        checkOut: checkOut || "",
        type: roomType || ""
      }));
    }

    return () => {
      document.body.removeChild(script);
    };
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (form.current && isRecaptchaReady) {
      try {
        const token = await window.grecaptcha.execute(AppConfig.recaptchaSiteKey, { action: 'booking_form' });
        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'g-recaptcha-response';
        tokenInput.value = token;
        form.current.appendChild(tokenInput);

        await emailjs.sendForm(
          AppConfig.emailJsBooking.serviceID,
          AppConfig.emailJsBooking.templateIDs,
          form.current,
        );

        form.current.removeChild(tokenInput);

        setStatus("sent");
        setFormData({ 
            name: "", 
            phone: "", 
            type: "",  
            country: "", 
            email: "", 
            room: "", 
            checkIn: "",
            checkOut: "", 
            personCount: "", 
            message: "" 
        });
      } catch (error) {
        setStatus("error");
        console.error("EmailJS Error:", error);
      }
    } else {
      setStatus("error");
    }
  };

  const renderStatusMessage = () => {
    if (status === 'sending') {
      return (
        <div className="text-center p-4 text-green-700">
          <p>Sending...</p>
        </div>
      );
    }
    if (status === 'sent') {
      return (
        <div className="text-center p-4 bg-green-100 text-green-800 rounded-md">
          <p>Thank you! Your message has been sent successfully. We will get back to you.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-4 bg-[#41B2A3] text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      );
    }
    if (status === 'error') {
      return (
        <div className="text-center p-4 bg-red-100 text-red-800 rounded-md">
          <p>Failed to send message. Please try again later.</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white text-center py-35 px-5 relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-45"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-5">Make An Appointment</h1>
          <p className="text-lg text-semibold">
            Have questions or want to book your stay?<br />Reach out to us via phone,
            email, or our online form.<br />We're here to help you plan your perfect
            beachfront getaway.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="container mx-auto px-5 py-16 flex flex-wrap gap-10 justify-center">
        {/* Form Container */}
        <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-black mb-6">
            Make An Appointment
          </h2>
          {renderStatusMessage()}
          {status !== 'sent' && (
            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              {/* Two-column grid for inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Select Country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                />
                <div className="relative">
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                  >
                    <option value="" disabled hidden>Select Type</option>
                    <option value="standard">Standard</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15 8.95V7h-1.05l-4.243 4.243L4.95 7H3.293L8 11.707z" /></svg>
                  </div>
                </div>
                <div className="relative">
                  <select
                    name="room"
                    value={formData.room}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                  >
                    <option value="" disabled hidden>Select Room</option>
                    <option value="triple-room-with-sea-view">Triple Room with Sea View</option>
                    <option value="budget-double-room">Budget Double Room</option>
                    <option value="superior-triple-room-with-sea-view">Superior Triple Room with Sea View</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15 8.95V7h-1.05l-4.243 4.243L4.95 7H3.293L8 11.707z" /></svg>
                  </div>
                </div>

                <div className="flex flex-col items-start w-full">
                  <label className="text-sm font-medium text-gray-700 mb-1">Check In</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label className="text-sm font-medium text-gray-700 mb-1">Check Out</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">Person</label>
                <input
                  type="number"
                  name="personCount"
                  placeholder="Person Count"
                  value={formData.personCount}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending' || !isRecaptchaReady}
                className="bg-[#41B2A3] text-white border border-[#41B2A3] px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#41B2A3] hover:border-[#41B2A3] transition-all duration-300 disabled:bg-gray-400"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Form;