import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import SolvaBotSlider from '../../components/SolvaBotSlider';

const contents = `솔바 봇은 고객들의 불편을 해소하기 위해 개발한 챗봇입니다. 
솔바테크놀러지에서 근무 당시, 고객사들은 개발자의 상주 시간에만 문의를 할 수 있었고, 그 외의 시간에는
다음 날을 기약하거나 다른 방법으로 문의를 해야 했습니다. 이러한 고객사의 불편을 해소하기 위해서 챗봇을 제안했고,
Microsoft의 Bot Framework를 활용해서 개발을 진행했습니다. 1개 고객사에 대해서 시범 운영되었습니다.`;

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
