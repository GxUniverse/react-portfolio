import React, { useState } from "react";

const Skills = () => {
  const skills = [
    { name: "React", percentage: 90 },
    { name: "JavaScript", percentage: 90 },
    { name: "MongoDB", percentage: 80 },
    { name: "SQL", percentage: 85 },
    { name: "VIDEO-EDITING", percentage: 100 },
    { name: "AUDIO-PRODUCTION", percentage: 100 },
    { name: "ANIMATION", percentage: 90 },
    { name: "3D-DESIGN", percentage: 95 },
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "Node.js", percentage: 80 },
    { name: "Express.js", percentage: 80 },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const isMobile = window.innerWidth <= 768; // Adjust this breakpoint as needed

  const skillsPerPage = isMobile ? 2 : 6;

  const nextSkills = () => {
    setStartIndex((prevIndex) =>
      prevIndex + skillsPerPage < skills.length ? prevIndex + skillsPerPage : 0
    );
  };

  const prevSkills = () => {
    setStartIndex((prevIndex) =>
      prevIndex - skillsPerPage >= 0
        ? prevIndex - skillsPerPage
        : skills.length - skillsPerPage
    );
  };

  return (
    <div className="bg-[#e4d5f7] p-8">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        Skills
      </h1>
      <div className="flex justify-around flex-wrap">
        {skills
          .slice(startIndex, startIndex + skillsPerPage)
          .map((skill, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center mb-4"
            >
              <div className="w-24 h-24 relative">
                <div
                  className="w-full h-full bg-white rounded-full overflow-hidden relative"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 w-full h-full"
                    style={{
                      backgroundImage: `linear-gradient(to top, transparent ${
                        100 - skill.percentage
                      }%, #ff80df ${100 - skill.percentage}%)`,
                    }}
                  ></div>
                  <p className="absolute inset-0 flex items-center justify-center text-lg font-bold text-black">
                    {skill.percentage}%
                  </p>
                </div>
              </div>
              <p
                className="text-black text-lg font-bold mt-2"
                style={{ fontFamily: "Roboto", fontWeight: 400 }}
              >
                {skill.name}
              </p>
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={prevSkills} className="mr-4 p-2 bg-white rounded-full">
          &lt;
        </button>
        <button onClick={nextSkills} className="p-2 bg-white rounded-full">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Skills;
