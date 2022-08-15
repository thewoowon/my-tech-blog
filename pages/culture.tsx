import React from 'react';
import Layout from '../components/Layout';
import trio from '../images/character/ubtrio.svg';
import ub from '../images/character/ub.svg';
import ujune from '../images/character/ujune.svg';
import uki from '../images/character/uki.svg';
import ubfriends from '../images/character/ubfriends.svg';
import ubfriendsNone from '../images/character/ubfriends_none.svg';
import Image from 'next/image';


export const Culture = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Culture UBCARE TECH',
      }}
    >
      <section className="culture section-1">
          <Image src={ubfriends} alt="ubfriends" width={550} height={500} className="friends-box"></Image>
          <p className="slogan">세상이 꿈꾸던 헬스케어</p>
          <p className="ubf">유비 프렌즈와 함께 하세요!</p>
      </section>
      <section className="culture section-2">
      <Image src={ubfriendsNone} alt="ubfriends" width={550} height={500} className="friends-box"></Image>
      </section>
      <section className="culture section-3">
        <Image src={ujune} alt="ujune" width={250} height={350} className="ujune-box"></Image>
      </section>
      <section className="culture section-4">
        <Image src={uki} alt="uki" width={150} height={250} className="uki-box"></Image>
      </section>
    </Layout>
  );
};

export default Culture;
