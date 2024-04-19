import React from 'react';

const PortfolioItem = ({ year, title, details, link, image }) => {
  return (
    <div className="portfolio-item bg-white border border-gray-300 rounded-lg p-4 mb-4 mr-4 text-center">
      <div className='mb-4'>
        <div className='inline-block w-3 h-3 bg-gray-300 rounded-full mt-1.5 mx-auto mb-2' />
        <div>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md mb-2'>{year}</span>
        </div>
        <div>
          <span className='text-lg font-semibold text-[#0015be] mb-2'>{title}</span>
        </div>
        <img src={image} alt={title} className="mt-2 mx-auto w-1/2 h-auto rounded-lg" style={{ maxWidth: '50%' }} />
        <p className='my-1 text-sm font-normal leading-non text-gray-600'>{details}</p>
        <a href={link} className='text-blue-500 block mt-2' target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default PortfolioItem;
