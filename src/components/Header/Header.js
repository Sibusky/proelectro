import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import MenuModal from './MenuModal/MenuModal';

export default function Header({ windowSize }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsMenuOpen(true);
  };

  return (
    <header className='header section'>
      <div className='header__container section__container'>
        <Logo />
        {windowSize > 880 ? (
          <HeaderNavigation />
        ) : (
          <button
            className='header__menu-btn button'
            onClick={handleMenuButtonClick}
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

      <MenuModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} windowSize={windowSize}/>
    </header>
  );
}
