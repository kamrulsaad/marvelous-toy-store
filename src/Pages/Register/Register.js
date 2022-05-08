import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Register = () => {

    const [checked, setChecked] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [token] = useToken(user)
    const navigate = useNavigate()

    useEffect(() => { if (token) navigate('/') }, [navigate, token])

    if (loading) return <Loading></Loading>

    const handleFormSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <section>
                <div className="container px-6 py-4 h-full mx-auto">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://webstockreview.net/images/deadpool-clipart-comic-5.png"
                                className="lg:h-[700px] w-auto mx-auto"
                                alt="Phone"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={handleFormSubmit}>
                                <h1 className='text-center text-5xl mb-5 text-red-500'>Sign Up</h1>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        name='email'
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        name='password'
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <p className='text-red-700'>{error && error.message}</p>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            onChange={() => setChecked(!checked)}
                                            checked={checked}
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        />
                                        <label className="form-check-label inline-block text-gray-400"
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
                                    disabled={!checked}
                                    className={`inline-block px-7 py-3 ${checked ? 'bg-blue-600 active:bg-blue-800  hover:bg-blue-700 focus:bg-blue-700' : "bg-blue-300 active:bg-blue-300 cursor-not-allowed hover:bg-blue-300 focus:bg-blue-300"} text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full`}
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