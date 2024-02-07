import React from 'react';
import './styles.css';
import { IconGmail, IconTelegram, IconVk } from '../Icons/Icons';

export default function Footer() {
  return (
    <footer className='footer section'>
      <div className='footer__container section__container'>
        <p className='footer__copyright'>&copy; Алексей Смирнов 2023</p>
        <nav className='footer__contacts'>
          <ul className='footer__contacts-list'>
            <li className='footer__contacts-list-item link'>
              <a
                className='footer__telegram-link'
                href='https://t.me/sibusky'
                target='_blank'
                rel='noreferrer'
              >
                <IconTelegram />
              </a>
            </li>
            <li className='footer__contacts-list-item link'>
              <a
                className='footer__vk-link'
                href='https://vk.com/vol_electro'
                target='_blank'
                rel='noreferrer'
              >
                <IconVk />
              </a>
            </li>
            <li className='footer__contacts-list-item link'>
              <a
                className='footer__gmail-link'
                href='mailto:5325388@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                <IconGmail />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
