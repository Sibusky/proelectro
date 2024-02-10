import React from 'react';
import './styles.css';

export default function Popup({ isPopupOpened, closePopup, children, name }) {
  return (
    <div
      className={`popup popup_place_${name} section ${
        isPopupOpened ? 'popup_opened' : ''
      }`}
      onClick={() => closePopup()}
    >
      <div
        className='popup__container section__container'
        style={
          name === 'project'
            ? {
                paddingRight: 30,
                paddingBottom: 30,
                paddingLeft: 30,
                paddingTop: 15,
              }
            : { padding: 0 }
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          className='popup__close-button section__text button'
          onClick={() => closePopup()}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
