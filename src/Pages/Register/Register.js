import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div>
            <section>
                <div class="container px-6 py-4 h-full mx-auto">
                    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://webstockreview.net/images/deadpool-clipart-comic-5.png"
                                class="lg:h-[700px] w-auto mx-auto"
                                alt="Phone"
                            />
                        </div>
                        <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form>
                                <h1 className='text-center text-5xl mb-5 text-red-500'>Sign Up</h1>
                                <div class="mb-6">
                                    <input
                                        type="text"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div class="mb-6">
                                    <input
                                        type="password"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div>

                                <div class="flex justify-between items-center mb-6">
                                    <div class="form-group form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        />
                                        <label class="form-check-label inline-block text-gray-800"
                                        >Accept Terms and Conditions</label
                                        >
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                            Already have an account?
                                            <Link
                                                to="/login"
                                                className="text-red-500 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                            > Login
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Sign up
                                </button>

                                <SocialLogin></SocialLogin>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;