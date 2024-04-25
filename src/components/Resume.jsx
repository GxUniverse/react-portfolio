import React from "react";
import myResume from "../assets/maninGaubaDevRESUME(CC).pdf";
import { BsCloudDownload } from "react-icons/bs";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdVideocam } from "react-icons/md"; // Importing video icon
import { FaHeadphones } from "react-icons/fa"; // Importing headphones icon
import { AiFillProject } from "react-icons/ai"; // Importing project management icon


function Resume() {
  return (
    <div className="bg-gray-100 py-10">
      <section id="welcome-section" className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">My Resume</h2>
        <div className="flex justify-center items-center mb-4">
          <a
            href={myResume}
            download
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600"
          >
            <BsCloudDownload className="text-lg mr-2" />
            Download Resume
          </a>
        </div>
      </section>

      <section id="home-page-body" className="flex justify-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold mb-4 text-blue-500">Font-End Tech</p>
            <ul className="text-gray-700">
              <li className="flex items-center mb-2">
                <MdFoundation className="text-blue-500 mr-2" />
                HTML5
              </li>
              <li className="flex items-center mb-2">
                <MdFoundation className="text-blue-500 mr-2" />
                CSS
              </li>
              <li className="flex items-center mb-2">
                <MdFoundation className="text-blue-500 mr-2" />
                JavaScript
              </li>
              {/* Add other technologies */}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold mb-4 text-green-500">Back-End Tech</p>
            <ul className="text-gray-700">
              <li className="flex items-center mb-2">
                <GrTechnology className="text-green-500 mr-2" />
                Node.js
              </li>
              <li className="flex items-center mb-2">
                <GrTechnology className="text-green-500 mr-2" />
                Express.js
              </li>
              <li className="flex items-center mb-2">
                <GrTechnology className="text-green-500 mr-2" />
                MySQL
              </li>
              {/* Add other technologies */}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold mb-4 text-purple-500">Performance Tech</p>
            <ul className="text-gray-700">
              <li className="flex items-center mb-2">
                <GrDocumentPerformance className="text-purple-500 mr-2" />
                NoSQL
              </li>
              <li className="flex items-center mb-2">
                <GrDocumentPerformance className="text-purple-500 mr-2" />
                Progressive Web Apps (PWA)
              </li>
              <li className="flex items-center mb-2">
                <GrDocumentPerformance className="text-purple-500 mr-2" />
                MongoDB
              </li>
              {/* Add other technologies */}
            </ul>
          </div>

          {/* New Box - Video Production */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold mb-4 text-yellow-500">Video Production</p>
            <ul className="text-gray-700">
              <li className="flex items-center mb-2">
                <MdVideocam className="text-yellow-500 mr-2" />
                Animation
              </li>
              <li className="flex items-center mb-2">
                <MdVideocam className="text-yellow-500 mr-2" />
                3D Design/Modeling
              </li>
              <li className="flex items-center mb-2">
                <MdVideocam className="text-yellow-500 mr-2" />
                AI Video Production
              </li>
              <li className="flex items-center mb-2">
                <MdVideocam className="text-yellow-500 mr-2" />
                Video Editing
              </li>
            </ul>
          </div>
          {/* Audio Production */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold mb-4 text-red-500">Audio Production</p>
            <ul className="text-gray-700">
              <li className="flex items-center mb-2">
                <FaHeadphones className="text-red-500 mr-2" />
                Audio Production
              </li>
              <li className="flex items-center mb-2">
                <FaHeadphones className="text-red-500 mr-2" />
                Soundtracking
              </li>
              <li className="flex items-center mb-2">
                <FaHeadphones className="text-red-500 mr-2" />
                AI Voiceover
              </li>
              <li className="flex items-center mb-2">
                <FaHeadphones className="text-red-500 mr-2" />
                Audio Engineering
              </li>
            </ul>
          </div>

          {/* Project Management */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold mb-4 text-indigo-500">Project Management</p>
            <ul className="text-gray-700">
              <li className="flex items-center mb-2">
                <AiFillProject className="text-indigo-500 mr-2" />
                Agile Methodology
              </li>
              <li className="flex items-center mb-2">
                <AiFillProject className="text-indigo-500 mr-2" />
                Scrum Framework
              </li>
              <li className="flex items-center mb-2">
                <AiFillProject className="text-indigo-500 mr-2" />
                Risk Management
              </li>
              <li className="flex items-center mb-2">
                <AiFillProject className="text-indigo-500 mr-2" />
                Stakeholder Communication
              </li>
            </ul>
          </div>
          {/* End of New Box - Video Production */}
          
        </div>
      </section>
    </div>
  );
}

export default Resume;
