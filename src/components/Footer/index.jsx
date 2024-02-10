import React from 'react';
import './styles.css';
import { IconGmail, IconTelegram, IconVk } from '../Icons/Icons';

export default function Footer() {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <footer className='footer section'>
      <div className='footer__container section__container'>
        <p className='footer__text footer__copyright-text'>
          &copy;{' '}
          <a
            className='footer__copyright-link footer__text'
            href='https://t.me/sibusky'
            target='_blank'
            rel='noreferrer'
          >
            Алексей Смирнов
          </a>{' '}2023
          - {currentYear}
        </p>
        <div className='footer__contacts-wraper'>
          <p className='footer__text footer__contacts-text'>
            Связаться с ПроЭлектро:
          </p>
          <nav className='footer__contacts'>
            <ul className='footer__contacts-list'>
              <li className='footer__contacts-list-item link'>
                <a
                  className='footer__telegram-link'
                  href='https://t.me/Nektonikto'
                  target='_blank'
                  rel='noreferrer'
                  aria-label="Связаться с ПроЭлектро через телеграм"
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
                  aria-label="Связаться с ПроЭлектро через группу в Вконтакте"
                >
                  <IconVk />
                </a>
              </li>
              <li className='footer__contacts-list-item link'>
                <a
                  className='footer__gmail-link'
                  href='mailto:mkichigin1969@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  aria-label="Связаться с ПроЭлектро через электронную почту"
                >
                  <IconGmail />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
