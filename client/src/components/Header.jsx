import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();


  React.useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,]);

  return (
    <header className="w-full z-10 flex items-center justify-between px-20 py-4  bg-transparant">
      {/* bg-gradient-to-r from-[rgb(14,15,36)] to-[rgb(39,28,113)] backdrop-blur transition-all duration-2000 */}
      <div className="flex items-center justify-between w-full">

        <img onClick={() => navigate('/Form')} src="logo-2.png" className="w-25 h-10" alt="logo" />


        <nav className="flex flex-col sm:flex-row sm:justify-between">
          {/* <ul className="flex flex-col sm:flex-row gap-8 justify-between">
                        <li><a href="/" className="text-lg hover:text-purple-500 text-off-white">Home</a></li>
                        <li><Link to="/#about-us" className="text-lg hover:text-purple-500 text-off-white">About Us</Link></li>
                        <li><Link to="/#mission" className="text-lg hover:text-purple-500 text-off-white">Mission</Link></li>
                        <li><Link to="/#features" className="text-lg hover:text-purple-500 text-off-white">Features</Link></li>
                        <li><Link to="/#contactus" className="text-lg hover:text-purple-500 text-off-white">Contact Us</Link></li>
                    </ul> */}
          <ul className="flex flex-col sm:flex-row gap-8 justify-between">
            <li>
              <a href="/" className="text-lg hover:text-purple-500 hover:scale-105 text-off-white hover: text-off-white bg-transparent hover:border hover:border-purple-500 px-5 py-3 rounded-full transition-all duration-200">
                Home
              </a>
            </li>
            <li>
              <Link to="/#about-us" className="text-lg hover:text-purple-500 hover:scale-105 text-off-white bg-transparent hover:border  hover:border-purple-500 px-5 py-3 rounded-full transition-all duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/#mission" className="text-lg hover:text-purple-500 hover:scale-105 text-off-white bg-transparent hover:border  hover:border-purple-500 px-5 py-3 rounded-full transition-all duration-200">
                Mission
              </Link>
            </li>
            <li>
              <Link to="/#features" className="text-lg hover:text-purple-500 hover:scale-105 text-off-white bg-transparent hover:border  hover:border-purple-500 px-5 py-3 rounded-full transition-all duration-200">
                Features
              </Link>
            </li>
            <li>
              <Link to="/#contactus" className="text-lg hover:text-purple-500 hover:scale-105 text-off-white bg-transparent hover:border  hover:border-purple-500 px-5 py-3 rounded-full transition-all duration-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;