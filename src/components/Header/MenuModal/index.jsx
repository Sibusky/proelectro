import React from 'react';
import './styles.css';
import HeaderNavigation from '../HeaderNavigation';
import IconMenuOpen from '../../Icons/Icons';

export default function MenuModal({ isMenuOpen, setIsMenuOpen, windowSize }) {
  return (
    <div
      className={isMenuOpen ? 'menu menu_opened' : 'menu'}
      onClick={() => setIsMenuOpen(false)}
    >
      <div
        className={
          isMenuOpen ? 'menu__content menu__content_opened' : 'menu__content'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <HeaderNavigation
          windowSize={windowSize}
          setIsMenuOpen={setIsMenuOpen}
        />
        <button
          className='menu__close-btn button'
          onClick={() => setIsMenuOpen(false)}
        >
          <IconMenuOpen />
        </button>
      </div>
    </div>
  );
}
