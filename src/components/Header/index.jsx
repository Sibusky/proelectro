import React from 'react';
import Logo from '../Logo';
import './styles.css';
import HeaderNavigation from './HeaderNavigation';

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
            aria-label="Вызов меню"
          >
            <svg
              width='44'
              height='44'
              viewBox='0 0 44 44'
              fill='2E3D41'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M36 14L8 14V11L36 11V14Z'
                fill='#2E3D41'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M36 24L8 24V21L36 21V24Z'
                fill='2E3D41'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M36 34L8 34V31L36 31V34Z'
                fill='2E3D41'
              />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}
