import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import SaladPeaceSlider from '../../components/SaladPeaceSlider';

export default function SaladPeace() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | SaladPeace',
      }}
    >
      <CommonSliderHead title={'샐러드피스'}></CommonSliderHead>
      <SaladPeaceSlider></SaladPeaceSlider>
      <CommonSliderBody></CommonSliderBody>
    </Layout>
  );
}
