import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [year, setYear] = useState();
    const [branch, setBranch] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/signup", { name, email, mobile, year, branch, password, confirmPassword })
            .then((result) => {
                if (result.data === "true") {
                    alert("Signup Successful");
                    navigate("/");
                }
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="w-full max-w-md px-4">
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Welcome New User</h2>
                        <p className="text-gray-400">Please Create your account</p>
                    </div>

                    <form onSubmit={submitHandler} className="space-y-6">
                        <div className="space-y-4">

                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                    placeholder="Enter your Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email-address"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                             <div>
                                <label
                                    htmlFor="mobile"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Mobile Number
                                </label>
                                <input
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    autoComplete="mobile"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                    placeholder="Enter your Mobile Number"
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </div>

                             <div>
                                <label
                                    htmlFor="year"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Year
                                </label>
                                <input
                                    id="year"
                                    name="year"
                                    type="text"
                                    autoComplete="year"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                    placeholder="Enter your Year"
                                    onChange={(e) => setYear(e.target.value)}
                                />
                            </div>

                             <div>
                                <label
                                    htmlFor="branch"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Branch
                                </label>
                                <input
                                    id="branch"
                                    name="branch"
                                    type="text"
                                    autoComplete="branch"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                    placeholder="Enter your Branch"
                                    onChange={(e) => setBranch(e.target.value)}
                                />
                            </div>
                            

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                             <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    autoComplete="confirm-password"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                    placeholder="Enter your password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
