import React from 'react';
import { Link } from 'react-router-dom';
import stepsPhoto from '../../../images/steps-photo.png';
import './Steps.css';

export default function Steps() {
  return (
    <section className='steps section'>
      <div className='steps__container section__container'>
        <div className='steps__background'></div>
        <img className='steps__image' src={stepsPhoto} alt='Три простых шага' />
        <div className='steps__text-container'>
          <h3 className='steps__title section__title'>
            Три простых шага к новой электро&shy;проводке:
          </h3>
          <ul className='steps__list'>
            <li className='steps__list-item section__text'>
              1.{' '}
              <Link className='steps__list-item-link' to='/contacts'>
                Связаться
              </Link>{' '}
              с нами любым удобным способом и договориться о замерах.
            </li>
            <li className='steps__list-item section__text'>
              2.{' '}
              <a
                className='steps__list-item-link'
                href='https://docs.google.com/spreadsheets/d/10BbELok5seuzB9n74BMIjQsCjlVFj6wcVuvTE-dmlK0/edit#gid=0'
                target='_blank'
                rel='noreferrer'
              >
                Согласовать
              </a>{' '}
              смету на материалы и работы.
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
