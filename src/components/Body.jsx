import React from "react";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Features from "./Features";
import Mission from "./Mission";

const Body = () => {
	return (
		<div className="min-h-screen bg-off-white text-teal">

			<Home/>
			{/* <div className="flex justify-between p-4 bg-teal">
				<p className="text-lg font-semibold text-off-white">
					This is some text on the left.
				</p>
				<p className="text-lg font-semibold text-off-white">
					An online platform designed specifically for engineering
					students seeking comprehensive study materials, handwritten
					notes, and practical codes. We understand the challenges of
					engineering education and are committed to providing a
					platform that caters to your academic needs with precision
					and excellence.
				</p>
			</div> */}
			{/* features */}
			<Features />
		

			<Aboutus/>

			<Mission/>

			<Contactus/>

			

			

		</div>

	);
};

export default Body;
