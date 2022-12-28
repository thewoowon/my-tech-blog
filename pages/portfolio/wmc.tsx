import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import WMCSlider from '../../components/wmcSlider';

export default function WMC() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | WMC',
      }}
    >
      <CommonSliderHead title={'WMC'}></CommonSliderHead>
      <WMCSlider></WMCSlider>
      <CommonSliderBody></CommonSliderBody>
    </Layout>
  );
}
