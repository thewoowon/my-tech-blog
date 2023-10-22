import React from 'react';
import CommonSliderBody from '../../components/CommonSliderBody';
import CommonSliderHead from '../../components/CommonSliderHead';
import Layout from '../../components/Layout';
import WMCSlider from '../../components/WMCSlider';

const contents = `영화인들을 위한 공간, 필름덤즈입니다.`;

export default function FILMDOMS() {
  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | FILMDOMS',
      }}
    >
      <CommonSliderHead title={'FILMDOMS'}></CommonSliderHead>
      <WMCSlider></WMCSlider>
      <CommonSliderBody
        projectName={'FILMDOMS'}
        url={'https://filmdoms.studio/'}
        contents={contents}
      ></CommonSliderBody>
    </Layout>
  );
}
