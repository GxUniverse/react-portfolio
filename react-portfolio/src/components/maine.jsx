import React from "react";
import { TypeAnimation } from "react-type-animation";

const Maine = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left'
        src="https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50"></div>
      <div>
        <h1>I'm Manin Gauba</h1>
        <h2>
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
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1em",
              paddingLeft: "5px",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </h2>
      </div>
    </div>
  )
};

export default Maine;
