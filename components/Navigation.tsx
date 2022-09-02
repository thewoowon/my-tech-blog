import Link from 'next/link';
import React from 'react';


const Navigation = (): JSX.Element => {
  return (
    <nav className="flex justify-end">
      <Link href="/">
        <a className=" dark:text-white pr-6 py-4 hover:text-gray-500 font" style={{fontSize:"18px",fontFamily:"Noto_Sans",color:"#3B3838"}}>HOME</a>
      </Link>
      <Link href="/tech">
        <a className=" dark:text-white pr-6 py-4 hover:text-gray-500" style={{fontSize:"18px",fontFamily:"Noto_Sans",color:"#3B3838"}}>TECH</a>
      </Link>
      <Link href="/culture">
        <a className=" dark:text-white pr-6 py-4 hover:text-gray-500" style={{fontSize:"18px",fontFamily:"Noto_Sans",color:"#3B3838"}}>CULTURE</a>
      </Link>
      {/* <Link href="/news">
        <a className="text-gray-900 dark:text-white pr-6 py-4 hover:text-gray-500" style={{fontSize:"18px",fontFamily:"Noto_Sans"}}>NEWS</a>
      </Link> */}
    </nav>
  );
};

export default Navigation;
