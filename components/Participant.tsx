import React from 'react';

function Participant({ contents }: { contents: string }) {
  return (
    <div
      style={{ width: '400px', height: '500px' }}
      className="bg-gray-50 shadow-lg rounded-xl p-10 text-black overflow-scroll"
    >
      <div className="text-3xl font-medium">
        우원<span className="text-lg px-5">FE Developer</span>
      </div>
      <div className="py-4 text-lg font-medium">{contents}</div>
    </div>
  );
}

export default Participant;
