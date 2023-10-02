import React, { useState } from 'react';
import Buttons from '../../Components/Buttons/Buttons';
import './Navbar.css'

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
        <nav className="bg-transparent p-4 ">
    <div className="container mx-auto flex justify-between px-20">
       <div className='flex justify-between'>
         {/* Logo */}
         <div>
          <a href="#"><p className='text-2xl'><b>Play</b><span className='font-thin'>Storm</span></p></a>
        </div>
        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
       </div>
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-2 ">
                   <a href="/home" className=" text-orange-500 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                   <a href="/trending" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Trending</a>
                   <a href="/artist" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Artists</a>
                   <a href="/collection" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Collection</a>
                   <a href="/contacts" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 pr-28 py-2 text-sm font-medium">Contacts</a>
                   <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static  sm:inset-auto sm:ml-6 sm:pr-0"> 
                   <Buttons></Buttons>  
                   </div>             
        </div>

        
    </div>

    {/* Mobile Navigation Menu (Initially Hidden) */}
    <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-transparent`}>
        <div className="container mx-auto p-4 space-y-4">
            <a href="#" className="text-black hover:text-blue-300 block">Home</a>
            <a href="#" className="text-black hover:text-blue-300 block">Trending</a>
            <a href="#" className="text-black hover:text-blue-300 block">Artists</a>
            <a href="#" className="text-black hover:text-blue-300 block">Collection</a>
            <a href="#" className="text-black hover:text-blue-300 block">Contact</a>

            {/* Button */}
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Connect Wallet</button>
        </div>
    </div>
</nav>
    </div>
  );
};

export default Navbar;


