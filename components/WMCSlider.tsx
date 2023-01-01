import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import React from 'react';
import Image from 'next/image';

const WMCSlider = (): JSX.Element => {
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
            src={'/assets/wmc_thumb.png'}
            width="4396"
            height="2476"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          <Image
            alt=""
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/eb8ecf17-07ef-43ec-5c63-0858503ef000/public'
            }
            unoptimized={true}
            width="4396"
            height="2476"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          <Image
            alt=""
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4e9e6cec-a6a6-4919-ee50-34c3fbd50200/public'
            }
            unoptimized={true}
            width="4396"
            height="2476"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          <Image
            alt=""
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/8297ca1a-e386-45ac-42d3-45ac50d36700/public'
            }
            unoptimized={true}
            width="4396"
            height="2476"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          <Image
            alt=""
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/5e8cb326-75f0-4a69-805d-c2655dc1ff00/public'
            }
            unoptimized={true}
            width="4396"
            height="2476"
          ></Image>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default WMCSlider;
