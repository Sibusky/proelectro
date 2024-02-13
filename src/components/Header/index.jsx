import React from 'react';
import Logo from '../Logo';
import './styles.css';
import HeaderNavigation from './HeaderNavigation';
import { IconMenuClose } from '../Icons/Icons';

export default function Header({
  windowSize,
  handleClick,
  scroll,
  isPopupOpen,
}) {
  return (
    <header
      className={
        scroll > 50 || isPopupOpen
          ? 'header header_small section'
          : 'header section'
      }
    >
      <div className='header__container section__container'>
        <div className='header__logo-and-phones'>
          <Logo />
          <ul className='header__phones'>
            <li className='header__phone'>
              <a href='tel:+79005011250' className='section__text'>
                +7 (900) 501-12-50 Михаил
              </a>
            </li>
            <li className='header__phone'>
              <a href='tel:+79212307220' className='section__text'>
                +7 (921) 230-72-20 Роман
              </a>
            </li>
          </ul>
        </div>
        {windowSize > 1000 ? (
          <HeaderNavigation />
        ) : (
          <button
            className={
              scroll > 50 || isPopupOpen
                ? 'header__menu-btn header__menu-btn_small button'
                : 'header__menu-btn button'
            }
            onClick={() => handleClick()}
            aria-label='Вызов меню'
          >
            <IconMenuClose />
          </button>
        )}
      </div>
    </header>
  );
}
