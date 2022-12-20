import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { replace } from 'lodash';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconMail,
  IconRecordMail,
  IconUser,
} from '@tabler/icons';
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
      <header
        className="fixed top-0 z-50 w-full bg-white"
        style={{ borderBottom: '1px solid rgba(200,200,200,0.5)' }}
      >
        <div className="max-w-5xl px-8 mx-auto flex">
          <div className="w-6/12 flex" style={{ alignItems: 'center' }}>
            <Link href={'/'} replace={true}>
              <a
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#ff7f00',
                  lineHeight: '28px',
                  fontFamily: 'Noto_Sans',
                }}
              >
                <span className="tech-blog-title">우원</span>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    lineHeight: '18px',
                    fontFamily: 'Noto_Sans',
                    color: '#3B3838',
                  }}
                >
                  {' '}
                  기술 블로그
                </span>
              </a>
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
          className="flex mx-auto h-full items-center"
          style={{ maxWidth: '1080px' }}
        >
          <div>
            <Image
              src={'/images/tb_logo_rounded.svg'}
              width={100}
              height={90}
            ></Image>
          </div>
          <div {...animateDiv_1} className="px-10 text-4xl font-bold">
            안녕하세요 👏 우원입니다!
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
