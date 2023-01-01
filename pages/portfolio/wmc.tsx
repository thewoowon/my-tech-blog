import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import WMCSlider from '../../components/WMCSlider';

const contents = `We Make the Code라는 슬로건으로 시작하는 코딩 동아리 WMC입니다.
현재 인원은 3명 정도이고 NEXT.js를 활용해서 웹앱을 만들어가고 있습니다. 기능에는 아직 보완해야하는 
부분이 많지만 천천히 확실하게 기능을 구현하려고 합니다. 전반적인 기획과 디자인, 개발을 모두
담당하고 있습니다. 현재는 기능을 구현하는 것에 초점을 맞추고 있지만, 추후에는 디자인을
개선하고 기술적인 글도 많이 담을 수 있는 웹앱으로 거듭나기를 희망합니다.`;

export default function WMC() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | WMC',
      }}
    >
      <CommonSliderHead title={'WMC'}></CommonSliderHead>
      <WMCSlider></WMCSlider>
      <CommonSliderBody
        projectName={'WMC'}
        url={'https://wmc-sigma.vercel.app/'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
