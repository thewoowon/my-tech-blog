import React from 'react';

function Participant({ contents }: { contents: string }) {
  return (
    <div
      style={{ width: '400px', height: '500px' }}
      className="shadow-lg rounded-xl p-10 text-black overflow-hidden bg-white text-left"
    >
      <div className="text-3xl font-medium">
        {"Won's Comment"}
        <p className="text-lg">FE Developer</p>
      </div>
      <div className="py-4 text-lg font-medium">{contents}</div>
    </div>
  );
}

export default Participant;
