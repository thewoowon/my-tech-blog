import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import SolvaBotManagerSlider from '../../components/SolvaBotManagerSlider';

export default function SolvaBotManager() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | SolvaBotManager',
      }}
    >
      <CommonSliderHead title={'솔바 봇 매니저'}></CommonSliderHead>
      <SolvaBotManagerSlider></SolvaBotManagerSlider>
      <CommonSliderBody></CommonSliderBody>
    </Layout>
  );
}
