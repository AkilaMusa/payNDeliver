import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
<footer className=" border-t py-4 mx-4 rounded-md">
  <div className="container mx-auto text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Pay N Deliver. All rights reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;