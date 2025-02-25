import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-pink-500 font-bold text-3xl tracking-wide">URL <span className="text-white hover:text-purple-500 ">short</span>ENER</div>

      <ul className="flex justify-end space-x-4 items-center">

        <Link href="/"><li className="text-white px-3 py-2 rounded cursor-pointer">Home</li></Link>

        <Link href="/about"><li className="text-white px-3 py-2 rounded cursor-pointer">About</li></Link>

        <Link href="/shorten"><li className="text-white  px-3 py-2 rounded cursor-pointer">Shortener</li></Link>

        <Link href="/contact"><li className="text-white px-3 py-2 rounded cursor-pointer">Contact Us</li></Link>
     
      </ul>
      
      <div className="flex space-x-4">
        <Link href="/shorten">
          <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">Try Now</button>
        </Link>
        
        <Link href="https://github.com/NITIN-SINGH-ONGIT" target="_blank">
          <button className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded">GitHub</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
