import React from "react";
import ProjectItem from './ProjectItem';

const data = [
  {
    year: 'Project Manager',
    title: 'Employed at UVR',
    duration: '2 years',
    details: 'Created and managed content and Brand representation across various social media platforms. Organized events and created promotional materials. Developed custom interactive rollouts and generated funding for future projects including: digital and physical art, gaming, performances and interactive experiences',
    link: 'https://www.youtube.com/watch?v=pqYmuIT3BAw',
    showEventsLink: true // UVR should have the show events link
  },
  {
    year: 'Project Manager',
    title: 'Employed at The Gx Universe',
    duration: '4 years',
    details: 'Created and managed content and Brand representation across various social media platforms. Organized events and created promotional materials. Developed custom interactive rollouts and generated funding for future projects including: digital and physical art, gaming, performances and interactive experiences',
    CartoonLink: 'https://vimeo.com/938857371?share=copy',
    showCartoonLink: true, // The Gx Universe should have the show links for cartoon, graphic novel, and AR game
    GraphicNovelLink: 'https://objkt.com/tokens/KT1H2uPAdEwDUrhgpTry8YSCiNGX2PWwNV1y/6',
    showGraphicNovelLink: true,
    showARGameLink: true
  },
  {
    year: 'Assistant Manager',
    title: 'Nordstrom',
    details: 'Assistant Manager in the womens shoes department. Work with brands to curate themes & displays for new designer products. Keep track of sales/ upsell. Train new employees, create schedules, resolve comflicts.',
    showLinks: false // Nordstrom should have no links
  },
];

const Projects = () => {
  return (
    <div id='projects' >
      <div className='md:pl-20 p-4 py-16'>
      <div className="max-w-[1040px] m-auto relative">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <ellipse cx="50" cy="50" rx="50" ry="30" fill="#e4d5f7" />
        </svg>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="card bg-white rounded-lg p-4 mb-4" style={{ width: '100%' }}>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Experience</h1>
          </div>
          {data.map((item, idx) => (
            <div key={idx} className="card bg-white rounded-lg p-4 mb-4" style={{ width: '100%' }}>
              <ProjectItem
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
                link={item.link}
                showEventsLink={item.showEventsLink}
                showCartoonLink={item.showCartoonLink}
                CartoonLink={item.CartoonLink} // Pass CartoonLink here
                showGraphicNovelLink={item.showGraphicNovelLink}
                GraphicNovelLink={item.GraphicNovelLink} // Pass GraphicNovelLink here
                showARGameLink={item.showARGameLink}
                ARGameLink={item.ARGameLink} // Pass ARGameLink here
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
//talk to me
export default Projects;

