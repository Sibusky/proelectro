import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';

export default function Projects({ projects, isFetching }) {
  return (
    <section className='projects section'>
      <div className='projects__container section__container'>
        <h2 className='projects__title section__title'>Выполненные проекты</h2>
        {isFetching ? (
          <div className='projects__spinner'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className='projects__grid'>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                images={project.images}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
