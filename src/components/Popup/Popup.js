import React, { useEffect } from 'react';
import './Popup.css';

export default function Popup({ isPopupOpened, closePopup, children }) {


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
