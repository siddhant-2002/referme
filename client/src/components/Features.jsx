import React from 'react';

const Features = () => {
	const cards = ['Notes', 'Practicals', 'Projects', 'Question Paper'];
	const images = ['notes1.jpg', 'practical1.jpg', 'project2.jpg', 'pyq.jpg'];

	return (
		<div>
			<div>
				<style>
					{`
						* {
							padding: 0;
							margin: 0;
							box-sizing: border-box;
						}
						
						body {
							background: linear-gradient(to bottom, #54a1f4, #b620f6);
							display: flex;
							justify-content: center;
							align-items: center;
							min-height: 100vh;
						}
						
						.wave {
							position: relative;
						}
						
						.wave span {
							position: relative;
							display: inline-block;
							font-size: 40px;
							color: #fff;
							text-transform: uppercase;
							animation: flip 2s infinite;
							animation-delay: calc(.2s * var(--i))
						}
						
						@keyframes flip {
						
							0%,
							80% {
								transform: rotateY(360deg)
							}
						}
					`}
				</style>
			</div>
			<div className="rounded-xl m-2 flex flex-col items-center justify-center  text-white  backdrop-blur transition-all duration-2000">
				<div id="features" className=" md:flex-row justify-between  ">
					<div className="p-6">
						<h2 className="text-4xl mb-4 font-body flex justify-center items-center ">
							<div className="wave justify-center items-center border-b border-white-500 py-5">
								<span style={{ '--i': 1 }}>F </span>
								<span style={{ '--i': 2 }}>e </span>
								<span style={{ '--i': 3 }}>a </span>
								<span style={{ '--i': 4 }}>t </span>
								<span style={{ '--i': 5 }}>u </span>
								<span style={{ '--i': 6 }}>r</span>
								<span style={{ '--i': 7 }}>e</span>
								<span style={{ '--i': 8 }}>s</span>
							</div>
						</h2>
						<br />
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 p-5 py-10">
							{cards.map((card, index) => (
								<div className="hover:border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center transform hover:scale-105 transition-transform duration-300    bg-whitish-blur backdrop-blur transition-all duration-2000 " key={index}>
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
		</div>

	);
}

export default Features;