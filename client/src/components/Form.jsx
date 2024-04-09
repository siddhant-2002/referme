import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from "react-router-dom";

function Login(){
  const [email,setEmail] = useState()
  const[password,setPassword] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://localhost:3000/admin', {email,password})
    .then()
  }
}

const Form = () => {
  return (
    <div id='form' className="min-h-screen flex items-center justify-center bg-off-white text-teal py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-teal">
            Admin Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="text-lg font-body mb-2">
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
              />
            </div>
            <div>
              <label htmlFor="password" className="text-lg font-body mb-2">
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
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="mt-4 bg-teal hover:bg-light-teal text-off-white font-bold py-2 px-4 rounded"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

