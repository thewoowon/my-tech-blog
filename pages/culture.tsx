import React from 'react';
import Layout from '../components/Layout';
import CultureComponent from '../components/Culture';
import Video from '../components/Video';
import Card from '../components/Card';
//import main from '../public/videos/main_video.mov'

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
          <p className="video-p-1">함께 만드는 유비케어</p>
          <p className="video-p-2">직원들이 행복한 유비케어</p>
        </div>
      </section>
      <div className="m-auto" style={{width:"1024px"}}>
        <section className="culture section-1">
          <p className="slogan"><span>세상이 꿈꾸던 헬스케어</span></p>
          <p className="ubf"><span>유비케어가 만들어갑니다.</span></p>
        </section>
        <section className="culture section-2">
            <Card></Card>
        </section>
        <section className="culture section-3">
            <p className="center-title text-position-1">CHALLENGE</p>
        </section>
        <section className="culture  section-4">
            <p className="center-title text-position-2">CHANGE</p>
        </section>
        <section className="culture section-5">
            <p className="center-title text-position-3">RESPECT</p>
        </section>
      </div>
    </Layout>
  );
};

export default Culture;
