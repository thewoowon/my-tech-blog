import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import LensSlider from '../../components/LensSlider';

const contents = `데이터베이스 쿼리 작성이제는 쉽고 빠르게!`;

export default function LENS() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | LENS',
      }}
    >
      <CommonSliderHead title={'LENS'}></CommonSliderHead>
      <LensSlider></LensSlider>
      <CommonSliderBody
        projectName={'LENS'}
        url={'https://lensql.chat'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
