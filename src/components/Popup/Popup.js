import React, { useEffect } from 'react';
import './Popup.css';

export default function Popup({ isPopupOpened, closePopup, children }) {
  // Закрытиe popup по esc
  useEffect(() => {
    const closeByEsc = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closePopup();
      }
    };
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);
  }, [closePopup]);

  return (
    <div
      className={isPopupOpened ? 'popup popup_opened' : 'popup'}
      onClick={() => closePopup()}
    >
      <div className='popup__container' onClick={(e) => e.stopPropagation()}>
        <button
          className='popup__close-button section__text button'
          onClick={() => closePopup()}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
