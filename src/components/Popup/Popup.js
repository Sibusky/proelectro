import React from 'react'
import './Popup.css'

export default function Popup({ isPopupOpened }) {
  return (
    <div className={isPopupOpened ? 'popup popup_opened' : 'popup'}>
        <div className='popup__container'>
            <button className='popup__close-button section__text button'>&times;</button>
        </div>
        
    </div>
  )
}
