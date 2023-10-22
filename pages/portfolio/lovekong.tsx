import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import LoveKongSlider from '../../components/LoveKongSlider';

const contents = `지인의 글래스 제품을 판매합니다.`;

export default function LoveKong() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | LoveKong',
      }}
    >
      <CommonSliderHead title={'러브콩 스테인드 글라스'}></CommonSliderHead>
      <LoveKongSlider></LoveKongSlider>
      <CommonSliderBody
        projectName={'러브콩 스테인드 글라스'}
        url={'https://www.lovekong-glass.com/'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
