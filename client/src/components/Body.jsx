import React from "react";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Home from "../pages/Home";
import Features from "./Features";
import Mission from "./Mission";



const Body = () => {
	return (
		<div className="min-h-screen overflow-x-hidden overflow-y-hidden">

			<Home />

			<Aboutus />

			<Mission />

			<Features />


			<Contactus />

			


		</div>

	);
};

export default Body;
