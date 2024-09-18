import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        {/* Logo */}
        <div className='text-xl md:text-2xl font-bold hidden md:inline'>Tarak</div>

        {/* Links */}
        <div className='space-x-4 text-sm sm:text-base'>
          <a href="#" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Button */}
        <a href="mailto:btarak398@gmail.com" className='bg-gradient-to-r from-green-400 to-blue-500 text-sm sm:text-base hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
