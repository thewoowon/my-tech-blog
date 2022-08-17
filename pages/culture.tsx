import React from 'react';
import Layout from '../components/Layout';


export const Culture = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: '유비케어 기술 블로그 | CULTURE',
      }}
    >
      <section className="culture section-1">
       
          <p className="slogan"><span>세상이 꿈꾸던 헬스케어</span></p>
          <p className="ubf"><span>유비케어가 만들어갑니다.</span></p>
        
      </section>
      <section className="culture section-2">
          <p className="center-title text-position-1">CHALLENGE</p>
      </section>
      <section className="culture  section-3">
          <p className="center-title text-position-2">CHANGE</p>
      </section>
      <section className="culture section-4">
          <p className="center-title text-position-3">RESPECT</p>
      </section>
    </Layout>
  );
};

export default Culture;
