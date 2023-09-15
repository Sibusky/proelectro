import React from 'react';
import ProjectCard from '../components/Projects/ProjectCard';

export default function Prices({ prices, handleClick }) {
  return (
    <main className='main'>
      <section className='prices section'>
        <div className='prices__container section__container'>
          <h2 className='prices__title section__title'>
            Стоимость работ на комплексный монтаж проводки (за кв.м площади)
          </h2>

          <div className='projects__grid prices__grid'>
            {prices.map((price) => (
              <ProjectCard
                id={price.id}
                title={price.title}
                description={price.description}
                images={price.images}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
