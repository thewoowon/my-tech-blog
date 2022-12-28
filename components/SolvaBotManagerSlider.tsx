import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import React from 'react';

const SolvaBotManagerSlider = (): JSX.Element => {
  return (
    <Swiper
      id="carousel"
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={'auto'}
      centeredSlides={true}
      navigation
      // autoplay={{delay:6000,
      //   disableOnInteraction:false}}
      pagination={{ clickable: true }}
      className="my-wide-swiper"
      loop={true}
      height={800}
    >
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          슬라이드 준비중입니다. 조금만 기다려 주세요.
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SolvaBotManagerSlider;
