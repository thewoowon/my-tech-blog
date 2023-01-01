import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import SolvaBotManagerSlider from '../../components/SolvaBotManagerSlider';

const contents = `솔바 봇 매니저는 솔바 봇을 관리할 수 있는 웹 어플리케이션입니다. 
고객사들의 불편을 해소하기 위해 솔바 봇을 기획하고 개발했지만, 각 고객사마다 품질 정책이 상이해서
솔바 봇을 관리하는 것이 어려웠습니다. 이러한 고객사의 불편을 해소하기 위해서 솔바 봇 매니저를 개발했습니다.
블레이저를 활용해서 개발을 진행했고 각 고객사가 솔바 봇의 메뉴를 직접 구성하고 관리할 수 있게 했습니다.
또한, 각 고객사를 구별하기 위해서 코드를 부여해서 구별했으며, 1개 고객사에 대해서 시범 운영되었습니다.`;

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
