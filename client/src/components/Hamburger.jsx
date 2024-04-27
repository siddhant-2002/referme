import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <style>
                {`
            /* styles.css */

            body {
              font-family: "Lato", sans-serif;
            }
            
            .sidepanel  {
              width: 0;
              position: fixed;
              z-index: 1;
              height: 250px;
              top: 0;
              left: 0;
              background-color: #111;
              overflow-x: hidden;
              transition: 0.5s;
              padding-top: 60px;
            }
            
            .sidepanel.open {
              width: 250px;
            }
            
            .sidepanel a {
              padding: 8px 8px 8px 32px;
              text-decoration: none;
              font-size: 25px;
              color: #818181;
              display: block;
              transition: 0.3s;
            }
            
            .sidepanel a:hover {
              color: #f1f1f1;
            }
            
            .sidepanel .closebtn {
              position: absolute;
              top: 0;
              right: 25px;
              font-size: 36px;
            }
            
            .openbtn {
              font-size: 20px;
              cursor: pointer;
              background-color: #111;
              color: white;
              padding: 10px 15px;
              border: none;
            }
            
            .openbtn:hover {
              background-color:#444;
            }
            `}
            </style>
            <div className='text-white'>
                <div id="mySidepanel" className={`fixed top-0 left-0  bg-darkish-blur transform transition-transform ease-in-out duration-200 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 px-8 py-4 z-50`}>
                    <span href="#" className="absolute top-0 right-0 mt-4 mr-4 text-gray-200 cursor-pointer" onClick={closeNav}>×</span>
                    <ul className="flex flex-col sm:flex-row gap-8 justify-between">
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
                    </ul>
                </div>

                <button className="text-white text-4xl  bg-transparent px-4 py-2 rounded" onClick={openNav}>☰</button>
            </div>
        </div>

    );
};

export default Hamburger;