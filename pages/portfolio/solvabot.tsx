import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import SolvaBotSlider from '../../components/SolvaBotSlider';

export default function SolvaBot() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | SolvaBot',
      }}
    >
      <CommonSliderHead title={'솔바 봇'}></CommonSliderHead>
      <SolvaBotSlider></SolvaBotSlider>
      <CommonSliderBody></CommonSliderBody>
    </Layout>
  );
}
