import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import logo from '../../../Pics/logo.png'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, loading] = useAuthState(auth)

  if (loading) return <Loading></Loading>

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img className="h-12 rounded-full" src={logo} alt="" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              MARVELOUS
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/inventory"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-sky-400"
              >
                Inventory
              </Link>
            </li>
            {
              user &&
              <>
                <li>
                  <Link
                    to="/myItems"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-sky-400"
                  >
                    My Items
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addItem"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-sky-400"
                  >
                    Add Item
                  </Link>
                </li>
              </>
            }
            <li>
              <Link
                to="/"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-sky-400"
              >
                About us
              </Link>
            </li>
          </ul>
          <ul className="items-center hidden space-x-8 lg:flex">
            {
              user ?
                <>
                  <li>
                    {user.photoURL ? <img className="h-10 w-10 cursor-pointer rounded-full" src={user?.photoURL} alt="" /> :
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    }
                  </li>
                  <li>
                    <button
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none"
                      onClick={() => signOut(auth)}
                    >
                      Sign out
                    </button>
                  </li>
                </>
                :
                <>
                  <li>
                    <Link
                      to="/login"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none"
                      title="Sign up"
                    >
                      Sign up
                    </Link>
                  </li>
                </>
            }
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img className="h-12 rounded-full" src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          MArvelous
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/inventory"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-400"
                        >
                          Inventory
                        </Link>
                      </li>
                      {user &&
                        <>
                          <li>
                            <Link
                              to="/addItem"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-400"
                            >
                              Add Item
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              aria-label="Product pricing"
                              title="Product pricing"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-400"
                            >
                              My Items
                            </Link>
                          </li>
                        </>}
                      <li>
                        <Link
                          to="/"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-400"
                        >
                          About us
                        </Link>
                      </li>
                      {
                        user ? <>
                          <li>
                            {user?.photoURL ? <img className="h-10 w-10 cursor-pointer rounded-full" src={user?.photoURL} alt="" /> :
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                              </svg>
                            }
                          </li>
                          <li>
                            <button
                              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none"
                              onClick={() => signOut(auth)}
                            >
                              Sign out
                            </button>
                          </li>
                        </> :
                          <>
                            <li>
                              <Link
                                to="/login"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none"
                              >
                                Log In
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/register"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none"
                              >
                                Sign up
                              </Link>
                            </li>
                          </>
                      }
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav