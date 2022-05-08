import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth)
    const [email, setEmail] = useState('')

    const handleEmailBlur = e => setEmail(e.target.value);

    const navigate = useNavigate()
    const location = useLocation()
    const [token] = useToken(user)
    const from = location?.state?.from?.pathname || '/'

    useEffect(() => { if (token) navigate(from, { replace: true }) }, [navigate, token, from])

    if (loading || sending) return <Loading></Loading>

    const handleFormSubmit = async e => {
        e.preventDefault()
        const password = e.target.password.value
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('http://localhost:5000/getToken', { email })
        localStorage.setItem("accessToken", data.accessToken)
    }

    const handlePasswordReset = async () => {
        if (!email) return toast.warn("Please enter your email", { transition: Slide })
        await sendPasswordResetEmail(email)
        if (resetError) return toast.error(resetError.message, { transition: Slide })
        else return toast.success("Please Check your email to reset your password")
    }

    return (
        <div>
            <section>
                <div className="container px-6 py-12 h-full">
                    <div className="flex w-full justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 w-full mb-12 md:mb-0">
                            <img
                                src="https://www.pngitem.com/pimgs/m/1-17131_cartoon-iron-man-clip-art-png-cartoon-iron.png"
                                className="lg:h-[700px] h-[350px] w-auto mx-auto"
                                alt="Phone"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <h1 className='text-center text-5xl mb-5 text-red-500'>Log In</h1>
                            <form onSubmit={handleFormSubmit}>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        onBlur={handleEmailBlur}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        name='password'
                                        required
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div>

                                <p className='text-red-500'>{error && error.message}</p>

                                <div className="flex flex-wrap justify-between items-center mb-6">
                                    <div className="text-center lg:text-left">
                                        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                            Don't have an account?
                                            <Link
                                                to="/register"
                                                className="text-red-500 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                            > Register
                                            </Link>
                                        </p>
                                    </div>
                                    <button
                                        onClick={handlePasswordReset}
                                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                    >Forgot password?
                                    </button>
                                </div>
                                <input
                                    type='submit'
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none cursor-pointer focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    value="Login"
                                    />
                                    

                                <SocialLogin></SocialLogin>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;