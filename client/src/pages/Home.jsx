import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const AnimatedText = () => {
	const [text, setText] = useState('');
	const fullText = 'Reefer ME...!';
  
	useEffect(() => {
	  let index = 0;
	  const interval = setInterval(() => {
		setText((prevText) => prevText + fullText[index]);
		if (index < fullText.length - 1) {
		  index++;
		} else {
		  clearInterval(interval);
		}
	  }, 400); // Change this value to adjust the speed of the animation
  
	  return () => clearInterval(interval);
	}, []);
  
	return <span className="text-white">{text}</span>;
  };

  return (
    <div className="m-10 rounded-xl bg-transparent border border-purple-400 hover:border-purple-500  hover:shadow-lg hover:scale-105 hover:shadow-glow transform transition-all duration-200">
      <div className="container mx-auto px-4 p-20">
        <div className="flex flex-col md:flex-row justify-between py-8">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center animate-fade-in-left">
            <h2 className="text-4xl  mb-4 text-white">
              Welcome to{" "}
              <AnimatedText /> {/* Include the AnimatedText component here */}
            </h2>
            <p className="text-xl leading-relaxed text-white">
              Engineer Your Future with Ease: Your Comprehensive
              Online Haven for Study Materials, Handwritten Notes,
              and Practical Codes.
            </p>
            <div onClick={() => navigate('/Search')}>
              <Button  />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in-right">
            <img
              src="mainimg.png"
              className="w-3/4 h-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;