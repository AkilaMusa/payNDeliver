"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { CartProvider } from "./contex/cartcontex";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Pay N Deliver",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
      <SessionProvider>
        <CartProvider>
        {/* <Header/> */}
        {children}
        <Footer/>
        </CartProvider>
        </SessionProvider>
              </body>
    </html>
  );
}
