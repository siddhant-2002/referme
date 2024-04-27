import React from "react";

const Aboutus = () => {
	return (
		<div>
			{/* About Us */}
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
			<div id="about-us" className=" md:flex-row justify-between  ">
				<div className=" flex flex-col items-center justify-center md:p-28 rounded-xl m-2 text-white  backdrop-blur transition-all duration-2000">
					<h2 className="text-4xl  mb-4 font-body">
						<div className="wave border-b border-white-500 py-5">
							<span style={{ '--i': 1 }}>A</span>
							<span style={{ '--i': 2 }}>b</span>
							<span style={{ '--i': 3 }}>o</span>
							<span style={{ '--i': 4 }}>u</span>
							<span style={{ '--i': 5 }}>t</span>
							<span style={{ '--i': 6,marginLeft: '10px' }}>U</span>
							<span style={{ '--i': 7 }}>s</span>
						</div>
					</h2>
					<br />
					
					<p className="text-xl leading-relaxed text-center p-10">
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
