import React from 'react';
import { projects } from '../constants/posts';
import Participant from './Participant';
import ProjectElement from './ProjectElement';

function CommonSliderBody() {
  return (
    <div className="max-w-5xl py-16 mx-auto px-8 text-4xl font-bold">
      <div className="py-10">참가자</div>
      <div>
        <Participant></Participant>
      </div>
      <div className="py-10 mt-16">프로젝트 더보기</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full">
        {projects.map((project) => {
          return (
            <ProjectElement project={project} key={project.id}></ProjectElement>
          );
        })}
      </div>
    </div>
  );
}

export default CommonSliderBody;
