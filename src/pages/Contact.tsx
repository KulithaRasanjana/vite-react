import React, { useState, useRef, useEffect } from "react";
import heroImg from '../assets/hero2.webp';
import emailjs from '@emailjs/browser';
import { AppConfig } from '../utils/config';

// Extend the Window interface to include the grecaptcha object for TypeScript
declare global {
  interface Window {
    grecaptcha: any;
  }
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle', 'sending', 'sent', 'error'
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);

  // Load the EmailJS public key and reCAPTCHA script on component mount
  useEffect(() => {
    // Initialize EmailJS public key
    if (AppConfig.emailJsContact.publicKey) {
      emailjs.init(AppConfig.emailJsContact.publicKey);
    }

    // Dynamically load the reCAPTCHA script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${AppConfig.recaptchaSiteKey}`;
    script.async = true;
    script.onload = () => {
      setIsRecaptchaReady(true);
    };
    script.onerror = () => {
      console.error("Failed to load reCAPTCHA script.");
      setStatus("error");
    };
    document.body.appendChild(script);

    return () => {
      // Clean up the script tag when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (form.current && isRecaptchaReady) {
      try {
        // Execute reCAPTCHA to get the token
        const token = await window.grecaptcha.execute(AppConfig.recaptchaSiteKey, { action: 'contact_form' });

        // Create a hidden input to hold the reCAPTCHA token.
        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'g-recaptcha-response';
        tokenInput.value = token;
        form.current.appendChild(tokenInput);

        // Send the form data with the reCAPTCHA token using EmailJS
        await emailjs.sendForm(
          AppConfig.emailJsContact.serviceID,
          AppConfig.emailJsContact.templateIDs,
          form.current,
        );

        // Remove the hidden token input after sending to clean up the form
        form.current.removeChild(tokenInput);

        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });

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
          <p>Thank you! Your message has been sent successfully. We will get back to you shortly.</p>
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
        className="bg-cover bg-center text-white text-center py-45 px-5 relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-35"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg font-semibold">
            Have questions or want to book your stay?<br />Reach out to us via phone,
            email, or our online form.<br />We're here to help you plan your perfect
            beachfront getaway.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-5 py-16 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Form */}
        <div className="min-w-[300px] w-full md:w-1/2 bg-white p-8">
          {renderStatusMessage()}
          {status !== 'sent' && (
            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              {/* Fullname and Email on a single line for desktop */}
              <div className="md:flex md:space-x-5 space-y-5 md:space-y-0">
                <div className="flex-1">
                  <label className="block mb-2 font-medium text-gray-700">
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g John Becker"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="johnbecker@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41B2A3] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your message here"
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
        {/* Contact Info */}
        <div className="min-w-[300px] w-full md:w-1/2 bg-white p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#41B2A3] mb-4 p-4">
              Contact Details
            </h3>
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-[#41B2A3] text-white w-10 h-10 flex items-center justify-center rounded-full mr-3">
                  <i className="fas fa-phone"></i>
                </div>
                <a href="tel:+94711916908" className="text-black hover:underline">
                  +94 71 191 6908
                </a>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-[#41B2A3] text-white w-10 h-10 flex items-center justify-center rounded-full mr-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <a href="mailto:info@lighthouse.com" className="text-black hover:underline">
                  info@lighthouse.com
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-[#41B2A3] text-white w-10 h-10 flex items-center justify-center rounded-full mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <a href="https://www.google.com/maps?q=Light+house+beach+home" className="text-black hover:underline">
                  Lighthouse Road, Devinuwara, Sri Lanka
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps?q=Light+house+beach+home&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lighthouse Road, Devinuwara, Sri Lanka"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;