import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import SkyBridgeSlider from '../../components/SkyBridgeSlider';

const contents = `꿈을 이루는 힘!`;

export default function SKYBRG() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | 스카이브릿지',
      }}
    >
      <CommonSliderHead title={'스카이브릿지'}></CommonSliderHead>
      <SkyBridgeSlider></SkyBridgeSlider>
      <CommonSliderBody
        projectName={'스카이브릿지'}
        url={'https://skybrg.io'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
