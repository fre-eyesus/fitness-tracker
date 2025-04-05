import React from 'react';
import Menu from '../components/Menu';
const Workout = () => {
  return (
    <>
      <h2 className="text-xl font-medium mx-6 my-2 md:ml-36">Welcome!, <span className='font-light text-base text-gray-400'>User</span></h2>
  
      <div className="w-[300px] md:w-[61.2%] h-[191px] mx-6 md:mx-36 p-6 bg-[#EEEEEE] border border-gray-200 rounded-lg shadow-sm">
        <p className="mb-2 font-bold tracking-tight text-gray-900">Your workout</p>
        <p className="font-normal text-gray-700">Results for today's workout</p>

        <div className="flex flex-col text-xs mt-2 space-y-2">
          <div className="flex items-center">
            <div className="w-8 h-2 rounded-full bg-[#983535]"></div>
            <p className="ml-2 lg:text-base lg:font-medium">
              Calories Burned <span className="ml-4">505 cal</span>
            </p>    
          </div>

          <div className="flex items-center">
            <div className="w-6 h-2 rounded-full bg-[#6B6E7B]"></div>
            <p className="ml-2 lg:text-base lg:font-medium">
              Weight Loss <span className="ml-4">0.5 lbs</span>
            </p>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-2 rounded-full bg-[#8676FE]"></div>
            <p className="ml-2 lg:text-base lg:font-medium">Steps Walked</p>
            <span className="ml-4">2,500 steps</span>
          </div>
        </div>
  </div>
    </>
  );
};

export default Workout;
 