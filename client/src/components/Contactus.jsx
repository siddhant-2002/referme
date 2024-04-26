import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs
		  .sendForm('service_53xegjv', 'template_ckkuztf', form.current, {
			publicKey: 'dw_4w5q7Uh-bafJom',
		  })
		  .then(
			() => {
				toast.success('Form submitted successfully!');
			},
			(error) => {
				toast.error('There was an error submitting the form.');
				console.log('FAILED...', error.text);
			},
		  );
	  };


	return (
		<div className="m-10 text-white rounded-xl bg-whitish-blur backdrop-blur  hover:border border-purple-400 hover:bg-transparent   hover:shadow-lg hover:scale-105 hover:shadow-glow transform transition-all duration-200">
			<div id="contactus" className=" md:flex-row justify-between  ">
				<div className="min-h-screen">
					<div className="container mx-auto px-4 ">
						<div className="flex flex-col md:flex-row justify-between py-8">
							<div className="w-full md:w-1/2 flex justify-center items-center p-2">
								<img
									src="contactus.png"
									alt="Logo"
									className="w-full  h-auto"
								/>
							</div>
							<div className="w-full md:w-1/2 flex flex-col items-center justify-center p-24 ">
								<h2 className="text-4xl  mb-4 ">
									Contact Us
								</h2>
								<form ref={form} onSubmit={sendEmail} className=" w-full flex flex-col">
									<label
										htmlFor="name"
										className="text-lg font-body mb-2"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="user_name"
										className=" w-full  bg-transparent focus:bg-transparent  rounded-md py-2 px-3 mb-4 border-b border-white-500"
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
										name="user_email"
										className="w-full  bg-transparent focus:bg-transparent border-b border-white-500 rounded-md py-2 px-3 mb-4"
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
										name="message"
										className="w-full  bg-transparent focus:bg-transparent border-b border-white-500 rounded-md py-2 px-3 mb-4"
										placeholder="Enter your message"
										rows="4"
									></textarea>

									<button
										type="submit"
										className="mt-4 border-100 text-off-white py-2 px-4 rounded hover:border hover:border-purple-500"
									>
										Send Message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contactus;
