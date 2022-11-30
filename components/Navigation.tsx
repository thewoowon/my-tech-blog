import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav className="flex justify-end">
      <Link href="/">
        <a
          className="text-gray-900 transition duration-300 ease-in-out  dark:text-white pr-6 py-4 hover:text-green-400"
          style={{
            fontSize: '18px',
            fontFamily: 'Noto Sans KR Light',
          }}
        >
          HOME
        </a>
      </Link>
      <Link href="/post/all">
        <a
          className="text-gray-900 transition duration-300 ease-in-out dark:text-white pr-6 py-4 hover:text-green-400"
          style={{
            fontSize: '18px',
            fontFamily: 'Noto Sans KR Light',
          }}
        >
          POST
        </a>
      </Link>
      <Link href="https://my.surfit.io/w/80781724">
        <a
          target="_blank"
          className="text-gray-900 transition duration-300 ease-in-out dark:text-white pr-6 py-4 hover:text-green-400"
          style={{
            fontSize: '18px',
            fontFamily: 'Noto Sans KR Light',
          }}
        >
          PROFILE
        </a>
      </Link>
      <Link href="https://github.com/thewoowon">
        <a
          target="_blank"
          className="text-gray-900 transition duration-300 ease-in-out dark:text-white pr-6 py-4 hover:text-green-400"
          style={{
            fontSize: '18px',
            fontFamily: 'Noto Sans KR Light',
          }}
        >
          GitHub
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
