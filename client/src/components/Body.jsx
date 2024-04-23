import React from "react";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Home from "../pages/Home";
import Features from "./Features";
import Mission from "./Mission";



const Body = () => {
	return (
		<div className="min-h-screen bg-off-white text-teal">

			<Home />

			<Aboutus />

			<Mission />

			<Features />


			<Contactus />

			{/* <Main /> */}


		</div>

	);
};

export default Body;
