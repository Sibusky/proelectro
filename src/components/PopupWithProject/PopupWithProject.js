import React, { useEffect } from 'react';
import Popup from '../Popup/Popup';
import './PopupWithProject.css';
import { Link } from 'react-router-dom';

export default function PopupWithProject({
  isPopupOpened,
  closePopup,
  project,
  handleImageClick,
  image,
}) {
  // const { projectId } = useParams();

  // Закрытиe popup по esc
  useEffect(() => {
    const closeByEsc = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closePopup();
      }
    };
    document.addEventListener('keydown', closeByEsc);

    // Если выбрана картинка, то слушатель снимается, чтобы закрывать окна
    // по очереди, начиная со слайдера
    if (image.id) {
      document.removeEventListener('keydown', closeByEsc);
    }

    return () => document.removeEventListener('keydown', closeByEsc);
  }, [closePopup, image]);

  return (
    <Popup isPopupOpened={isPopupOpened} closePopup={closePopup} name='project'>
      <h4 className='popup__description section__text'>
        {project.description}
      </h4>
      <div className='popup__grid'>
        {project.images ? (
          project.images.map((image) => (
            <Link className='popup__link link' to={`image`} key={image.id}>
              <img
                className='popup__grid-image'
                src={image.preview}
                alt={image.caption}
                onClick={() =>
                  handleImageClick(image.id, image.link, image.caption)
                }
              />
            </Link>
          ))
        ) : (
          <p className='section__text'>
            Изображений пока что нет или произошла ошибка при загрузке
          </p>
        )}
      </div>
    </Popup>
  );
}
