import React from "react";

const Features = () => {
  const features = [
    {
      title: "Notes",
      description: "Get concise notes for any topic, quick review or in-depth study.",
      image: "notes1.jpg",
      icon: "📚",
      gradient: "from-pink-400 via-purple-400 to-blue-400",
    },
    {
      title: "Practicals",
      description: "Apply theory through real-world experiments, and case studies.",
      image: "practical1.jpg",
      icon: "🔬",
      gradient: "from-blue-400 via-purple-400 to-pink-400",
    },
    {
      title: "Projects",
      description: "Take on transformative projects from idea to reality, challenging norms.",
      image: "project2.jpg",
      icon: "💡",
      gradient: "from-purple-400 via-pink-400 to-blue-400",
    },
    {
      title: "Question Paper",
      description: "Access a wide range of past exam papers across subjects.",
      image: "pyq.jpg",
      icon: "📝",
      gradient: "from-blue-400 via-pink-400 to-purple-400",
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full flex items-center justify-center"
    >
      {/* Background shape */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] opacity-20 animate-spin-slow-reverse">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="featuresGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="200" fill="url(#featuresGradient)" />
          </svg>
        </div>
      </div> */}

      <div className="relative z-10 w-full max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
                Features
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></span>
            </span>
          </h1>
        </div>

        {/* Grid Layout (Preserved as it is) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col md:flex`}
              style={{ height: "260px" }} // Scaled height
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-40 md:h-full">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-3 left-4 text-3xl">{feature.icon}</div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                <h3
                  className={`font-bold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
                <div
                  className={`mt-3 w-16 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-10 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
