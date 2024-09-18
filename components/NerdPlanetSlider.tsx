import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import React from 'react';
import Image from 'next/image';

const NerdPlanetSlider = (): JSX.Element => {
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
          <Image
            alt=""
            src={'/assets/nerdplanet_thumb.png'}
            width="4396"
            height="2476"
          ></Image>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default NerdPlanetSlider;
