import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navigation = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(0);
  // resize 될때만 함수 불러오기
  let timer: string | number | NodeJS.Timeout;
  const resizeWindow = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // 현재 window width 값
      setWindowWidth(window.innerWidth);
    }, 200);
  };
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, [windowWidth]);
  return (
    <nav className="relative flex justify-end">
      {windowWidth <= 768 ? (
        <div>
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="cursor-pointer text-black transition duration-200 ease-in-out  dark:text-white py-4 hover:text-gray-500 text-2xl"
          >
            ⌘
          </div>
          {toggle && (
            <div className="flex flex-col justify-center items-center absolute bg-white -left-10 rounded-md ">
              <Link href="/">
                <a className="text-black transition duration-200 ease-in-out  dark:text-white px-10 py-4 hover:text-gray-500">
                  홈
                </a>
              </Link>
              <Link href="/post/all">
                <a className="text-black transition duration-200 ease-in-out dark:text-white py-4 hover:text-gray-500">
                  게시물
                </a>
              </Link>
              <Link href="https://my.surfit.io/w/80781724">
                <a
                  target="_blank"
                  className="text-black transition duration-200 ease-in-out dark:text-white py-4 hover:text-gray-500"
                >
                  프로필
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="text-black transition duration-200 ease-in-out dark:text-white py-4 hover:text-gray-500">
                  프로젝트
                </a>
              </Link>
              <Link href="https://github.com/thewoowon">
                <a
                  target="_blank"
                  className="text-black transition duration-200 ease-in-out dark:text-white py-4 hover:text-gray-500"
                >
                  깃허브
                </a>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <>
          <Link href="/">
            <a className="text-black transition duration-200 ease-in-out  dark:text-white pr-6 py-4 hover:text-gray-500">
              홈
            </a>
          </Link>
          <Link href="/post/all">
            <a className="text-black transition duration-200 ease-in-out dark:text-white pr-6 py-4 hover:text-gray-500">
              게시물
            </a>
          </Link>
          <Link href="https://my.surfit.io/w/80781724">
            <a
              target="_blank"
              className="text-black transition duration-200 ease-in-out dark:text-white pr-6 py-4 hover:text-gray-500"
            >
              프로필
            </a>
          </Link>
          <Link href="/portfolio">
            <a className="text-black transition duration-200 ease-in-out dark:text-white pr-6 py-4 hover:text-gray-500">
              프로젝트
            </a>
          </Link>
          <Link href="https://github.com/thewoowon">
            <a
              target="_blank"
              className="text-black transition duration-200 ease-in-out dark:text-white pr-6 py-4 hover:text-gray-500"
            >
              깃허브
            </a>
          </Link>
          {/* <ThemeSwitch></ThemeSwitch> */}
        </>
      )}
    </nav>
  );
};

export default Navigation;
