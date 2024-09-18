import React from 'react';
import HeroImage from '../assets/Tarak_Nath_Bar.png';
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 px-4 sm:px-8'>
      {/* Profile Image */}
      <img
        src={HeroImage}
        alt="Tarak Nath Bar"
        className='mx-auto mb-8 w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
      />
      
      {/* Title */}
      <h1 className='text-2xl sm:text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Tarak Nath Bar
        </span>
        , Full-Stack Developer
      </h1>

      {/* Description */}
      <p className='mt-4 text-base sm:text-lg text-gray-300'>
        I specialize in building modern and responsive web applications.
      </p>

      {/* Buttons */}
      <div className='mt-8 space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 flex flex-col sm:flex-row justify-center'>
        <a
          href="mailto:btarak398@gmail.com"
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Contact With Me
        </a>
        {/* <a
          href='/Tarak_Nath_Bar.pdf'
          download="Tarak_Nath_Bar_Resume.pdf"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Resume
        </a> */}
      </div>
    </div>
  );
};

export default Hero;
