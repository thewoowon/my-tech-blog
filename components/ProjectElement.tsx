import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
import { ProjectType } from '../types/project';

function ProjectElement({ project }: { project: ProjectType }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(project.router);
      }}
      className="py-4 px-2 cursor-pointer hover:shadow-lg rounded-lg transition duration-300 ease-in-out"
      style={{ maxWidth: '400px', minWidth: '200px' }}
    >
      <div className="h-48">
        <Image
          className="rounded-xl"
          src={project.image}
          alt={project.path}
          width={300}
          height={200}
        ></Image>
      </div>
      <div className="text-sm font-semibold pt-5">{project.type}</div>
      <div className="text-2xl font-bold py-2">{project.title}</div>
      <div className="text-sm">{project.description}</div>
      <div className="flex flex-wrap text-sm py-2 gap-1">
        {project &&
          project.stacks.map((element, iter) => {
            return (
              <div key={iter} className="px-2 border border-gray-400">
                {element}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProjectElement;
