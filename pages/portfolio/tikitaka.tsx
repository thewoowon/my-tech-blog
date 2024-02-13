import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import TikitakaSlider from '../../components/TikitakaSlider';

const contents = `이력서와 채용 공고만 넣으면 준비 끝!`;

export default function CHECKY() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | 티키타카',
      }}
    >
      <CommonSliderHead title={'티키타카'}></CommonSliderHead>
      <TikitakaSlider></TikitakaSlider>
      <CommonSliderBody
        projectName={'티키타카'}
        url={'https://tikitaka.chat'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
