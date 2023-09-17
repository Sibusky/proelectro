import React from 'react';
import ProjectCard from '../../components/Projects/ProjectCard';

import './styles.css';

export default function PricesComplex({ priceCards, handleClick }) {
  return (
    <section className='prices-complex section'>
      <div className='prices-complex__container section__container'>
        <h2 className='prices-complex__title section__title'>
          Стоимость работ на комплексный монтаж проводки (за кв.м площади)
        </h2>
        <div className='projects__grid prices-complex__grid'>
          {priceCards.map((price) => (
            <ProjectCard
              key={price.id}
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
  );
}
