import React from 'react';

const Progress = () => {
  return (
    <div className="mx-4 block w-[330px] h-[428px] p-6 bg-[#EEEEEE] border border-gray-200 rounded-lg shadow-sm md:w-[29.66%] md:h-[18.82%] md:mt-4 md:mx-0 md:ml-4">
        <p className='font-bold tracking-tight text-gray-900'>Progress</p>
        <div className='w-[200px] mt-50 mx-auto'>
          <div className='flex flex-row justify-between mt-2'>
            <div className='flex flex-row'><div className="mt-1 w-2 h-2 rounded-full bg-[#FFD02A]"></div><p className='text-sm px-2 font-normal text-[12px] text-gray-500'>Cardio</p></div><p className='text-xs text-medium text-[#9D9D9D]'>30 hrs</p>
          </div>
          <div className='flex flex-row justify-between mt-2'>
            <div className='flex flex-row'><div className="mt-1 w-2 h-2 rounded-full bg-[#FFB578]"></div><p className='text-sm px-2 font-normal text-[12px] text-gray-500'>Stretching</p></div><p className='text-xs text-medium text-[#9D9D9D]'>40 hrs</p>
          </div>
          <div className='flex flex-row justify-between mt-2'>
            <div className='flex flex-row'><div className="mt-1 w-2 h-2 rounded-full bg-[#8676]"></div><p className='text-sm px-2 font-normal text-[12px] text-gray-500'>Treadmil</p></div><p className='text-xs text-medium text-[#9D9D9D]'>30 hrs</p>
          </div>
          <div className='flex flex-row justify-between mt-2'>
            <div className='flex flex-row'><div className="mt-1 w-2 h-2 rounded-full bg-[#8676FE]"></div><p className='text-sm px-2 font-normal text-[12px] text-gray-500'>Strength</p></div><p className='text-xs text-medium text-[#9D9D9D]'>20 hrs</p>
          </div>
          
          
        </div>
    </div>
  );
};

export default Progress; 