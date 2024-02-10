import React from 'react';
import './styles.css';
import HeaderNavigation from '../HeaderNavigation';

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
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='7.16016'
              y='9.28249'
              width='3'
              height='22'
              transform='rotate(-45 7.16016 9.28249)'
              fill='#2E3D41'
            />
            <rect
              x='22.7168'
              y='7.16117'
              width='3'
              height='22'
              transform='rotate(45 22.7168 7.16117)'
              fill='#2E3D41'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
