import React from "react";

const mission = () => {
	return (
		<div>
			<div id="mission" className=" md:flex-row justify-between  ">
				<div className="container mx-auto px-4 p-10">
					<div className="flex flex-col md:flex-row justify-between animate-fade-in-left ">
						<div className="w-full md:w-1/2 flex justify-center items-center">
							<img
								src="mission.png"
								alt="Mission"
								className="w-3/4 h-auto mr-4"
							/>
						</div>
						<div className="w-full md:w-1/2 flex flex-col items-center justify-center animate-fade-in-right">
							<h2 className="text-4xl font-semibold mb-4 font-body">
								Our Mission
							</h2>
							<p className="text-xl leading-relaxed text-teal">
								An online platform designed specifically for
								engineering students seeking comprehensive study
								materials, handwritten notes, and practical codes.
								We understand the challenges of engineering
								education and are committed to providing a platform
								that caters to your academic needs with precision
								and excellence.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default mission;
