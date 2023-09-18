import React, { useState } from 'react';
import ProjectCard from '../../components/Projects/ProjectCard';
import { fetchCards } from '../../api/fetchData';
import { prices } from '../../constants/prices';
import { useFetchData } from '../../hooks/useFetchData';

import './styles.css';
import Spinner from '../UI/Spinner';

export default function PricesComplex({ handleClick }) {
  const [priceCards, setPriceCards] = useState([]);
  const [isFetching] = useFetchData(fetchCards(prices), setPriceCards);

  return (
    <section className='prices-complex section'>
      <div className='prices-complex__container section__container'>
        <h2 className='prices-complex__title section__title'>
          Стоимость работ на комплексный монтаж проводки (за кв.м площади)
        </h2>
        {isFetching ? (
          <Spinner />
        ) : (
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
        )}
      </div>
    </section>
  );
}
