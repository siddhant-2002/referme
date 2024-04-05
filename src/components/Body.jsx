import React from "react";

const Body = () => {
	return (
		<div>
			{/* introuduction */}
			<div className="body-container flex flex-col md:flex-row justify-between p-8">
				<div className="info-container w-full md:w-1/2 bg-white p-8 md:p-28">
					<h2 className="text-4xl font-semibold mb-4 font-body">
						Welcome to <span>Refer ME</span>
					</h2>
					<p className="text-xl text-gray-800 leading-relaxed font-body">
						An online platform designed specifically for engineering
						students seeking comprehensive study materials,
						handwritten notes, and practical codes. We understand
						the challenges of engineering education and are
						committed to providing a platform that caters to your
						academic needs with precision and excellence.
					</p>
					<button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Explore Now
    </button>
				</div>
				<div className="image-container w-full md:w-1/2 flex justify-around">
					<img
						src="mainimg.png"
						className="w-full md:w-50 h-auto"
						alt=""
					/>
				</div>
			</div>

			{/* About Us */}
			<div className="about-container flex flex-col md:flex-row justify-between p-8 bg-white">
				<div className="info-container w-full md:w-1/2  md:p-28">
					<h2 className="text-4xl font-semibold mb-4 font-body">
						About Us
					</h2>
					<p className="text-xl text-gray-800 leading-relaxed font-body">
					Welcome to Refer ME...! We are a group of passionate engineering students dedicated to revolutionizing the way students learn and collaborate in their academic journeys.
					<br />
					 Our mission is to empower engineering students with the resources they need to excel in their studies and beyond. We believe that education is the key to unlocking endless opportunities, and we are committed to providing a platform where students can access high-quality study materials, share knowledge, and support each other's growth.
					</p>
				</div>
				<div className="image-container  md:w-1/2 flex justify-around w-50">
					<img
						src="aboutus.png"
						className="w-full md:w-50 h-auto"
						alt="About Us"
					/>
				</div>
			</div>

			{/* contact us */}

			<div className="contact-container flex flex-col md:flex-row justify-between p-8 bg-white">
				<div className="logo-container w-full md:w-1/2 flex justify-center items-center p-2">
					<img
						src="contactus.png"
						alt="Logo"
						className="w-full md:w-100 h-auto"
					/>
				</div>
				<div className="form-container w-full md:w-1/2 p-24">
					<h2 className="text-4xl font-semibold mb-4 font-body">
						Contact Us
					</h2>
					<form className="flex flex-col">
						<label
							htmlFor="name"
							className="text-lg font-body mb-2"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							className="border border-gray-300 rounded-md py-2 px-3 mb-4"
							placeholder="Enter your name"
						/>

						<label
							htmlFor="email"
							className="text-lg font-body mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							className="border border-gray-300 rounded-md py-2 px-3 mb-4"
							placeholder="Enter your email"
						/>

						<label
							htmlFor="message"
							className="text-lg font-body mb-2"
						>
							Message
						</label>
						<textarea
							id="message"
							className="border border-gray-300 rounded-md py-2 px-3 mb-4"
							placeholder="Enter your message"
							rows="4"
						></textarea>

						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Body;
