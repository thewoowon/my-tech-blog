import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import Link from 'next/link';
import Image from 'next/image';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://ubcare.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header className="fixed top-0 z-50 w-full bg-white border-b-2 border-b-gray-300">
        <div className="max-w-5xl px-8 mx-auto flex">
          <div className="w-3/12 flex" style={{alignItems:"center"}}>
            <Link href={"/"}>
              <a style={{fontSize:"30px",fontWeight:"bold",color:"#ff7f00",lineHeight:"32px"}}>UBCARE<br></br> TECH<br></br>BLOG</a>
            </Link>
          </div>
          <div className="w-9/12 flex items-center justify-end py-6">
            <Navigation />
          </div>
        </div>
      </header>
      <main style={{paddingTop:"110px"}}>
        <div>{children}</div>
      </main>
      <footer className="py-8 h-72" style={{backgroundColor:"rgba(247,247,247,1)"}}>
        <div className="m-auto w-2/5 h-full">
          <div className="h-1/4">
            <p className="text-2xl text-center font-bold" style={{color:"rgba(234,88,12,1)"}}>UBCARE TECH</p>
          </div>
          <div className="h-2/4 flex items-center justify-center">
            <Image src={"/assets/gc_care.png"} width={100} height={50}></Image>
            <Image src={"/assets/bbros.png"} width={200} height={100}></Image>
            <Image src={"/assets/hecton.png"} width={100} height={50}></Image>
          </div>
          <div className="h-1/4 border-t-2 flex justify-center items-center">
            <p className="text-black text-center text-xs" style={{color:"rgba(200,200,200,1)"}}>UBCARE. ALL RIGHTS RESERVED. POWERED BY VERCEL</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
