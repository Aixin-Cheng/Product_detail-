import React from "react";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { FaFacebook,FaGoogle } from 'react-icons/fa';

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div className="w-">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div class="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login
                        </h1>
                        <form class="space-y-4 md:space-y-6 w-full" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-normal text-gray-600 dark:text-white">Email address or username </label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " required="" />
                            </div>
                            <div className="relative w-full mt-6">
                                <div className="flex flex-row">
                                    <div>
                                    <label className="block text-gray-600 text-sm font-normal mb-1">
                                        Password
                                        </label>
                                        </div>
                                        <div
                                        className="absolute right-4 cursor-pointer flex items-center text-gray-600"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {passwordVisible ? (
                                            <EyeSlashIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5" />
                                        )}
                                        <span className="ml-1">{passwordVisible ? 'Hide' : 'Show'}</span>
                                    </div>
                                    
                                    
                                </div>

                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-500"
                    
                                />

                            </div>
                            <div class="flex flex-col justify-between">
                                <div class="flex items-start pb-5">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <div>
                                    <p className="items-start font-light text-sm">By continuing, you agree to the <a href="" class="text-sm font-medium text-gray-950 underline">Terms of use</a> and <a href="" class="text-sm font-medium text-gray-950 underline">Privacy Policy</a> </p>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white bg-black focus:ring-4 focus:outline-none font-normal  rounded-full text-lg px-5 py-2.5 text-center">Login</button>
                            <div className="flex flex-col items-center">

                                <a href="" className="font-medium text-sm text-black underline pb-4">Forget your password</a>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account?  <a href="#" class="font-medium text-gray-950 underline">Sign up</a>
                                </p>
                            </div>
                        </form>
                        
                    </div>
                    <div className="flex items-center justify-center mt-6">
                            <div className="w-1/4 h-px bg-gray-300"></div>
                            <p className="text-black text-center mx-3 font-semibold">OR CONTINUE WITH</p>
                            <div className="w-1/4 h-px bg-gray-300"></div>
                        </div>

                        <div className="flex justify-center space-x-6 mt-6">
                            <a href="#" className="text-blue-600 hover:text-blue-700 text-4xl">
                            <FaFacebook/>

                            </a>
                            <a href="#" className="text-red-600 hover:text-red-800 text-4xl">
                                <FaGoogle></FaGoogle>
                            </a>
                        </div>
                </div>

            </div>
        </div>
    );
}