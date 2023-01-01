import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import UbtechSlider from '../../components/UbtechSlider';

const contents = `유비케어에서 근무할 당시 기술블로그 운영이 중단되어 있었습니다. 2020년 상반기까지만
운영되었고 기술블로그를 책임지고 운영할 개발자가 없는 상황에서 좋은 경험이 될 수 있다고 생각해 운영 및 개발에 지원했습니다.
지킬이라는 툴로 개발했고, 호스팅 또한 깃허브 페이지로 되어있었기 때문에 유지보수 측면에서는 유리했으나 실질적으로 블로그에 유비케어의 특색을
담기에는 부족하다는 생각을 했습니다. 그렇기 때문에 NEXT.js를 활용해서 직접 자체 블로그를 개발하기로 결정했습니다.
우아한 형제들, 라인, 네이버 등의 기술블로그를 참고하며 개발을 진행했습니다. 메인 배너 같은 경우는 
회사의 광고도 함께 실을 수 있도록 슬라이드를 추가하고, 팀원들의 평가와 피드백을 통해 개선을 진행했습니다.`;

export default function UbTech() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | UbTech',
      }}
    >
      <CommonSliderHead title={'유비케어 기술블로그'}></CommonSliderHead>
      <UbtechSlider></UbtechSlider>
      <CommonSliderBody
        projectName={'유비케어 기술블로그'}
        url={'https://ub-tech.vercel.app/'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
