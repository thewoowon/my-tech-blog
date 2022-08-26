import React from 'react';
import Layout from '../components/Layout';
import CultureComponent from '../components/Culture';

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
      <div className="m-auto" style={{width:"1024px"}}>
        <section className="culture section-1">
          <p className="slogan"><span>세상이 꿈꾸던 헬스케어</span></p>
          <p className="ubf"><span>유비케어가 만들어갑니다.</span></p>
        </section>
        <section className="culture section-2">
            <p>Image Section</p>
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
