import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import SaladPeaceSlider from '../../components/SaladPeaceSlider';

const contents = `샐러드피스는 직장인들의 실러드 생활에 평화를 가져다주는 서비스입니다.
직장인들은 거점 빌딩을 중심으로 샐러드를 주문하고, 오전 내로 배송 받을 수 있습니다.
모든 샐러드는 해당 거점 빌딩의 상주 인원을 바탕으로 주문량을 예측하고, 샐러드를 제작합니다.
당일 생산한 샐러드를 배송하고 당일 폐기하는 것이 원칙입니다. 1인당 최대 주문량은 5개로 제한되어 있습니다.`;

export default function SaladPeace() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | SaladPeace',
      }}
    >
      <CommonSliderHead title={'샐러드피스'}></CommonSliderHead>
      <SaladPeaceSlider></SaladPeaceSlider>
      <CommonSliderBody
        projectName={'샐러드피스'}
        url={'https://salad-peace-frontend.vercel.app/'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
