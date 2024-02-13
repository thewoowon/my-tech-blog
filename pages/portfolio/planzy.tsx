import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import PlanzySlider from '../../components/PlanzySlider';

const contents = `식물, 공간 그리고 사람을 이은 새로운 쇼츠 플랫폼`;

export default function CHECKY() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | PLANZY',
      }}
    >
      <CommonSliderHead title={'PLANZY'}></CommonSliderHead>
      <PlanzySlider></PlanzySlider>
      <CommonSliderBody
        projectName={'PLANZY'}
        url={'https://planzy.im'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
