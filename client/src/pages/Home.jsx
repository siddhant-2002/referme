import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center  ">
      {/* Animated background shapes */}
      <div className="absolute inset-0 ">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] opacity-20 animate-spin-slow">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="heroGradient1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </radialGradient>
            </defs>
            <circle cx="300" cy="300" r="300" fill="url(#heroGradient1)" />
          </svg>
        </div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] opacity-20 animate-spin-slow-reverse">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="heroGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="200" fill="url(#heroGradient2)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl px-4 md:px-10 py-12 md:py-20 gap-12 md:gap-20">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-up max-w-xl md:max-w-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-5 leading-tight">
            Empower Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
              Learning
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-5 animate-fade-in-up delay-100">
            All-in-one platform for study materials, notes, and code.
          </h2>
          <p className="text-base md:text-lg text-white mb-8 max-w-md animate-fade-in-up delay-200">
            Discover, share, and access high-quality resources curated by the
            community. Start your journey to academic excellence today!
          </p>
          <div className="animate-fade-in-up delay-300">
            <Button
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-8 rounded-2xl shadow-xl hover:scale-105 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 focus:ring-4 focus:ring-purple-200 focus:outline-none"
              onClick={() => navigate("/Search")}
            >
              Explore Now
            </Button>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 flex items-center justify-center animate-fade-in w-full md:w-auto mb-8 md:mb-0">
          <div className="relative flex items-center justify-center w-full max-w-xs md:max-w-md lg:max-w-lg group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <img
              src="mainimg.png"
              alt="ReferMe Hero"
              className="relative w-full rounded-3xl shadow-2xl border-4 border-white/40 bg-white/30 backdrop-blur-md hover:scale-105 transition-all duration-300 object-cover transform hover:rotate-1"
              style={{ minHeight: "260px", maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
