import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import NerdPlanetSlider from '../../components/NerdPlanetSlider';

const contents = `기술의 궤도에 오르다`;

export default function NERDPLANET() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | 너드플래닛',
      }}
    >
      <CommonSliderHead title={'너드플래닛'}></CommonSliderHead>
      <NerdPlanetSlider></NerdPlanetSlider>
      <CommonSliderBody
        projectName={'너드플래닛'}
        url={'https://nerdplanet.app'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
