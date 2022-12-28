import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import HiAgileSlider from '../../components/HiAgileSlider';
import Layout from '../../components/Layout';

export default function HiAgile() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | HiAgile',
      }}
    >
      <CommonSliderHead title={'하이! 애자일'}></CommonSliderHead>
      <HiAgileSlider></HiAgileSlider>
      <CommonSliderBody></CommonSliderBody>
    </Layout>
  );
}
