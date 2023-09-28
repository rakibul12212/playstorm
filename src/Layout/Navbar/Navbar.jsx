import React, { useState } from 'react';
import Buttons from '../../Components/Buttons/Buttons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the visibility of the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent flex items-center justify-between">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Button to show/hide the mobile menu */}
             <button onClick={toggleMobileMenu} id="mobile-menu-button">Toggle Menu</button>
          </div>
          <div className="flex items-center justify-between sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center ">
              <a href="#"><p className='text-2xl'><b>Play</b><span>Storm</span></p></a>
            </div>
            <div className={`sm:ml-6 sm:block ${isMobileMenuOpen ? '' : 'hidden'}`}>
              <div className="flex justify-between space-x-6 ">
                   <a href="/home" className=" text-orange-500 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                   <a href="/trending" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Trending</a>
                   <a href="/artist" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Artists</a>
                   <a href="/collection" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Collection</a>
                   <a href="/contacts" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contacts</a>
                   <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static  sm:inset-auto sm:ml-6 sm:pr-0">
                      <Buttons></Buttons>
                   </div>
                </div>
             
            </div>
          </div>
         
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
