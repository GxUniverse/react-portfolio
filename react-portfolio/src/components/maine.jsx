import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter,FaInstagram,FaLinkedinIn} from 'react-icons/fa'

const Maine = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src="https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
      <div className='max-w-[700] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Manin Gauba</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
          I'm 
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "a Project Manager",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "a Developer",
              1000,
              "a Coder",
              1000,
              "an Animator",
              1000,
            ]}
            wrapper="div"
            cursor={true}
            speed={50}
            style={{
              fontSize: "1em",
              paddingLeft: "5px",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
          <FaTwitter className='cursor-pointer' size={20} />
          
          <FaInstagram className='cursor-pointer' size={20} />
          
          <FaLinkedinIn className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Maine;
