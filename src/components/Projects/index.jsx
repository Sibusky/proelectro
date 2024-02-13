import React, { useState } from 'react';
import './styles.css';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import Spinner from '../UI/Spinner';
import { useFetchData } from '../../hooks/useFetchData';
import { fetchCards } from '../../api/fetchData';
import { projects } from '../../constants/projects';

export default function Projects({ handleClick }) {
  const [projectCards, setProjectCards] = useState([]);
  const [isFetching] = useFetchData(fetchCards(projects), setProjectCards);

  return (
    <section className='projects section'>
      <div className='projects__container section__container'>
        <h2 className='projects__title section__title'>Примеры работ</h2>
        {isFetching ? (
          <Spinner />
        ) : (
          <div className='projects__grid'>
            {projectCards.map((project) => (
              <Link
                className='project__grid-link'
                to={`project/${project.id}`}
                key={project.id}
              >
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
