import React from 'react';
import Carousel from '../Carousel';
import './styles.css';

export default function Lead() {
  return (
    <section className='lead section'>
      <div className='lead__container section__container'>
        <h1 className='lead__title section__title'>
          Делаем удобную и безопасную электро&shy;проводку в Вологде
        </h1>
        <Carousel />
        <p className='lead__motto section__text'>
          Цените качество? Нам с вами по пути.
        </p>
      </div>
    </section>
  );
}
