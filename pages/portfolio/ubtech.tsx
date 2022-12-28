import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import UbtechSlider from '../../components/UbtechSlider';

export default function UbTech() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | UbTech',
      }}
    >
      <CommonSliderHead title={'유비케어 기술블로그'}></CommonSliderHead>
      <UbtechSlider></UbtechSlider>
      <CommonSliderBody></CommonSliderBody>
    </Layout>
  );
}
