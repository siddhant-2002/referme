import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Form = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/Form', { email, password })
      .then(result => {

        if (result.data === "true") {
          navigate('/Upload')
        }

      })
      .catch(err => console.log(err));
  }
  return (
    <div className="m-10 text-white rounded-xl bg-whitish-blur backdrop-blur  hover:border border-purple-400 hover:bg-transparent   hover:shadow-lg hover:scale-105 hover:shadow-glow transform transition-all duration-200">
      <div id='form' className=' bg-linear-gradient backdrop-blur transition-all duration-2000' >
        <div className="rounded-xl bg-whitish-blur backdrop-blur">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-4xl  mb-4 ">
              Admin Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={submitHandler}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="text-lg text-white text-center font-body mb-2">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="text-lg text-white font-body mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-4 bg-teal hover:bg-light-teal text-off-white font-bold py-2 px-4 rounded"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Form;



