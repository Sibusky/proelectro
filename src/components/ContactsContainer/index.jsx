import React from 'react';
import './styles.css';

export default function ContactsContainer() {
  return (
    <section className='contacts section'>
      <div className='contacts__container section__container'>
        <h2 className='contacts__title section__title'>Контакты</h2>
        <p className='contacts__text section__text'>Мы находимся в г. Вологде</p>
        <ul className='contacts__list'>
          <li className='contacts__item'>
            <h3 className='contacts__item-title contacts__text section__text'>
              Наши телефоны:
            </h3>
            <ul className='contacts__sublist'>
              <li className='contacts__sublist-item'>
                <a href='tel:+79005011250' className='contacts__text section__text'>
                  +7 (900) 501-12-50 Михаил
                </a>
              </li>
              <li className='contacts__sublist-item'>
                <a href='tel:+79212307220' className='contacts__text section__text'>
                  +7 (921) 230-72-20 Роман
                </a>
              </li>
            </ul>
          </li>
          <li className='contacts__item'>
            <h3 className='contacts__item-title contacts__text section__text'>Мы в ВК</h3>
            <ul className='contacts__sublist'>
              <li className='contacts__sublist-item'>
                <a
                  className='contacts__item-link contacts__text section__text link'
                  href='https://vk.com/vol_electro'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://vk.com/vol_electro
                </a>
              </li>
            </ul>
          </li>
          <li className='contacts__item'>
            <h3 className='contacts__item-title contacts__text section__text'>
              YouTube канал
            </h3>
            <ul className='contacts__sublist'>
              <li className='contacts__sublist-item'>
                <a
                  className='contacts__item-link contacts__text section__text link'
                  href='https://www.youtube.com/channel/UCCRyA8_pZAFZPhS7ynIhWCg'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://www.youtube.com/channel/UCCRyA8_pZAFZPhS7ynIhWCg
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
