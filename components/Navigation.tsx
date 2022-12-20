import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav className="flex justify-end">
      <Link href="/">
        <a
          className="text-black transition duration-200 ease-in-out  dark:text-white pr-6 py-4 hover:text-gray-500"
          style={{
            fontSize: '16px',
            fontFamily: 'Noto Sans KR Light',
          }}
        >
          홈
        </a>
      </Link>
      <Link href="/post/all">
        <a
          className="text-black transition duration-200 ease-in-out dark:text-white pr-6 py-4 hover:text-gray-500"
          style={{
            fontSize: '16px',
            fontFamily: 'Noto Sans KR Light',
          }}
        >
          게시물
        </a>
      </Link>
      <Link href="https://my.surfit.io/w/80781724">
        <a
          target="_blank"
          className="text-black transition duration-200 ease-in-out dark:text-white pr-6 py-4 hover:text-gray-500"
          style={{
            fontSize: '16px',
            fontFamily: 'Noto Sans KR Light',
          }}
        >
          프로필
        </a>
      </Link>
      <Link href="/portfolio">
        <a
          className="text-black transition duration-200 ease-in-out dark:text-white pr-6 py-4 hover:text-gray-500"
          style={{
            fontSize: '16px',
            fontFamily: 'Noto Sans KR Light',
          }}
        >
          포트폴리오
        </a>
      </Link>
      <Link href="https://github.com/thewoowon">
        <a
          target="_blank"
          className="text-black transition duration-200 ease-in-out dark:text-white pr-6 py-4 hover:text-gray-500"
          style={{
            fontSize: '16px',
            fontFamily: 'Noto Sans KR Light',
          }}
        >
          깃허브
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
