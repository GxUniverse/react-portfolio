import React from 'react';

const PortfolioItem = ({ year, title, details, link, image }) => {
  return (
    <div className="portfolio-item bg-white border border-gray-300 rounded-lg p-4 mb-4 mr-4">
      <div className='mb-4'>
        {/* You can style the bullet point using inline CSS or CSS classes */}
        <div className='inline-block w-3 h-3 bg-gray-300 rounded-full mt-1.5 mr-2' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
          <span className='text-lg font-semibold text-[#0015be]'>{title}</span>
          {/* Remove the duration span if not needed */}
        </p>
        {/* Display the image */}
        <img src={image} alt={title} className="mt-2 w-full h-auto rounded-lg" />
        {/* Display a meaningful text for the link */}
        <p className='my-1 text-sm font-normal leading-non text-gray-600'>{details}</p>
        <a href={link} className='text-blue-500 block mt-2' target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default PortfolioItem;
