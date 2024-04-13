import React from "react";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Features from "./Features";
import Mission from "./Mission";
// import Form from "./Form";
// import User from "./User";



const Body = () => {
	return (
		<div className="min-h-screen bg-off-white text-teal">

			<Home />

			<Aboutus />

			<Mission />

			<Features />


			<Contactus />


		</div>

	);
};

export default Body;
