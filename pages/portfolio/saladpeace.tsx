import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import SaladPeaceSlider from '../../components/SaladPeaceSlider';

const contents = `샐러드 생활에 평화를!`;

export default function SaladPeace() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | SaladPeace',
      }}
    >
      <CommonSliderHead title={'샐러드피스'}></CommonSliderHead>
      <SaladPeaceSlider></SaladPeaceSlider>
      <CommonSliderBody
        projectName={'샐러드피스'}
        url={'https://salad-peace-frontend.vercel.app/'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
