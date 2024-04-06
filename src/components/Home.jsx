import React from "react";

const Home = () => {
	return (
		<div>
			<div className="container mx-auto px-4 p-20">
    <div className="flex flex-col md:flex-row justify-between py-8">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center animate-fade-in-left">
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
