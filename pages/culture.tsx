import React from 'react';
import Layout from '../components/Layout';
import CultureComponent from '../components/Culture';
import Video from '../components/Video';
import Card from '../components/Card';
import Image from 'next/image';
//import main from '../public/videos/main_video.mov'
import culture_part_1 from '../public/images/culture_part_1.svg'
import culture_part_2 from '../public/images/culture_part_2.svg'
import culture_part_3 from '../public/images/culture_part_3.svg'

export const Culture = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: '유비케어 기술 블로그 | CULTURE',
      }}
    >
      {/* <div className="orange-box-1"></div>
      <div className="orange-box-2"></div>
      <div className="orange-box-3"></div>
      <div className="orange-box-4"></div> */}
      {/* <section className="culture video-section">
        <video autoPlay muted loop style={{ "width": '100%',"height":"100%" }}>
          <source src="/videos/main_video.mp4"/>
        </video>
        <div className="video-div">
          <p className="video-p-1">함께 만들어 가는 유비케어</p>
          <p className="video-p-2">임직원이 행복한 유비케어</p>
        </div>
      </section> */}
      <div className="m-auto" style={{width:"1024px"}}>
        <section className="culture section-1 flex justify-center items-center">
          <div className='' style={{"paddingBottom":"10rem"}}>
            <p className="slogan"><span>세상이 꿈꾸던 헬스케어</span></p>
            <p className="ubf"><span>유비케어가 만들어갑니다.</span></p>
          </div>
        </section>
        <section className="culture section-2">
          <div style={{"position":"relative"}}>
            <div style={{"position":"absolute","right":"0","width":"65%"}}>
              <Image src={culture_part_3} ></Image>
            </div>
            <p style={{"width":"33%"}}>유비케어 개발자는 어떻게 일할까요?</p>
            <p style={{"width":"33%"}}>유비케어의 개발자는 고객에게 항상 더 나은 서비스를 제공하기 위해 고민합니다.</p>
            <p style={{"width":"33%"}}>지속적인 소통과 화합의 장, 유비케어를 이끌어 온 원동력이라고 생각합니다. </p>
          </div>
        </section>
        <section className="culture section-3">
          <div style={{"position":"relative"}}>
            <div style={{"position":"absolute","left":"0","width":"55%"}}>
              <Image src={culture_part_1} ></Image>
            </div>
            <p style={{"width":"43%"}}>유비케어 개발자는 어떻게 일할까요?</p>
            <p style={{"width":"43%"}}>유비케어의 개발자는 고객에게 항상 더 나은 서비스를 제공하기 위해 고민합니다.</p>
            <p style={{"width":"43%"}}>지속적인 소통과 화합의 장, 유비케어를 이끌어 온 원동력이라고 생각합니다. </p>
          </div>
        </section>
        <section className="culture section-4">
          <div style={{"position":"relative"}}>
            <div style={{"position":"absolute","right":"0","width":"65%"}}>
              <Image src={culture_part_2} ></Image>
            </div>
            <p style={{"width":"33%"}}>유비케어 개발자는 어떻게 일할까요?</p>
            <p style={{"width":"33%"}}>유비케어의 개발자는 고객에게 항상 더 나은 서비스를 제공하기 위해 고민합니다.</p>
            <p style={{"width":"33%"}}>지속적인 소통과 화합의 장, 유비케어를 이끌어 온 원동력이라고 생각합니다. </p>
          </div>
        </section>
        <section className="culture section-5">
            <p className="center-title text-position-1">도전</p>
            <p className='size-p'><span>도전을 장려하는 문화</span></p>
            <p className='size-p'><span>함께하는 동료들</span></p>
        </section>
        <section className="culture  section-6">
            <p className="center-title text-position-2">변화</p>
            <p className='size-p'><span>변화,</span></p>
            <p className='size-p'><span>보다 나은 미래를 위해</span></p>
        </section>
        <section className="culture section-7">
            <p className="center-title text-position-3">상호존중</p>
            <p className='size-p'><span>함께함의 의미</span></p>
            <p className='size-p'><span>그 이상의 가치</span></p>
        </section>
      </div>
    </Layout>
  );
};

export default Culture;
