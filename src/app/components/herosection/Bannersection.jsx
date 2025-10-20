import React from 'react';
import Leftside from './Leftside';
import RightSide from './RightSide';

const Bannersection = () => {
  return (
    <div className="flex flex-col space-y-7 md:space-y-0 md:flex-row items-center justify-center md:justify-around h-screen px-4 md:px-16 gap-10 md:gap-0">
      <div className="w-full md:w-auto flex justify-center">
        <Leftside />
      </div>
      <div className="w-full md:w-auto flex justify-center">
        <RightSide />
      </div>
    </div>
  );
};

export default Bannersection;
