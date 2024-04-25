import React from "react";

const Aboutus = () => {
	return (
		<div>
			{/* About Us */}
			<div id="about-us" className=" md:flex-row justify-between  ">
				<div className=" flex flex-col items-center justify-center md:p-28 rounded-xl m-2 text-white bg-gradient-to-r from-[rgb(14,15,36)] to-[rgb(39,28,113)] backdrop-blur transition-all duration-2000">
					<h2 className="text-4xl font-semibold mb-4 font-body">
						About Us
					</h2>
					<p className="text-xl leading-relaxed text-center">
						Welcome to{" "}
						<span className="text-white text-bold">Refer ME...!</span> We
						are a group of passionate engineering students dedicated
						to revolutionizing the way students learn and
						collaborate in their academic journeys.
						{/* <br /> */}
						Our mission is to empower engineering students with the
						resources they need to excel in their studies and
						beyond. We believe that education is the key to
						unlocking endless opportunities, and we are committed to
						providing a platform where students can access
						high-quality study materials, share knowledge, and
						support each other's growth.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
