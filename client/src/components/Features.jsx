import React from 'react';

const Features = () => {
	const cards = ['Notes', 'Practicals', 'Projects', 'Question Paper'];
	const images = ['notes1.jpg', 'practical1.jpg', 'project2.jpg', 'pyq.jpg'];

	return (
		<div className="rounded-xl m-2 flex flex-col items-center justify-center  text-white  backdrop-blur transition-all duration-2000">
			<div id="features" className=" md:flex-row justify-between  ">
				<div className="p-6">
					<h1 className="text-3xl font-bold mb-4 text-center text-off-white">Features</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 p-5 py-10">
						{cards.map((card, index) => (
							<div className="border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center transform hover:scale-105 transition-transform duration-300    bg-whitish-blur backdrop-blur transition-all duration-2000 " key={index}>
								<h2 className="font-semibold text-xl mb-2 text-center ">{card}</h2>
								<img
									src={images[index]}
									className="w-3/4 h-auto my-4 rounded-3xl"
									alt={card}
								/>
								<p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						))}
					</div>

				</div>
			</div>
		</div>
	);
}

export default Features;