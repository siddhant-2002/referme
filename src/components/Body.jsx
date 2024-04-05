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
			
		

			<Aboutus/>

			<Mission/>

			<Contactus/>

			{/* features */}
			<Features />

			

		</div>

	);
};

export default Body;
