import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src="react-portfolio/src/assets/vacation.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50"></div>
      <div>
        <h1>I'm Manin Gauba</h1>
        <h2>
          I'm a
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Project Manager",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Developer",
              1000,
              "Coder",
              1000,
              "Animator",
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

export default Main;
