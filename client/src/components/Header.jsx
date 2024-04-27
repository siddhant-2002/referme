import React from "react";
// import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from './Hamburger';
import styled from 'styled-components';

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

const Header = () => {
  const location = useLocation();
  // const navigate = useNavigate();


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
    <>



      <header className="w-full z-10 flex items-center justify-between px-20 py-4  bg-transparant">
        <div className="flex items-center justify-between w-full">

          <a href="/"><img src="logo-2.png" className="w-25 h-10" alt="logo" /></a>


          <HamburgerMenu >
            <Hamburger />
          </HamburgerMenu>


          <Navigation >

            <ul className=" ul flex  flex-col sm:flex-row gap-8 justify-between">
              <li>
                <a href="/" className="text-lg hover:text-purple-500 hover:scale-105 text-off-white  bg-transparent hover:border hover:border-purple-500 px-5 py-3 rounded-full transition-all duration-200">
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
              <li>
                <Link to="/Form" className="text-lg hover:text-purple-500 hover:scale-105 text-off-white bg-transparent hover:border hover:border-purple-500 px-5 py-3 rounded-full transition-all duration-200">
                  Login
                </Link>
              </li>
            </ul>
          </Navigation>
        </div>
      </header>
      {/* className="hamburger lg:hidden" */}
      {/* className=" navigation flex flex-col sm:flex-row sm:justify-between" */}
    </>
  );
};

export default Header;




