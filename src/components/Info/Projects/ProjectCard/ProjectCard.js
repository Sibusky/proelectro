import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({
  title,
  images,
  description,
  handleClick,
}) {
  return (
    <div
      className='project-card card'
      onClick={() => handleClick(title, description, images)}
    >
      <img
        className='project-card__image'
        src={images[0].link}
        alt={description}
      />
      <p className='project-card__title section__text'>{title}</p>
    </div>
  );
}
