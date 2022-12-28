import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { distribution, projects } from '../../constants/posts';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import Image from 'next/image';
import ProjectElement from '../../components/ProjectElement';

export default function Portfolio() {
  const router = useRouter();
  const [myDistribution, setMyDistribution] = useState<string>('All');
  const animateDiv_1 = useScrollFadeIn();
  const animateDiv_2 = useScrollFadeIn();

  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | PROJECT',
      }}
    >
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
                setMyDistribution(name);
              }}
              key={iter}
              className="cursor-pointer font-semibold px-8 py-4 bg-gray-200 rounded-full transition duration-200 hover:bg-green-400 hover:text-white"
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
          {projects && myDistribution === 'All'
            ? projects.map((project) => {
                return (
                  <ProjectElement
                    project={project}
                    key={project.id}
                  ></ProjectElement>
                );
              })
            : projects
                .filter((project) => project.type === myDistribution)
                .map((project) => {
                  return (
                    <ProjectElement
                      project={project}
                      key={project.id}
                    ></ProjectElement>
                  );
                })}
        </div>
      </div>
    </Layout>
  );
}
