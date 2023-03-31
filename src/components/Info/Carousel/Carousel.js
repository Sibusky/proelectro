import React from 'react';

import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

import { carouselImages } from '../../../constants/carouselImages';
import './Carousel.css';

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
    >
      {carouselImages.map((image) => (
        <SwiperSlide className='carousel__slide' key={image.src}>
          <img className='carousel__image' src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
