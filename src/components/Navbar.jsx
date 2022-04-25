import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <nav className="bg-green-400">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    >
                    <span className="sr-only">Open main menu</span>
                    {/* Icon when menu is closed. Heroicon name: outline/menu Menu
                    open: "hidden", Menu closed: "block" */}
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    {/* Icon when menu is open. Heroicon name: outline/x Menu open:
                    "block", Menu closed: "hidden" */}
                    <svg
                        className="hidden h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    </button>
                </div>

                <div className="flex-1 flex items-center justify-center sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        <Link className="linkToHome" to="/">
                            <img
                                className="lg:block hidden h-56 justify-self-start"
                                src="https://i.ibb.co/YPrHgMJ/My-project-4.png"
                                alt="RoHass logo"
                            />
                        </Link>
                    </div>

                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-6">
                            <Link className="text-black hover:bg-red-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/products/Aguacates">
                            Aguacate
                            </Link>

                            <Link className="text-black hover:bg-red-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/products/Frutas">
                            Fruta
                            </Link>

                            <Link className="text-black hover:bg-red-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/products/Otros">
                            Otros productos 
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/*Cart Widget*/}
                <CartWidget/>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/products/Aguacates">
                        Aguacate
                    </Link>
                    <Link  className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium" aria-current="page" to="/products/Frutas">
                        Fruta
                    </Link>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/products/Otros">
                        Otros productos 
                    </Link>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;
