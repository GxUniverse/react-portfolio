import React, { useState } from "react";
import PortfolioItem from './PortfolioItem';
import screenshot1Image from '../assets/Screenshot1.png';
import screenshot2Image from '../assets/Screenshot2.png';
import screenshot3Image from '../assets/Screenshot3.png';

const data = [
  {
    year: 'Movie Review Application',
    title: 'Lead Developer',
    details: 'Full-stack custom movie review application that allows you to see the review of any film from the IMDB database.',
    link: 'https://hunterwilliam795.github.io/First-Project/',
    image: screenshot2Image
  },
  {
    year: 'Travel Planning-Application',
    title: 'Lead Developer',
    details: 'Build and develop a full-stack React travel application. An all in one travel app where users can search the weather, food, sights, & flights to a certain area.',
    link: 'https://trip-junkie-f71816465bac.herokuapp.com/',
    image: screenshot1Image
  },
  {
    year: 'Weather Application',
    title: 'Lead Developer',
    details: 'Full-stack custom weather application that allows you to search and check the humidity, temperature, and wind speed of any city.',
    link: 'https://gxuniverse.github.io/week-6-weather-dashboard/',
    image: screenshot3Image
  },
  // Add more portfolio items as needed
];

const Portfolio = () => {
  const [startIndex, setStartIndex] = useState(0);

  const isMobile = window.innerWidth <= 768; // Adjust this breakpoint as needed

  const itemsPerPage = isMobile ? 2 : 3;

  const goToNextSet = () => {
    setStartIndex(startIndex + itemsPerPage >= data.length ? 0 : startIndex + itemsPerPage);
  };

  const goToPreviousSet = () => {
    setStartIndex(startIndex - itemsPerPage < 0 ? data.length - itemsPerPage : startIndex - itemsPerPage);
  };

  return (
    <div id='portfolio'> {/* Changed the id from 'project' to 'portfolio' */}
      <div className='md:pl-20 p-4 py-16' style={{ backgroundColor: '#f3e5f5' }}>
        <div className="max-w-[1040px] m-auto relative">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <ellipse cx="50" cy="50" rx="50" ry="30" fill="#f3e5f5" />
          </svg>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="card bg-white rounded-lg p-4 mb-4" style={{ width: '100%' }}>
              <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Portfolio</h1>
            </div>
            <div className="flex justify-between items-center">
              <button onClick={goToPreviousSet} className="focus:outline-none border border-gray-300 rounded-lg p-2">
                &lt;
              </button>
              <div className="flex flex-1 justify-center">
                {data.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
                  <div key={index} className="card bg-white rounded-lg p-4 mb-4">
                    <PortfolioItem
                      year={item.year}
                      title={item.title}
                      details={item.details}
                      link={item.link}
                      image={item.image}
                    />
                  </div>
                ))}
              </div>
              <button onClick={goToNextSet} className="focus:outline-none border border-gray-300 rounded-lg p-2">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
