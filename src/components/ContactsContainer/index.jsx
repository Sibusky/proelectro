import React from 'react';
import './styles.css';
import { IconVk, IconYouTube } from '../Icons/Icons';

export default function ContactsContainer() {
  return (
    <section className='contacts section'>
      <div className='contacts__container section__container'>
        <h2 className='contacts__title section__title'>Контакты</h2>
        <p className='contacts__text section__text'>Находимся в Вологде</p>
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
            <h3 className='contacts__item-title contacts__text section__text'>Мы в соцсетях:</h3>
            <ul className='contacts__sublist contacts__sublist-with-logo'>
              <li className='contacts__sublist-item contacts__sublist-item-with-logo'>
                <a
                  className='contacts__item-link contacts__item-link-vk'
                  href='https://vk.com/vol_electro'
                  target='_blank'
                  rel='noreferrer'
                >
                  <IconVk />
                </a>
              </li>
              <li className='contacts__sublist-item contacts__sublist-item-with-logo'>
                <a
                  className='contacts__item-link contacts__item-link-youtube'
                  href='https://www.youtube.com/channel/UCCRyA8_pZAFZPhS7ynIhWCg'
                  target='_blank'
                  rel='noreferrer'
                >
                  <IconYouTube />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
