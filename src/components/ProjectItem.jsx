import React from 'react';

const ProjectItem = ({ year, title, duration, details, link, showEventsLink, showCartoonLink, CartoonLink, showGraphicNovelLink, GraphicNovelLink, showARGameLink, ARGameLink }) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
      <li className='mb-10 ml-4'>

        {/* styling for bullet point */}
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
          <a className='text-lg font-semibold text-[#0015be]'>{title}</a>
          <span className='my-1 text-sm font-normal leading-non text-stone-400'>{duration}</span>
        </p>
        <p className='my-2 text-base font-normal text-stone-500'>{details}</p>

        {/* Conditionally render links based on project */}
        {showEventsLink && <a href={link} className='text-blue-500 block mt-2' target="_blank" rel="noopener noreferrer">View Events</a>}
        {showCartoonLink && <a href={CartoonLink} className='text-blue-500 block mt-2' target="_blank" rel="noopener noreferrer">View Cartoon Trailer</a>}
        {showGraphicNovelLink && <a href={GraphicNovelLink} className='text-blue-500 block mt-2' target="_blank" rel="noopener noreferrer">View Graphic Novel</a>}
        {showARGameLink && <a href={ARGameLink} className='text-blue-500 block mt-2' target="_blank" rel="noopener noreferrer">View AR Game</a>}
      </li>
    </ol>
  )
}

export default ProjectItem;
