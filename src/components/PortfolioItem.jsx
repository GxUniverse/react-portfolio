import React from 'react';

const PortfolioItem = ({ year, title, details, link, image }) => {
  return (
    <div className="portfolio-item bg-white border border-gray-300 rounded-lg p-2 mb-4 text-center">
      <div className='mb-2'>
        <div className='inline-block w-2 h-2 bg-gray-300 rounded-full mt-1 mx-auto mb-1' />
        <div>
          <span className='inline-block px-1 py-0.5 font-semibold text-white bg-[#001b5e] rounded-md mb-1'>{year}</span>
        </div>
        <div>
          <span className='text-base font-semibold text-[#0015be] mb-1'>{title}</span>
        </div>
        <img src={image} alt={title} className="mt-1 mx-auto w-3/4 h-auto rounded-lg" style={{ width: '75%' }} />
        <p className='my-1 text-sm font-normal leading-non text-gray-600'>{details}</p>
        <a href={link} className='text-blue-500 block mt-1' target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default PortfolioItem;

