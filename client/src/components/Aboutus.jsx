import React from "react";

const Aboutus = () => {
  return (
    <section
      id="about-us"
      className="relative min-h-screen w-full flex items-center justify-center "
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] opacity-20 animate-spin-slow-reverse">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="aboutGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="200" fill="url(#aboutGradient2)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 py-16 md:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
                ReferMe
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></span>
            </span>
          </h1>
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Main Content */}
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800 p-8 md:p-12">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300 pl-4">
                  Welcome to{" "}
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
                    ReferMe
                  </span>
                  ! We are a group of passionate engineering students dedicated
                  to revolutionizing the way students learn and collaborate in
                  their academic journeys.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300 pl-4">
                  Our mission is to empower engineering students with the
                  resources they need to excel in their studies and beyond. We
                  believe that education is the key to unlocking endless
                  opportunities, and we are committed to providing a platform
                  where students can access high-quality study materials, share
                  knowledge, and support each other's growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
