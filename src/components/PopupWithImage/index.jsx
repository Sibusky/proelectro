import React, { useEffect } from 'react';
import './styles.css';
import Popup from '../Popup';

import { Navigation, Keyboard } from 'swiper';
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
    <Popup isPopupOpened={isPopupOpened} closePopup={closePopup} name='swiper'>
      {image.id ? (
        <Swiper
          className='popup__carousel'
          modules={[Navigation, Keyboard]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          loop={true}
          keyboard={{ enabled: true }}
          initialSlide={+image.id - 1}
        >
          {project.images
            ? project.images.map((image) => (
                <SwiperSlide className='popup__carousel-slide' key={image.id}>
                  <div className='popup__carousel-slide-image-container'>
                    <img
                      className='popup__carousel-image'
                      src={image.link}
                      alt={project.title}
                    />
                    <div className='popup__carousel-image-caption-logo'></div>
                  </div>
                  <div className='popup__carousel-image-caption-container'>
                    {image.caption.split('\n').map((text) => (
                      <p
                        className='popup__carousel-image-caption section__text'
                        key={text}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      ) : null}
    </Popup>
  );
}
