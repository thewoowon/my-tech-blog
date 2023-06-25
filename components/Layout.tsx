import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import Link from 'next/link';
import Image from 'next/image';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://my-tech-blog-beta.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const animateDiv_1 = useScrollFadeIn();
  return (
    <>
      <Head customMeta={customMeta} />
      <header className="border-b-2 border-black fixed top-0 z-50 w-full bg-white dark:bg-black text-gray-900 dark:text-white">
        <div className="max-w-5xl px-8 mx-auto flex">
          <div className="w-6/12 flex" style={{ alignItems: 'center' }}>
            <Link
              href={'/'}
              replace={true}
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'black',
                lineHeight: '22px',
              }}
            >
              <span className="tech-blog-title">THEWOOWON</span>
            </Link>
          </div>
          <div className="w-6/12 flex items-center justify-end">
            <Navigation />
          </div>
        </div>
      </header>
      <main style={{ paddingTop: '55px' }}>
        <div className="relative">{children}</div>
      </main>
      <footer
        className="py-20 font-sans-kr-light text-md xs:text-md"
        style={{ borderTop: '0.5px solid rgba(230,230,230,1)' }}
      >
        <div
          className="flex flex-wrap mx-auto h-full items-center"
          style={{ maxWidth: '1080px' }}
        >
          <div className="rounded-full">
            <Image
              src={'/images/tb_logo_abstract.png'}
              width={100}
              height={100}
              alt="logo"
            ></Image>
          </div>
          <div
            {...animateDiv_1}
            className="px-10 text-2xl lg:text-4xl font-bold"
          >
            안녕하세요. 우원입니다
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
