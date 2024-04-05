import React from "react";

const Body = () => {
	return (
		<div className="min-h-screen bg-off-white text-teal">
			<div className="container mx-auto px-4 p-20">
				<div className="flex flex-col md:flex-row justify-between py-8">
					<div className="w-full md:w-1/2 flex flex-col items-center justify-center">
						<h2 className="text-4xl font-bold mb-4 text-teal">
							Welcome to{" "}
							<span className="text-dark-blue">Refer ME...!</span>
						</h2>
						<p className="text-xl leading-relaxed">
							Engineer Your Future with Ease: Your Comprehensive
							Online Haven for Study Materials, Handwritten Notes,
							and Practical Codes
						</p>
						<button className="mt-4 bg-teal hover:bg-light-teal text-off-white font-bold py-2 px-4 rounded">
							Explore Now
						</button>
					</div>
					<div className="w-full md:w-1/2 flex justify-center">
						<img
							src="mainimg.png"
							className="w-3/4 h-auto"
							alt=""
						/>
					</div>
				</div>
			</div>
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

			{/* About Us */}
			<div className=" md:flex-row justify-between  ">
				<div className="w-full flex flex-col items-center justify-center md:p-28 bg-teal  text-off-white ">
					<h2 className="text-4xl font-semibold mb-4 font-body">
						About Us
					</h2>
					<p className="text-xl leading-relaxed text-center">
						Welcome to{" "}
						<span className="text-light-teal">Refer ME...!</span> We
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
				{/* <div className="w-full md:w-1/2 flex justify-center items-center">
					<img
						src="aboutus.png"
						className="w-full md:w-3/4 h-auto object-cover"
						alt="About Us"
					/>
				</div> */}
			</div>

			{/* contact us */}

			<div className="min-h-screen bg-off-white text-teal">
				<div className="container mx-auto px-4 p-20">
					<div className="flex flex-col md:flex-row justify-between py-8">
						<div className="w-full md:w-1/2 flex justify-center items-center p-2">
							<img
								src="contactus.png"
								alt="Logo"
								className="w-full md:w-3/4 h-auto"
							/>
						</div>
						<div className="w-full md:w-1/2 flex flex-col items-center justify-center p-24">
							<h2 className="text-4xl font-bold mb-4 text-teal">
								Contact Us
							</h2>
							<form className=" w-full flex flex-col">
								<label
									htmlFor="name"
									className="text-lg font-body mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									className=" w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
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
									className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
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
									className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
									placeholder="Enter your message"
									rows="4"
								></textarea>

								<button
									type="submit"
									className="mt-4 bg-teal hover:bg-light-teal text-off-white font-bold py-2 px-4 rounded"
								>
									Send Message
								</button>

							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Body;
