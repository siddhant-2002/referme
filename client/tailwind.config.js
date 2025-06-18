/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Noto Sans", "sans-serif"],
      },
      colors: {
        primary: "#2563eb", // Electric Blue
        secondary: "#ec4899", // Neon Pink
        accent: "#a3e635", // Lime Green
        background: "#0f172a", // Deep Navy
        surface: "#f1f5f9", // Soft White
        highlight: "#f59e42", // Orange
        muted: "#64748b", // Slate
        "dark-blue": "#003C43",
        teal: "#135D66",
        "light-teal": "#77B0AA",
        "off-white": "#E3FEF7",
        option: "#100F3A",
      },
      animation: {
        "fade-in-left": "fadeInLeft 2s ease-in-out",
        "fade-in-right": "fadeInRight 2s ease-in-out",
      },
      backgroundImage: (theme) => ({
        "radial-gradient":
          "radial-gradient(circle farthest-corner at 10% 20%, rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90%)",
        "linear-gradient":
          "linear-gradient(90.4deg, rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2%)",
      }),
      backgroundColor: (theme) => ({
        "whitish-blur": "rgba(255, 255, 255, 0.1)",
        "darkish-blur": "rgba(0, 0, 10, 0.7)",
      }),
      backdropFilter: {
        blur: "blur(20px)",
      },
    },
  },
  plugins: [],
};
