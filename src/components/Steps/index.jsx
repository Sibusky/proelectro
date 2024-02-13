import React from 'react';
import stepsPhoto from '../../images/steps-photo.webp';

import './styles.css';
import Button from '../Button';

export default function Steps() {
  return (
    <section className='steps section'>
      <div className='steps__container section__container'>
        <div className='steps__background'></div>
        <img
          className='steps__image'
          src={stepsPhoto}
          alt='Три простых шага'
          loading='lazy'
        />
        <div className='steps__text-container'>
          <h3 className='steps__title section__title'>
            Три простых шага к новой электро&shy;проводке:
          </h3>
          <ul className='steps__list'>
            <li className='steps__list-item section__text'>
              1. <Button path={'/contacts'}>Связаться</Button> с нами любым
              удобным способом и договориться о замерах.
            </li>
            <li className='steps__list-item section__text'>
              2. Согласовать смету на материалы и работы.
            </li>
            <li className='steps__list-item section__text'>
              3. Быть на связи в процессе выполнения работ для решения
              возникающих вопросов.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
