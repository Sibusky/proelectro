import React from 'react';
import './Popup.css';

export default function Popup({ isPopupOpened, closePopup, children, name }) {
  return (
    <div
      className={`popup popup_place_${name} ${
        isPopupOpened ? 'popup_opened' : ''
      }`}
      onClick={() => closePopup()}
    >
      <div className='popup__container' style={name === 'project' ? {padding: 20} : {padding: 0}}  onClick={(e) => e.stopPropagation()}>
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
