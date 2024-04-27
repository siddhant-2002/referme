import React from "react";

const mission = () => {
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
			<div className=" m-10 text-white rounded-xl bg-whitish-blur backdrop-blur  hover:border border-purple-400 hover:bg-transparent hover:shadow-lg hover:scale-105 hover:shadow-glow transform transition-all duration-200">
				<div id="mission" className=" md:flex-row justify-between  ">
					<div className="container mx-auto px-4 p-10">
						<div className="flex flex-col md:flex-row justify-between animate-fade-in-left ">
							<div className="w-full md:w-1/2 flex justify-center items-center">
								<img
									src="mission3.png"
									alt="Mission"
									className="w-3/4 h-auto mr-4"
								/>
							</div>
							<div className="w-full md:w-1/2 flex flex-col items-center justify-center animate-fade-in-right">
								<h2 className="text-4xl mb-4  font-body border-b border-white-500 py-5">
									<div className="wave">
										<span style={{ '--i': 1 }}>O </span>
										<span style={{ '--i': 2 }}>u </span>
										<span style={{ '--i': 3 }}>r</span>
										<span style={{ '--i': 4, marginLeft: '10px' }}>M</span>
										<span style={{ '--i': 5 }}>i</span>
										<span style={{ '--i': 6 }}>s </span>
										<span style={{ '--i': 7 }}>s</span>
										<span style={{ '--i': 8 }}>i </span>
										<span style={{ '--i': 9 }}>o </span>
										<span style={{ '--i': 10 }}>n</span>
									</div>
								</h2>
								<br />
								<p className="text-xl leading-relaxed">
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
		</div>

	);
};

export default mission;
