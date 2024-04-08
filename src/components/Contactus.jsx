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
		<div>
			<div id="contactus" className=" md:flex-row justify-between  ">
				<div className="min-h-screen bg-off-white text-teal">
					<div className="container mx-auto px-4 ">
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
										name="user_email"
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
										name="message"
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
		</div>
	);
};

export default Contactus;
