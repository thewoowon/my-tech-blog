import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import LoveKongSlider from '../../components/LoveKongSlider';

export default function LoveKong() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | LoveKong',
      }}
    >
      <CommonSliderHead title={'러브콩 스테인드 글라스'}></CommonSliderHead>
      <LoveKongSlider></LoveKongSlider>
      <CommonSliderBody></CommonSliderBody>
    </Layout>
  );
}
