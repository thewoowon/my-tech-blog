import {Navigation,Pagination,A11y,Autoplay} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import React from 'react';
import Image from 'next/image';
import Preview1 from '../images/carousel/ubcare_preview1.png';
import Preview2 from '../images/carousel/ubcare_preview2.png';
import Preview3 from '../images/carousel/ubcare_preview3.png';


const Slider = (): JSX.Element => {
  return (
    <Swiper
          id="carousel"
          modules={[Autoplay,Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides={true}
          navigation
          autoplay={{delay:3000,
              disableOnInteraction:false}}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="my-swiper"
          loop={true}
          >
          <SwiperSlide>
            <Image src={Preview1} alt="Sample1" width={1240} height={408} ></Image>
          </SwiperSlide>
          <SwiperSlide >
            <Image src={Preview2} alt="Sample1" width={1240} height={408}  ></Image>
          </SwiperSlide>
          <SwiperSlide >
            <Image src={Preview3} alt="Sample1" width={1240} height={408}  ></Image>
          </SwiperSlide>
        </Swiper>
  );
};

export default Slider;

