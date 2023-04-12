import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';

export default function Projects({ projects, isFetching, handleClick }) {
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
              <Link className='project__grid-link' to={`project/${project.id}`} key={project.id}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  images={project.images}
                  handleClick={handleClick}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
