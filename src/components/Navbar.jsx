import React from "react";

export const Navbar = () => {
    return (
    <nav className="bg-green-400">
        <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
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
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                
                <img
                    className="lg:block h-8 justify-self-start"
                    src="https://i.ibb.co/YPrHgMJ/My-project-4.png"
                    alt="RoHass logo"
                />
                </div>
                <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-6">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300
                    hover:bg-gray-700 hover:text-white" */}
                    <a
                    href="#"
                    className="bg-red-400 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                    >
                    Productos
                    </a>
                    <a
                    href="#"
                    className="text-black hover:bg-red-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Nosotros
                    </a>
                    <a
                    href="#"
                    className="text-black hover:bg-red-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Beneficios
                    </a>
                </div>
                </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                type="button"
                className="bg-white p-1 rounded-full text-red-400 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                <span className="sr-only">Shopping cart</span>
                {/* Heroicon: Shopping cart */}
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                </button>
            </div>
                </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300
                hover:bg-gray-700 hover:text-white" */}
                <a
                    href="#"
                    className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    aria-current="page"
                >
                    Productos
                </a>
                <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                    Nosotros
                </a>
                <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                    Beneficios
                </a>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;
