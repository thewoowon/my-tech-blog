import Link from 'next/link';
import React from 'react';


const Navigation = (): JSX.Element => {
  return (
    <nav className="flex justify-end">
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4 hover:text-gray-500 font" style={{fontSize:"18px",fontFamily:"Noto_Sans"}}>HOME</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white pr-6 py-4 hover:text-gray-500" style={{fontSize:"18px",fontFamily:"Noto_Sans"}}>TECH</a>
      </Link>
      <Link href="/culture">
        <a className="text-gray-900 dark:text-white pr-6 py-4 hover:text-gray-500" style={{fontSize:"18px",fontFamily:"Noto_Sans"}}>CULTURE</a>
      </Link>
      <Link href="/news">
        <a className="text-gray-900 dark:text-white pr-6 py-4 hover:text-gray-500" style={{fontSize:"18px",fontFamily:"Noto_Sans"}}>NEWS</a>
      </Link>
    </nav>
  );
};

export default Navigation;
