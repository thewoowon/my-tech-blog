import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { distribution } from '../../constants/posts';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import Image from 'next/image';

export default function Portfolio() {
  const router = useRouter();
  const [myDistribution, setMyDistribution] = useState<number>(0);
  const animateDiv_1 = useScrollFadeIn();
  const animateDiv_2 = useScrollFadeIn();

  return (
    <Layout>
      <div
        {...animateDiv_1}
        className="flex justify-center items-center pt-12 text-6xl font-bold"
      >
        프로젝트
      </div>
      <div
        {...animateDiv_2}
        className="flex justify-center items-center py-6 text-2xl"
      >
        우원의 프로젝트를 확인해보세요!
      </div>
      <div className="flex flex-wrap justify-center items-center py-6 text-md gap-4">
        {distribution.map((name, iter) => {
          return (
            <div
              onClick={() => {
                setMyDistribution(iter);
              }}
              key={iter}
              className="font-semibold px-8 py-4 bg-gray-200 rounded-full transition duration-200 hover:bg-green-400 hover:text-white"
            >
              {name}
            </div>
          );
        })}
      </div>
      <div
        style={{ maxWidth: '1240px' }}
        className="flex justify-center items-center mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full">
          <div
            onClick={() => {
              router.push('/portfolio/wmc');
            }}
            className="py-4 px-2 cursor-pointer hover:shadow-lg rounded-lg transition duration-300 ease-in-out"
            style={{ maxWidth: '400px', minWidth: '200px' }}
          >
            <div className="h-48">
              <Image
                className="rounded-xl"
                src={'/assets/wmc_thumb.png'}
                alt="wmc"
                width={300}
                height={200}
              ></Image>
            </div>
            <div className="text-sm font-semibold pt-5">{'Personal'}</div>
            <div className="text-2xl font-bold py-2">{'WMC'}</div>
            <div className="text-sm">{'We Make the Code, 개발자들의 공간'}</div>
            <div className="flex text-sm py-2">
              <div className="px-2 border border-gray-400 mr-1">
                {'Next.js'}
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              router.push('/portfolio/lovekong');
            }}
            className="py-4 px-2 cursor-pointer hover:shadow-lg rounded-lg transition duration-300 ease-in-out"
            style={{ maxWidth: '400px', minWidth: '200px' }}
          >
            <div className="h-48">
              <Image
                className="rounded-xl"
                src={'/assets/lovekong_thumb.png'}
                alt="lovekong"
                width={300}
                height={200}
              ></Image>
            </div>
            <div className="text-sm font-semibold pt-5">{'Personal'}</div>
            <div className="text-2xl font-bold py-2">
              {'러브콩 스테인드 글라스'}
            </div>
            <div className="text-sm">
              {'지인의 스테인드 글라스 제품을 판매하는 커머스 웹앱'}
            </div>
            <div className="flex text-sm py-2">
              <div className="px-2 border border-gray-400 mr-1">
                {'Next.js'}
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              router.push('/portfolio/hiagile');
            }}
            className="py-4 px-2 cursor-pointer hover:shadow-lg rounded-lg transition duration-300 ease-in-out"
            style={{ maxWidth: '400px', minWidth: '200px' }}
          >
            <div className="h-48">
              <Image
                className="rounded-xl"
                src={'/assets/hiagile_thumb.png'}
                alt="hiagile"
                width={300}
                height={200}
              ></Image>
            </div>
            <div className="text-sm font-semibold pt-5">{'Organization'}</div>
            <div className="text-2xl font-bold py-2">
              {'하이! 애자일(Hi! Agile)'}
            </div>
            <div className="text-sm">{'프로젝트 관리를 위한 웹앱'}</div>
            <div className="flex text-sm py-2">
              <div className="px-2 border border-gray-400 mr-1">{'React'}</div>
              <div className="px-2 border border-gray-400 mr-1">{'Nestjs'}</div>
              <div className="px-2 border border-gray-400 mr-1">
                {'GraphQL'}
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              router.push('/portfolio/saladpeace');
            }}
            className="py-4 px-2 cursor-pointer hover:shadow-lg rounded-lg transition duration-300 ease-in-out"
            style={{ maxWidth: '400px', minWidth: '200px' }}
          >
            <div className="h-48">
              <Image
                className="rounded-xl"
                src={'/assets/saladpeace_thumb.png'}
                alt="hiagile"
                width={300}
                height={200}
              ></Image>
            </div>
            <div className="text-sm font-semibold pt-5">{'Personal'}</div>
            <div className="text-2xl font-bold py-2">
              {'샐러드피스(Salad Peace)'}
            </div>
            <div className="text-sm">
              {'직장인들의 샐러드 생활을 위한 거점 배송 서비스'}
            </div>
            <div className="flex text-sm py-2">
              <div className="px-2 border border-gray-400 mr-1">{'React'}</div>
              <div className="px-2 border border-gray-400 mr-1">{'Nestjs'}</div>
              <div className="px-2 border border-gray-400 mr-1">
                {'GraphQL'}
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              router.push('/portfolio/ubtech');
            }}
            className="py-4 px-2 cursor-pointer hover:shadow-lg rounded-lg transition duration-300 ease-in-out"
            style={{ maxWidth: '400px', minWidth: '200px' }}
          >
            <div className="h-48">
              <Image
                className="rounded-xl"
                src={'/assets/ubtech_thumb.png'}
                alt="hiagile"
                width={300}
                height={200}
              ></Image>
            </div>
            <div className="text-sm font-semibold pt-5">{'Personal'}</div>
            <div className="text-2xl font-bold py-2">
              {'유비케어 기술블로그'}
            </div>
            <div className="text-sm">{'유비케어를 위한 기술블로그'}</div>
            <div className="flex text-sm py-2">
              <div className="px-2 border border-gray-400 mr-1">
                {'Next.js'}
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              router.push('/portfolio/solvabot');
            }}
            className="py-4 px-2 cursor-pointer hover:shadow-lg rounded-lg transition duration-300 ease-in-out"
            style={{ maxWidth: '400px', minWidth: '200px' }}
          >
            <div className="h-48">
              <Image
                className="rounded-xl"
                src={'/assets/solvabot_thumb.png'}
                alt="hiagile"
                width={300}
                height={200}
              ></Image>
            </div>
            <div className="text-sm font-semibold pt-5">{'Personal'}</div>
            <div className="text-2xl font-bold py-2">{'솔바 봇'}</div>
            <div className="text-sm">
              {'개발자들의 비상주 시간을 위한 챗봇'}
            </div>
            <div className="flex text-sm py-2">
              <div className="px-2 border border-gray-400 mr-1">{'.NET'}</div>
              <div className="px-2 border border-gray-400 mr-1">
                {'Bot Framework'}
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              router.push('/portfolio/solvabotmanager');
            }}
            className="py-4 px-2 cursor-pointer hover:shadow-lg rounded-lg transition duration-300 ease-in-out"
            style={{ maxWidth: '400px', minWidth: '200px' }}
          >
            <div className="h-48">
              <Image
                className="rounded-xl"
                src={'/assets/solvabotmanager_thumb.png'}
                alt="hiagile"
                width={300}
                height={200}
              ></Image>
            </div>
            <div className="text-sm font-semibold pt-5">{'개인'}</div>
            <div className="text-2xl font-bold py-2">{'솔바 봇 매니저'}</div>
            <div className="text-sm">{'솔바 봇의 관리자 웹앱'}</div>
            <div className="flex text-sm py-2">
              <div className="px-2 border border-gray-400 mr-1">{'.NET'}</div>
              <div className="px-2 border border-gray-400 mr-1">{'Blazor'}</div>
            </div>
          </div>
          <div
            onClick={() => {
              router.push('/portfolio/solvaagora');
            }}
            className="py-4 px-2 cursor-pointer hover:shadow-lg rounded-lg transition duration-300 ease-in-out"
            style={{ maxWidth: '400px', minWidth: '200px' }}
          >
            <div className="h-48">
              <Image
                className="rounded-xl"
                src={'/assets/solvaagora_thumb.png'}
                alt="hiagile"
                width={300}
                height={200}
              ></Image>
            </div>
            <div className="text-sm font-semibold pt-5">{'개인'}</div>
            <div className="text-2xl font-bold py-2">{'솔바 아고라'}</div>
            <div className="text-sm">{'솔바테크놀러지의 아고라 웹앱'}</div>
            <div className="flex text-sm py-2">
              <div className="px-2 border border-gray-400 mr-1">{'.NET'}</div>
              <div className="px-2 border border-gray-400 mr-1">{'Blazor'}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
