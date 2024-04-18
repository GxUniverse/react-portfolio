import React, { useState } from "react";
import PortfolioItem from './PortfolioItem';
import screenshot1Image from '../assets/Screenshot1.png'

const data = [
  {
    year: 'Weather App',
    title: 'Lead Developer',
    details: 'Build and develop a full-stack custom weather application that allows you to search and check the humidity, temperature, and wind speed of any city.',
    link: 'https://gxuniverse.github.io/week-6-weather-dashboard/',
    // image: require('../assets/Screenshot (48).png').default
  },
  {
    year: 'Movie Review Database & Application',
    title: 'Lead Developer',
    details: 'Build and develop a full-stack custom movie review application that allows you to see the review of any film from the IMDB database.',
    link: screenshot1Image
  },
  {
    year: 'Travel/Trip Planning-Application',
    title: 'Lead Developer',
    details: 'Build and develop a full-stack React travel application. An all in one travel app where users can search the weather, food, sights, & flights to a certain area.',
    link: 'https://trip-junkie-f71816465bac.herokuapp.com/',
    // image: require('./travel_app_image.jpg').default
  },
  // Add more portfolio items as needed
];

const Portfolio = () => {
  const [startIndex, setStartIndex] = useState(0);

  const goToNextSet = () => {
    setStartIndex(startIndex + 3 >= data.length ? 0 : startIndex + 3);
  };

  const goToPreviousSet = () => {
    setStartIndex(startIndex - 3 < 0 ? data.length - 3 : startIndex - 3);
  };

  return (
    <div id='project' className='m-auto md:pl-20 p-4 py-16' style={{ backgroundColor: '#f3e5f5' }}>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Portfolio</h1>
      <div className="flex justify-between items-center">
        <button onClick={goToPreviousSet} className="focus:outline-none border border-gray-300 rounded-lg p-2">
          &lt;
        </button>
        <div className="flex flex-1 justify-center">
          {data.slice(startIndex, startIndex + 3).map((item, index) => (
            <PortfolioItem
              key={index}
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
              link={item.link}
              image={item.image}
            />
          ))}
        </div>
        <button onClick={goToNextSet} className="focus:outline-none border border-gray-300 rounded-lg p-2">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
