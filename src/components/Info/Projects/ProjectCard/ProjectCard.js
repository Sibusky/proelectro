import React from 'react'
import './ProjectCard.css'

export default function ProjectCard({ title, images }) {
  return (
    <div className='project-card'>
        <img className='project-card__image' src={images['1']} alt={title}/>
        <p className='project-card__title section__text'>{title}</p>
    </div>
  )
}
