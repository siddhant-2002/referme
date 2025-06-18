import React from "react";

const Mission = () => {
  return (
    <section id="mission" className="w-full py-24 relative ">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] opacity-20 animate-spin-slow">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="missionGradient1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </radialGradient>
            </defs>
            <circle cx="300" cy="300" r="300" fill="url(#missionGradient1)" />
          </svg>
        </div> */}
        <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] opacity-20 animate-spin-slow-reverse">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="missionGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="200" fill="url(#missionGradient2)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center p-12 gap-16">
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 group animate-fade-in">
          <div className="relative flex items-center justify-center w-full max-w-xs md:max-w-md lg:max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <img
              src="mission3.png"
              alt="Mission"
              className="relative w-full rounded-3xl shadow-2xl border-4 border-white/40 bg-white/30 backdrop-blur-md hover:scale-105 transition-all duration-300 object-cover transform hover:rotate-1"
              style={{ minHeight: "260px", maxHeight: "400px" }}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-5 leading-tight">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
              Mission
            </span>
          </h2>
          <div className="space-y-6 animate-fade-in-up delay-100">
            <p className="text-lg md:text-xl leading-relaxed text-white text-center md:text-left">
              An online platform designed specifically for engineering students
              seeking comprehensive study materials, handwritten notes, and
              practical codes. We understand the challenges of engineering
              education and are committed to providing a platform that caters to
              your academic needs with precision and excellence.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <span className="text-2xl text-white group-hover:scale-110 transition-transform">
                  📚
                </span>
                <span className="text-white font-medium">Study Materials</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <span className="text-2xl text-white group-hover:scale-110 transition-transform">
                  ✍️
                </span>
                <span className="text-white font-medium">
                  Handwritten Notes
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <span className="text-2xl text-white group-hover:scale-110 transition-transform">
                  💻
                </span>
                <span className="text-white font-medium">Practical Codes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
