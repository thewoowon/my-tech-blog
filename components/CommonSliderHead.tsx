import React from 'react';

function CommonSliderHead({ title }: { title: string }) {
  return (
    <div className="max-w-5xl py-8 mx-auto px-8 text-2xl">
      프로젝트<span className="px-4">＞</span>
      <span className="font-bold">{title}</span>
    </div>
  );
}

export default CommonSliderHead;
