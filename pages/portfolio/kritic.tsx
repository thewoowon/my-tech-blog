import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import KriticSlider from '../../components/KriticSlider';

const contents = `이전보다 더 빠르게, 더 정확하게, 더 편리하게`;

export default function CHECKY() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | 크리틱',
      }}
    >
      <CommonSliderHead title={'크리틱'}></CommonSliderHead>
      <KriticSlider></KriticSlider>
      <CommonSliderBody
        projectName={'크리틱'}
        url={'https://kritic.news'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
