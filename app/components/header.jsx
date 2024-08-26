"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; // Import the cart icon
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [options, setOptions] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/images/logo/logo.png"
                className="block lg:hidden h-8 w-auto"
                alt="Workflow"
              />
              <img
                src="/images/logo/logo.png"
                className="hidden lg:block h-8 w-auto"
                alt="Workflow"
              />
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              <Link
                href="/"
                className={`${
                  isActive("/")
                    ? "border-green-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                href="/stores"
                className={`${
                  isActive("/stores")
                    ? "border-green-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Stores
              </Link>
              <Link
                href="/about"
                className={`${
                  isActive("/about")
                    ? "border-green-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                About
              </Link>
              <Link
                href="/cart"
                className={`${
                  isActive("/cart")
                    ? "border-green-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Cart
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Search icon */}
                </div>
                {/* Search input */}
              </div>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <Link href="/cart" className="text-gray-500 hover:text-gray-700 mr-4"> {/* Cart Icon on small screens */}
              <ShoppingCartOutlinedIcon />
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:ml-4 lg:flex lg:items-center">
            <button
              type="button"
              className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            ></button>

            {/* Profile dropdown */}
            <div className="ml-4 relative flex-shrink-0">
              <button
                type="button"
                className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setOptions((prev) => !prev)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  src="/images/profile/profile.jpg"
                  alt=""
                />
              </button>

              <div
                className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition duration-300 ease-in-out ${
                  options ? "block" : "hidden"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Your Profile
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Settings
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
                  role="menuitem"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className={`${
              isActive("/")
                ? "bg-green-50 border-green-500 text-green-700"
                : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Home
          </Link>
          <Link
            href="/stores"
            className={`${
              isActive("/stores")
                ? "bg-green-50 border-green-500 text-green-700"
                : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Stores
          </Link>
          <Link
            href="/about"
            className={`${
              isActive("/about")
                ? "bg-green-50 border-green-500 text-green-700"
                : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            About
          </Link>
          <Link
            href="/cart"
            className={`${
              isActive("/cart")
                ? "bg-green-50 border-green-500 text-green-700"
                : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Cart
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                src="/images/profile/profile.jpg"
                alt=""
                onClick={() => setOptions((prev) => !prev)}
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Akila</div>
              <div className="text-sm font-medium text-gray-500">
                akila@gmail.com
              </div>
            </div>
            <button
              type="button"
              className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            ></button>
          </div>
          <div className={`mt-3 space-y-1 ${options ? "block" : "hidden"}`}>
            <Link
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              Your Profile
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              Settings
            </Link>

            <button
              className="flex items-center justify-center w-fit mx-2 text-left px-4 py-2 text-sm text-black border border-red-600 hover:bg-red-600 hover:text-white rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
              role="menuitem"
            >
              Sign out
              <LogoutOutlinedIcon className="ms-1" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
