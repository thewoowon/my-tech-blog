import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
//import main from '../public/videos/main_video.mov'
import github from '../public/images/github.png';
import velog from '../public/images/velog.png';
import notion from '../public/images/notion.png';

import frontEndAll from '../public/images/frontend/all.svg';

import backEndAll from '../public/images/backend/all.svg';

import othersAll from '../public/images/others/all.svg';

export const Culture = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: '요람코 기술 블로그 | PROFILE',
      }}
    >
      {/* <section className="culture video-section">
        <div className='m-auto flex' style={{"width":"1024px"}}>
          <div className="video-div" style={{"width":"50%"}}>
            <div style={{"paddingTop":"120px"}}>
              <p className="video-p-1"><span>요람에서 코드까지</span></p>
              <p className="video-p-2"><span>아직 갈 길이 멀다!</span></p>
              <p style={{"fontFamily":"Noto Sans KR Light", "fontSize":"20px"}}>안녕하세요. 2년차 개발자 우원입니다.</p>
              <p style={{"fontFamily":"Noto Sans KR Light", "fontSize":"20px"}}>처음 1년은 방황했지만, <br></br> 깨달음 이후 코드에 인생을 걸었습니다.</p>
              <p style={{"fontFamily":"Noto Sans KR Light", "fontSize":"20px"}}>꾸준함의 힘을 알고 있습니다. <br></br>그렇기에 1일 1커밋과 기술 블로그 운영을 하고 있습니다.</p>
              <p style={{"fontFamily":"Noto Sans KR Light", "fontSize":"20px"}}>KISS, YAGNI, DRY 등 좋은 코드에 대해 고민합니다. </p>
              <p style={{"fontFamily":"Noto Sans KR Light", "fontSize":"20px"}}>음악, 미술, 운동하는 것을 좋아하고,<br></br>도전에 대한 열망이 있습니다.</p>
              <p style={{"fontFamily":"Noto Sans KR Light", "fontSize":"20px"}}>평생을 부산에서 살다가 <br></br> 상경해 여의도에서 근무하고 있습니다.</p>
            </div>
          </div>
          <video autoPlay muted loop style={{ "width": '50%',"height":"auto" }}>
            <source src="/videos/dance.mp4"/>
          </video>
        </div>
      </section> */}
      <div className="m-auto" style={{ width: '1024px' }}>
        <section className="culture section-1 flex justify-center items-center">
          <div>
            <p className="slogan">
              <span>개발자 우원을 소개합니다.</span>
            </p>
          </div>
        </section>
        <section className="culture section-2">
          <div className="m-auto flex" style={{ width: '1024px' }}>
            <div className="video-div" style={{ width: '50%' }}>
              <div>
                <p className="video-p-1">
                  <span>우원의</span>
                </p>
                <p className="video-p-2">
                  <span>인적사항</span>
                </p>
              </div>
            </div>
            <div
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '1px 1px 10px 1px rgb(220 230 230)',
                borderRadius: '10px',
                height: '600px',
              }}
            >
              <div>
                <p
                  style={{ fontFamily: 'Noto Sans KR Light', fontSize: '25px' }}
                >
                  이름 : 우원
                </p>
                <p
                  style={{ fontFamily: 'Noto Sans KR Light', fontSize: '25px' }}
                >
                  생년월일 : 1994년 7월 6일
                </p>
                <p
                  style={{ fontFamily: 'Noto Sans KR Light', fontSize: '25px' }}
                >
                  주소지 : 서울시 영등포구
                </p>
                <p
                  style={{
                    fontFamily: 'Noto Sans KR Light',
                    fontSize: '25px',
                    margin: '0',
                  }}
                >
                  학력
                </p>
                <p
                  style={{
                    fontFamily: 'Noto Sans KR Light',
                    fontSize: '25px',
                    margin: '0',
                  }}
                >
                  {' '}
                  - 부경대학교 융합디스플레이공학{' '}
                </p>
                <p
                  style={{
                    fontFamily: 'Noto Sans KR Light',
                    fontSize: '25px',
                    margin: '0',
                    marginBottom: '20px',
                  }}
                >
                  {' '}
                  - 부경대학교 산업대학원 컴퓨터공학 중퇴
                </p>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '10px', cursor: 'grab' }}>
                    <Link href={'https://github.com/thewoowon'}>
                      <Image
                        src={github}
                        width={'50px'}
                        height={'50px'}
                      ></Image>
                    </Link>
                  </div>
                  {/* <div style={{"marginRight":"10px","cursor":"grab"}}>
                  <Link href={"https://velog.io/@thewoowon"}  style={{"marginRight":"10px","cursor":"grab"}}>
                    <Image src={velog} width={"50px"} height={"50px"}></Image>
                  </Link>
                </div> */}
                  <div style={{ marginRight: '10px', cursor: 'grab' }}>
                    <Link
                      href={'https://woowon.oopy.io/'}
                      style={{ marginRight: '10px', cursor: 'grab' }}
                    >
                      <Image
                        src={notion}
                        width={'50px'}
                        height={'50px'}
                      ></Image>
                    </Link>
                  </div>
                </div>
                {/* <Link href={"https://www.instagram.com/thejobyouhate/"}>
                <Image src={instagram} width={"50px"} height={"50px"}></Image>
              </Link> */}
              </div>
            </div>
          </div>
        </section>
        <section className="culture section-3">
          <div className="m-auto flex" style={{ width: '1024px' }}>
            <div className="video-div" style={{ width: '50%' }}>
              <div>
                <p className="video-p-1">
                  <span>우원의</span>
                </p>
                <p className="video-p-2">
                  <span>프론트엔드</span>
                </p>
                <p className="video-p-2">
                  <span>스킬 셋</span>
                </p>
              </div>
            </div>
            <div
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '1px 1px 10px 1px rgb(220 230 230)',
                borderRadius: '10px',
                height: '600px',
              }}
            >
              <div style={{ width: '80%' }}>
                <Image src={frontEndAll}></Image>
              </div>
            </div>
          </div>
        </section>
        <section className="culture section-4">
          <div className="m-auto flex" style={{ width: '1024px' }}>
            <div className="video-div" style={{ width: '50%' }}>
              <div>
                <p className="video-p-1">
                  <span>우원의</span>
                </p>
                <p className="video-p-2">
                  <span>백엔드</span>
                </p>
                <p className="video-p-2">
                  <span>스킬 셋</span>
                </p>
              </div>
            </div>
            <div
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '1px 1px 10px 1px rgb(220 230 230)',
                borderRadius: '10px',
                height: '600px',
              }}
            >
              <div style={{ width: '80%' }}>
                <Image src={backEndAll}></Image>
              </div>
            </div>
          </div>
        </section>
        <section className="culture section-5">
          <div className="m-auto flex" style={{ width: '1024px' }}>
            <div className="video-div" style={{ width: '50%' }}>
              <div>
                <p className="video-p-1">
                  <span>우원의</span>
                </p>
                <p className="video-p-2">
                  <span>추가</span>
                </p>
                <p className="video-p-2">
                  <span>스킬 셋</span>
                </p>
              </div>
            </div>
            <div
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '1px 1px 10px 1px rgb(220 230 230)',
                borderRadius: '10px',
                height: '600px',
              }}
            >
              <div style={{ width: '80%' }}>
                <Image src={othersAll}></Image>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="culture section-6">
            <p className="center-title text-position-1">도전</p>
            <p className='size-p'><span>도전을 장려하는 문화</span></p>
            <p className='size-p'><span>함께하는 동료들</span></p>
        </section>
        <section className="culture  section-7">
            <p className="center-title text-position-2">변화</p>
            <p className='size-p'><span>변화,</span></p>
            <p className='size-p'><span>보다 나은 미래를 위해</span></p>
        </section>
        <section className="culture section-8">
            <p className="center-title text-position-3">상호존중</p>
            <p className='size-p'><span>함께함의 의미</span></p>
            <p className='size-p'><span>그 이상의 가치</span></p>
        </section> */}
      </div>
    </Layout>
  );
};

export default Culture;
