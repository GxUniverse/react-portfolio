import React from 'react';

const Resume = () => {
  const resumeFilePath = '/react-portfolio/public/maninGaubaDevRESUME(CC).pdf'; // Replace with your actual resume file path

  return (
    <div className="max-w-[600px] mx-auto md:pl-10 md:pr-10 p-4 py-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="py-2 text-3xl font-bold text-center text-[#001b5e]">Download My Resume</h1>
      <div className="flex justify-center mt-6">
        <button className="bg-[#001b5e] text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-[#0015be]">
          <a href={resumeFilePath} download="Manin_Gauba_Resume.pdf" className="resume-download-link">
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resume;
