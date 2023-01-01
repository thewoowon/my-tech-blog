import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import HiAgileSlider from '../../components/HiAgileSlider';
import Layout from '../../components/Layout';

const contents = `하이! 애자일은 애자일 개발 방법론을 적용한 프로젝트를 관리하는 웹앱입니다.
프로젝트 방법론은 스크럼, 짝, 익스트림 프로그래밍, 칸반 등으로 구성되어 있습니다.
먼저 프로젝트를 생성하면, 나의 친구로 등록되어 있는 사람들을 초대할 수 있습니다.
나의 프로젝트는 스케쥴을 통해 지속적으로 확인이 가능하고, 현재 하는 일의 상태를 업데이트 할 수 있습니다.`;

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
