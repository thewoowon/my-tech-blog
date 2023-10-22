import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import SolvaBotSlider from '../../components/SolvaBotSlider';

const contents = `솔바 봇은 고객들의 불편을 해소하기 위해 개발한 챗봇입니다.`;

export default function SolvaBot() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | SolvaBot',
      }}
    >
      <CommonSliderHead title={'솔바 봇'}></CommonSliderHead>
      <SolvaBotSlider></SolvaBotSlider>
      <CommonSliderBody
        projectName={'솔바 봇'}
        url={''}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
