import React from 'react';
import Layout from '../components/Layout';
import CultureComponent from '../components/Culture';
import Video from '../components/Video';
import Card from '../components/Card';
import Image from 'next/image';
import astronat from '../public/images/astronat_part1.jpeg'
//import main from '../public/videos/main_video.mov'
import culture_part_1 from '../public/images/culture_part_1.jpeg'
import culture_part_2 from '../public/images/culture_part_2.jpeg'
import culture_part_3 from '../public/images/culture_part_3.jpeg'

export const Culture = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: '유비케어 기술 블로그 | CULTURE',
      }}
    >
      {/* <div className="orange-box-1"></div>
      <div className="orange-box-2"></div>
      <div className="orange-box-3"></div>
      <div className="orange-box-4"></div> */}
      <section className="culture video-section">
        <video autoPlay muted loop style={{ "width": '100%',"height":"100%" }}>
          <source src="/videos/main_video.mp4"/>
        </video>
        <div className="video-div">
          <p className="video-p-1">함께 만들어 가는 유비케어</p>
          <p className="video-p-2">임직원이 행복한 유비케어</p>
        </div>
      </section>
      <div className="m-auto" style={{width:"1024px"}}>
        <section className="culture section-1 flex justify-center items-center">
          <div className=''>
            <p className="slogan"><span>세상이 꿈꾸던 헬스케어</span></p>
            <p className="ubf"><span>유비케어가 만들어갑니다.</span></p>
          </div>
        </section>
        <section className="culture section-2">
          <div style={{"width":"60%"}}>
            <Image src={astronat}></Image>
          </div>
        </section>
        <section className="culture section-3">
            <p className="center-title text-position-1">도전</p>
            <p className='size-p'><span>도전을 장려하는 문화</span></p>
            <p className='size-p'><span>함께하는 동료들</span></p>
            <Image src={culture_part_1}></Image>
        </section>
        <section className="culture  section-4">
            <p className="center-title text-position-2">변화</p>
            <p className='size-p'><span>변화,</span></p>
            <p className='size-p'><span>보다 나은 미래를 위해</span></p>
            <Image src={culture_part_2}></Image>
        </section>
        <section className="culture section-5">
            <p className="center-title text-position-3">상호존중</p>
            <p className='size-p'><span>함께함의 의미</span></p>
            <p className='size-p'><span>그 이상의 가치</span></p>
            <Image src={culture_part_3}></Image>
        </section>
      </div>
    </Layout>
  );
};

export default Culture;
