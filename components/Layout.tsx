import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import Image from 'next/image';
import Logo from '../images/logo/ubcare_tech_logo.png';

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
      <footer className="py-8 bg-orange-600 h-96">
          
      </footer>
    </>
  );
};

export default Layout;
