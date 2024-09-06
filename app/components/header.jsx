"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { LogOut, ShoppingBag, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useCart } from "../contex/cartcontex";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [options, setOptions] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { cart } = useCart();
  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-white shadow">
      <header className="bg-white border-t shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href={"/"}>
                <img
                  src="/images/logo/logo.png"
                  className="block h-8 w-auto"
                  alt="Workflow"
                />
              </Link>
              <button onClick={() => signOut()}>signout</button>
            </div>
            <div className="flex items-center space-x-4">
              <Link href={"/profile"}>
                <User />
              </Link>

              <Link
                href={"/cart"}
                className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <ShoppingBag size={24} />
                {mounted && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setOptions((prev) => !prev)}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              ></button>
            </div>
          </div>
        </div>
        {/* {options && (
          <div className="border-t border-gray-200 py-2 px-4 space-y-1 bg-gray-50">
            <Link
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Your Profile
            </Link>
            <Link
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Settings
            </Link>
            <button className="flex items-center w-full py-2 px-4 text-sm text-red-600 hover:bg-red-100 rounded-md">
              <LogOut size={18} className="mr-2" />
              Sign out
            </button>
          </div>
        )} */}
      </header>
    </nav>
  );
};

export default Header;
