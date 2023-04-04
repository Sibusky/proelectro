import React from 'react';
import Popup from '../Popup/Popup';
import './PopupWithProject.css';

export default function PopupWithProject({
  isPopupOpened,
  closePopup,
  project,
}) {
  return (
    <Popup isPopupOpened={isPopupOpened} closePopup={closePopup}>
      <div className='popup__grid'>
        {project.images ? (
          project.images.map((image) => (
            <img
              className='popup__grid-image'
              key={image.link}
              src={image.link}
              alt={image.caption}
            />
          ))
        ) : (
          <p className='section__text'>
            Изображений пока что нет или произошла ошибка при загрузке
          </p>
        )}
      </div>
      <h4 className='popup__description section__text'>
        {project.description}
      </h4>
    </Popup>
  );
}
