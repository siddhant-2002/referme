import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_53xegjv", "template_ckkuztf", form.current, {
        publicKey: "dw_4w5q7Uh-bafJom",
      })
      .then(
        () => {
          toast.success("Form submitted successfully!");
        },
        (error) => {
          toast.error("There was an error submitting the form.");
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-20">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] opacity-20 animate-spin-slow">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="contactGradient1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </radialGradient>
            </defs>
            <circle cx="300" cy="300" r="300" fill="url(#contactGradient1)" />
          </svg>
        </div>
        {/* <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] opacity-20 animate-spin-slow-reverse">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="contactGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="200" fill="url(#contactGradient2)" />
          </svg>
        </div> */}
      </div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl px-4 md:px-10 py-8 md:py-12 gap-8 md:gap-12 mb-20">
        {/* Left: Contact Form */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-up max-w-xl md:max-w-lg">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-3 leading-tight">
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
              Touch
            </span>
          </h1>
          <p className="text-sm md:text-base text-white mb-4 max-w-md animate-fade-in-up delay-200">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full flex flex-col gap-3 animate-fade-in-up delay-300"
          >
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/20"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/20"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/20 resize-none"
                placeholder="Enter your message"
                rows="3"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 rounded-xl shadow-xl hover:scale-105 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 focus:ring-4 focus:ring-purple-200 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Image */}
        <div className="flex-1 flex items-center justify-center animate-fade-in w-full md:w-auto mb-4 md:mb-0">
          <div className="relative flex items-center justify-center w-full max-w-xs md:max-w-md lg:max-w-lg group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <img
              src="contactus.png"
              alt="Contact Us"
              className="relative w-full rounded-3xl shadow-2xl border-4 border-white/40 bg-white/30 backdrop-blur-md hover:scale-105 transition-all duration-300 object-cover transform hover:rotate-1"
              style={{ minHeight: "200px", maxHeight: "300px" }}
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contactus;
