'use client';

import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import Marquee from 'react-fast-marquee';

const Projects = () => {
  const [isClicked, setIsClicked] = useState(false); // Suivre l'état du clic

  // Fonction pour arrêter le mouvement lors du clic sur une carte
  const handleClick = () => {
    setIsClicked(false);
  };

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={!isClicked}  // Le défilement s'arrête si on clique
          direction="left"
        >
          {projectsData.slice(0, 10).map((project, index) => (
            <div
              key={index}
              className="sticky-card min-w-[300px] max-w-2xl mx-3 transition-all duration-[0.5s] cursor-pointer group relative"
              onClick={handleClick}  // Arrêter l'animation lors du clic
            >
              {/* Ajout de l'effet glow au survol */}
              <div className="w-full h-full rounded-lg overflow-hidden relative group-hover:scale-[1.05] group-hover:shadow-[0_0_15px_3px_rgba(138,43,226,0.6)]">
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)]">
                  <ProjectCard project={project} />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Projects;
