import React from 'react';

function Participant() {
  return (
    <div
      style={{ width: '400px', height: '500px' }}
      className="bg-gray-50 shadow-lg rounded-xl p-10 text-black"
    >
      <div className="text-3xl font-medium">
        우원<span className="text-lg px-5">☘️ 주니어 개발자</span>
      </div>
      <div className="py-4 text-lg font-medium">준비중</div>
    </div>
  );
}

export default Participant;
