import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import HiAgileSlider from '../../components/HiAgileSlider';
import Layout from '../../components/Layout';

const contents = `하이! 애자일은 애자일 개발 방법론을 적용한 프로젝트를 관리하는 웹앱입니다.`;

export default function HiAgile() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | HiAgile',
      }}
    >
      <CommonSliderHead title={'하이! 애자일'}></CommonSliderHead>
      <HiAgileSlider></HiAgileSlider>
      <CommonSliderBody
        projectName={'하이! 애자일'}
        url={'https://hiagile-client.vercel.app/'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
