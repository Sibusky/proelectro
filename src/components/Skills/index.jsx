import React from 'react';
import './styles.css';

export default function Skills() {
  return (
    <section className='skills section'>
      <div className='skills__container section__container'>
        <h2 className='skills__title section__title'>Услуги</h2>
        <ul className='skills__grid'>
          <li className='skills__grid-item'>
            <div className='skills__grid-item-image-one skills__grid-item-image'></div>
            <p className='skills__grid-item-text section__text'>
              Монтаж новой электропроводки в квартире / доме
            </p>
          </li>
          <li className='skills__grid-item'>
            <div className='skills__grid-item-image-two skills__grid-item-image'></div>
            <p className='skills__grid-item-text section__text'>
              Замена существующей электропроводки
            </p>
          </li>
          <li className='skills__grid-item'>
            <div className='skills__grid-item-image-three skills__grid-item-image'></div>
            <p className='skills__grid-item-text section__text'>
              Частичный перенос розеток и выключателей
            </p>
          </li>
          <li className='skills__grid-item'>
            <div className='skills__grid-item-image-four skills__grid-item-image'></div>
            <p className='skills__grid-item-text section__text'>
              Сборка электрических щитов
            </p>
          </li>
          <li className='skills__grid-item'>
            <div className='skills__grid-item-image-five skills__grid-item-image'></div>
            <p className='skills__grid-item-text section__text'>
              Отрисовка монтажных схем электрических щитов
            </p>
          </li>
          <li className='skills__grid-item'>
            <div className='skills__grid-item-image-six skills__grid-item-image'></div>
            <p className='skills__grid-item-text section__text'>
              Консультации по электрике
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
