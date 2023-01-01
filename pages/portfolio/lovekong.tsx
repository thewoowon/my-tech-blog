import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import LoveKongSlider from '../../components/LoveKongSlider';

const contents = `지인의 스테인드 글라스 제품을 판매하는 커머스 웹앱을 개발했습니다. 
기존에는 스마트 스토어로 제한된 종류의 제품만 판매했는데, 새롭게 개발한 웹앱에서는 제품 라인업을 모두
업로드하고 제품을 살펴보고 주문할 수 있게 했습니다. 현재는 대부분 기능 개발이 끝나서 KG 이니시스에
입점 신청을 해놓은 상태이고, 입점 신청이 승인되면 결제 기능을 추가할 예정입니다. 추가로 네이버 페이도
연동해서 결제 기능을 추가할 예정입니다. 1월 13일에는 모든 상세 사진을 업로드하고, 1월 14일에는 
인스타를 통한 웹앱 홍보를 시작합니다. 많은 관심 부탁드립니다.`;

export default function LoveKong() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | LoveKong',
      }}
    >
      <CommonSliderHead title={'러브콩 스테인드 글라스'}></CommonSliderHead>
      <LoveKongSlider></LoveKongSlider>
      <CommonSliderBody
        projectName={'러브콩 스테인드 글라스'}
        url={'https://www.lovekong-glass.com/'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
