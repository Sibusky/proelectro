import React, { useEffect } from 'react';
import './PopupWithImage.css';
import Popup from '../Popup/Popup';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function PopupWithImage({
  isPopupOpened,
  closePopup,
  project,
  image,
}) {
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
    <Popup isPopupOpened={isPopupOpened} closePopup={closePopup}>
      {image.id ? (
        <Swiper
          className='popup__carousel'
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          initialSlide={+image.id - 1}
        >
          {project.images
            ? project.images.map((image) => (
                <SwiperSlide className='popup__carousel-slide' key={image.id}>
                  <img
                    className='popup__carousel-image'
                    src={image.link}
                    alt={image.caption}
                  />
                  <p className='popup__carousel-image-caption section__text'>
                    {image.caption}
                  </p>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      ) : null}
    </Popup>
  );
}
