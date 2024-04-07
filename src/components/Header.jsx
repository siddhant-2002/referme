import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({behavior: "smooth"})
      }
    } else {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }
  }, [location,]);

  return (
    <header className="w-full z-10 flex items-center justify-between px-8 py-4 shadow-md bg-dark-blue">
      <div className="flex items-center justify-between w-full">
        <a href="/"><img src="logo-2.png" className="w-25 h-10" alt="logo" /></a>
        <nav className="flex flex-col sm:flex-row sm:justify-between">
          <ul className="flex flex-col sm:flex-row gap-8 justify-between">
            <li><a href="/" className="text-lg hover:text-light-teal text-off-white">Home</a></li>
            <li><Link to="/#about-us" className="text-lg hover:text-light-teal text-off-white">About Us</Link></li>
            <li><Link to="/#mission" className="text-lg hover:text-light-teal text-off-white">Mission</Link></li>
            <li><Link to="/#features" className="text-lg hover:text-light-teal text-off-white">Features</Link></li>
            <li><Link to="/#contactus" className="text-lg hover:text-light-teal text-off-white">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;