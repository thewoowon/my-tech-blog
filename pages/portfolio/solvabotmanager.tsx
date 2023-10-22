import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import SolvaBotManagerSlider from '../../components/SolvaBotManagerSlider';

const contents = `솔바 봇 매니저는 솔바 봇을 관리할 수 있는 웹 어플리케이션입니다.`;

export default function SolvaBotManager() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | SolvaBotManager',
      }}
    >
      <CommonSliderHead title={'솔바 봇 매니저'}></CommonSliderHead>
      <SolvaBotManagerSlider></SolvaBotManagerSlider>
      <CommonSliderBody
        projectName={'솔바 봇 매니저'}
        url={''}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
