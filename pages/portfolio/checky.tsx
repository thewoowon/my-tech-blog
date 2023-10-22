import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import CheckySlider from '../../components/CheckySlider';

const contents = `5초로 5분을 절약하세요.`;

export default function CHECKY() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | CHECKY',
      }}
    >
      <CommonSliderHead title={'CHECKY'}></CommonSliderHead>
      <CheckySlider></CheckySlider>
      <CommonSliderBody
        projectName={'CHECKY'}
        url={'https://checky.im'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
