import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Form = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://referme.onrender.com/Form', { email, password })
      .then(result => {

        if (result.data === "true") {
          navigate('/Upload')
        }

      })
      .catch(err => console.log(err));
  }
  return (
    <div className="text-white min-h-screen flex items-center justify-center bg-transparent">
      <div id='form' className='w-full max-w-md'>
        <div className="bg-gray-800 rounded shadow-lg p-6 m-10">
          <div className="mb-4">
            <h2 className="text-white text-3xl mb-2">
              Admin Login
            </h2>
          </div>
          <form className="" action="#" method="POST" onSubmit={submitHandler}>
            <input type="hidden" name="remember" value="true" />
            <div className="mb-4">
              <div>
                <label htmlFor="email-address" className="block text-white text-sm font-bold mb-2">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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