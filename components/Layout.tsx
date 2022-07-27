import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import Image from 'next/image';
import Logo from '../images/logo/ubcare_tech_logo.png';
import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://ubcare.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto relative">
          <div className="absolute" style={{top:"5px"}}>
            <Image src={Logo} width={200} height={100} alt={"logo"}></Image>
          </div>
          <div className="flex items-center justify-end py-6">
            <Navigation />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-full">{children}</div>
      </main>
      <footer className="py-8 h-96" style={{backgroundColor:"rgba(255,137,25,1)"}}>
        <div className="m-auto w-2/5 h-full">
        <div className="h-1/4">
            <p className="text-white text-2xl text-center">UBCARE TECH</p>
          </div>
          <div className="h-2/4 flex">
            <div className="w-3/6">
              <div>
                <p className="text-white text-center">SITE MAP</p>
              </div>
              <div>
                <div className="text-center">
                  <Link href={"https://www.ubcare.co.kr/"}>
                    <a className="text-white">
                      공식 홈페이지
                    </a>
                  </Link>
                </div>
                <div className="text-center">
                  <Link href={"https://www.misomall.com/"}>
                    <a className="text-white">
                      미소몰 닷컴
                    </a>
                  </Link>
                </div>
                <div className="text-center">
                  <Link href={"https://www.ubcare.co.kr/BBS/41/Recruit"}>
                    <a className="text-white">
                      채용
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div  className="w-3/6">
              <div>
                <p className="text-white text-center">CONTACT</p>
              </div>
              <div>
                <p className="text-white text-center">thewoowon@ubcare.co.kr</p>
              </div>
            </div>
          </div>
          <div className="h-1/4">
            <p className="text-white text-center">UBCARE. ALL RIGHTS RESERVED. POWERED BY VERCEL</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
