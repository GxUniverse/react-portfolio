import React from "react";
import ProjectItem from './ProjectItem'

const data = [
    {
      year: 'Project Manager',
      title: 'Employed at UVR',
      duration: '2 years',
      details: 'Created and managed content and Brand representation across various social media platforms. Organized events and created promotional materials. Developed custom interactive rollouts and generated funding for future projects including: digital and physical art, gaming, performances and interactive experiences',
      link: 'https://www.youtube.com/watch?v=pqYmuIT3BAw'
    },
    {
        year: 'Project Manager',
        title: 'Employed at The Gx Universe',
        duration: '4 years',
        details: 'Created and managed content and Brand representation across various social media platforms. Organized events and created promotional materials. Developed custom interactive rollouts and generated funding for future projects including: digital and physical art, gaming, performances and interactive experiences'
      },
      {
        year: 'Weather App',
        title: 'Lead Developer',
        details: 'Build and develop a full-stack custom weather application that allows you to search and check the humidity, temperature, and wind speed of any city.'
      },
      {
        year: 'Movie Review Database & Application',
        title: 'Lead Developer',
        details: 'Build and develop a full-stack custom movie review application that allows you to see the review of any film from the IMDB database.'
      },
  ];

const Projects = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Portfolio</h1>
      {data.map((item, idx) => (
        <ProjectItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Projects;
