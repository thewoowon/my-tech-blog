import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import React from 'react';
import Image from 'next/image';

const LoveKongSlider = (): JSX.Element => {
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
            src={'/assets/lovekong_thumb.png'}
            width="4401"
            height="2434"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          <Image
            alt=""
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/80c3568f-06de-4be2-6429-3425e7cc8e00/public'
            }
            width="2000"
            height="1123"
            unoptimized={true}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          <Image
            alt=""
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ee80a4b0-ef99-443f-eb9c-416aea191100/public'
            }
            width="2000"
            height="1123"
            unoptimized={true}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          <Image
            alt=""
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/b55941c0-403b-4061-e8fe-74fc6b0d8900/public'
            }
            width="2000"
            height="1123"
            unoptimized={true}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          <Image
            alt=""
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a4a15d24-f526-46b8-9eb2-d820fc3d3a00/public'
            }
            width="2000"
            height="1123"
            unoptimized={true}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          <Image
            alt=""
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1db2904b-1051-4eff-ba27-7883064a0e00/public'
            }
            width="2000"
            height="1123"
            unoptimized={true}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          <Image
            alt=""
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1eb5046f-b1c3-4dfe-8c85-7aed3786b200/public'
            }
            width="2000"
            height="1123"
            unoptimized={true}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-wide-swiper-slide">
        <div className="h-full bg-gray-100 flex justify-center items-center">
          <Image
            alt=""
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/7c63e9e4-c08d-42e3-dab8-39dbacb57000/public'
            }
            width="2000"
            height="1123"
            unoptimized={true}
          ></Image>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default LoveKongSlider;
