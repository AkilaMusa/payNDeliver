import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white mt-10 border-t">
      <div className="container px-4 mx-auto">
        <div className=" pb-11 mx-auto max-w-4xl">
          <Link className="block md:mx-auto mb-5 max-w-max" href="#">
            <div className="pt-5">
              <img
                src="/images/logo/logo.png"
                className="block lg:hidden h-8 w-auto"
                alt="Workflow"
              />
            </div>
          </Link>
          <div className="flex flex-wrap -m-2.5 mb-5 border-b justify-center md:justify-start">
            {/* Add your footer links here */}
            {/* <div className="w-auto p-2.5">
              <Link
                className="font-medium leading-4 text-gray-900 hover:text-gray-700"
                href="#"
              >
                Company
              </Link>
            </div>
            <div className="w-auto p-2.5">
              <Link
                className="font-medium leading-4 text-gray-900 hover:text-gray-700"
                href="#"
              >
                About Us
              </Link>
            </div> */}
            {/* <div className="w-auto p-2.5">
              <Link
                className="font-medium leading-4 text-gray-900 hover:text-gray-700"
                href="#"
              >
                Services
              </Link>
            </div> */}
            <div className="w-auto p-2.5">
              {/* <Link
                className="font-medium leading-4 text-gray-900 hover:text-gray-700"
                href="#"
              >
                Blog
              </Link> */}
            </div>
            {/* <div className="w-auto p-2.5 ">
              <Link
                className="font-medium leading-4 text-gray-900 hover:text-gray-700"
                href="#"
              >
                Contact
              </Link>
            </div> */}
          </div>
          <div className="md:max-w-max mx-auto ">
            <p className="font-medium leading-6 text-sm text-gray-600">
              © 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
