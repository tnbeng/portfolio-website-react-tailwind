import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdOutlineRestaurantMenu } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <nav className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50'>
    //   <div className='container py-2 flex justify-center md:justify-between items-center'>
    //     {/* Logo */}
    //     <div className='text-xl md:text-2xl font-bold hidden md:inline'>Tarak</div>

    //     {/* Links */}
    //     <div className='space-x-4 text-sm sm:text-base '>
    //       <a href="#" className='hover:text-gray-400'>Home</a>
    //       <a href="#about" className='hover:text-gray-400'>About Me</a>
    //       <a href="#service" className='hover:text-gray-400'>Services</a>
    //       <a href="#project" className='hover:text-gray-400'>Projects</a>
    //       <a href="#contact" className='hover:text-gray-400'>Contact</a>
    //     </div>

    //     {/* Button */}
    //     <a href="mailto:btarak398@gmail.com" className='bg-gradient-to-r from-green-400 to-blue-500 text-sm sm:text-base hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
    //       Connect Me
    //     </a>
    //   </div>
    // </nav>

    <nav className='text-white bg-slate-950 sticky top-0 z-10 p-3 border-b border-gray-600'>
      <div className='flex justify-between items-center lg:px-16 sm:px-4'>
        <div className='text-xl lg:text-2xl font-bold '>Tarak</div>
        <div className='sm:hidden text-xl' onClick={() => { setIsOpen(!isOpen) }}>{isOpen ? <MdOutlineRestaurantMenu /> : <FaBars />}</div>
        <div className='hidden sm:flex space-x-4 '>
          <a onClick={() => { setIsOpen(!isOpen) }} href="#" className='hover:text-gray-400'>Home</a>
          <a onClick={() => { setIsOpen(!isOpen) }} href="#about" className='hover:text-gray-400'>About Me</a>
          <a onClick={() => { setIsOpen(!isOpen) }} href="#service" className='hover:text-gray-400'>Services</a>
          <a onClick={() => { setIsOpen(!isOpen) }} href="#project" className='hover:text-gray-400'>Projects</a>
          <a onClick={() => { setIsOpen(!isOpen) }} href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && <div className='sm:hidden flex flex-col space-y-1 py-3  bg-slate-950'>
        <a onClick={() => { setIsOpen(!isOpen) }} href="#" className='hover:text-gray-400'>Home</a>
        <a onClick={() => { setIsOpen(!isOpen) }} href="#about" className='hover:text-gray-400'>About Me</a>
        <a onClick={() => { setIsOpen(!isOpen) }} href="#service" className='hover:text-gray-400'>Services</a>
        <a onClick={() => { setIsOpen(!isOpen) }} href="#project" className='hover:text-gray-400'>Projects</a>
        <a onClick={() => { setIsOpen(!isOpen) }} href="#contact" className='hover:text-gray-400'>Contact</a>
      </div>}
    </nav>
  );
};

export default Navbar;
