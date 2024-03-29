import React from 'react';
import './styles.css';

import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { carouselImages } from '../../constants/carouselImages';

export default function Carousel() {
  return (
    <Swiper
      className='carousel'
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {carouselImages.map((image) => (
        <SwiperSlide className='carousel__slide' key={image.src}>
          <img
            className='carousel__image'
            srcSet={`${image.srcOneX} 800w, ${image.srcTwoX} 1200w, ${image.srcThreeX} 1600w`}
            src={image.src}
            alt={image.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
