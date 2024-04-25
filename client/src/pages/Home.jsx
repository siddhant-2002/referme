import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";


const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="m-10 rounded-xl bg-transparent border border-purple-400 hover:border-purple-500  hover:shadow-lg hover:scale-105 hover:shadow-glow transform transition-all duration-200">
			{/* bg-gradient-to-r from-[rgb(24,25,46)] to-[rgb(49,38,123)] backdrop-blur transition-all duration-2000 */}
			<div className="container mx-auto px-4 p-20">
				<div className="flex flex-col md:flex-row justify-between py-8">
					<div className="w-full md:w-1/2 flex flex-col items-center justify-center animate-fade-in-left">
						<h2 className="text-4xl font-bold mb-4 text-white">
							Welcome to{" "}
							<span className="text-white">Refer ME...!</span>
						</h2>
						<p className="text-xl leading-relaxed text-white">
							Engineer Your Future with Ease: Your Comprehensive
							Online Haven for Study Materials, Handwritten Notes,
							and Practical Codes
						</p>
						{/* <button className="mt-4 bg-teal hover:bg-light-teal text-off-white font-bold py-2 px-4 rounded" onClick={() => navigate('/Search')}>
							Explore Now
						</button> */}
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
