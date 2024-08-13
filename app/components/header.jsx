import Image from "next/image";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchBar from "./search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-gray-700 border-b  shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-16 w-auto"
              src="/images/logo/logo.jpg"
              alt="Your Company"
            />
          </div>

          {/* Navigation */}
          {/* <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav> */}

          {/* Icons */}
          <div className="flex items-center">
            <button className=" hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-1 rounded-full">
              <span className="sr-only">View cart</span>
              <Link href={"/cart"}>
                <ShoppingCartOutlinedIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </Link>
            </button>
            <button className="ml-4  hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-1 rounded-full">
              <span className="sr-only">View account</span>
              <Link href={"/dashboard"}>
                <AccountCircleOutlinedIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
