import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;

  @media (max-width: 1117px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 1117px) {
    display: flex;
  }
`;

const Header = ({ isAuthenticated }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/#about-us", label: "About Us" },
    { to: "/#mission", label: "Mission" },
    { to: "/#features", label: "Features" },
    { to: "/#contactus", label: "Contact Us" },
    { to: "/Form", label: "Login" },
    { to: "/signup", label: "Sign Up" },
  ];

  return (
    <header
      className={`w-full z-50 px-6 sm:px-20 py-4 sticky top-0 transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
      role="banner"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"></div>

      <div className="relative z-10 flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg p-1"
          aria-label="ReferMe Home"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <img
              src="logo-2.png"
              className="relative w-auto h-10 object-contain transition-all duration-300 group-hover:scale-105"
              alt="ReferMe Logo"
            />
          </div>
        </Link>

        <HamburgerMenu>
          <Hamburger />
        </HamburgerMenu>

        <Navigation role="navigation" aria-label="Main navigation">
          <ul className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {menuItems.map((item, index) => {
              const isHash = item.to.includes("#");
              const isActive = isHash
                ? location.hash === item.to.split("#")[1] ||
                  location.hash === item.to
                : location.pathname === item.to;

              return (
                <li key={index} className="relative group">
                  <Link
                    to={item.to}
                    className={`text-base font-medium px-5 py-2.5   transform-gpu ${
                      isActive
                        ? " text-white shadow-lg scale-105"
                        : "text-white/90 hover:text-white "
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  <div
                    className={`absolute left-1/2 -bottom-1 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition-all duration-300 ease-out transform -translate-x-1/2 rounded-full ${
                      isActive ? "w-full" : ""
                    }`}
                    aria-hidden="true"
                  ></div>
                </li>
              );
            })}
          </ul>
        </Navigation>
      </div>
    </header>
  );
};

export default Header;
