import React, { useEffect, useState } from 'react';

const Workout = ({ data }) => {
  const [maxData, setMaxData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const max = data.reduce((a, b) =>
        a.calories > b.calories ? a : b
      );
      setMaxData(max);
    }
  }, [data]);

  const caloriesPerHour = maxData
    ? Math.round((maxData.calories / maxData.duration) * 60)
    : 'N/A';

  return (
    <>
      <h2 className="text-xl font-medium mx-9 my-5  md:ml-36">Welcome!, <span className='font-light text-base text-gray-400'>User</span></h2>
      <div className="w-[300px] md:w-[61.2%] lg:w-[80%] h-[191px] mx-9 md:mx-36 p-6 bg-[#EEEEEE] border border-gray-200 rounded-lg shadow-sm">
        <p className="mb-2 font-bold tracking-tight text-gray-900">Your workout</p>
        <p className="font-normal text-gray-700">Results for today's workout</p>
  
        {maxData ? (
          <div className="flex flex-col text-xs mt-2 space-y-2">
            <div className="flex items-center">
              <div className="w-8 h-2 rounded-full bg-[#983535]"></div>
              <p className="ml-2 lg:text-base lg:font-medium">
                Calories Burned <span className="ml-4">{maxData.calories} cal</span>
              </p>
            </div>
  
            <div className="flex items-center">
              <div className="w-6 h-2 rounded-full bg-[#6B6E7B]"></div>
              <p className="ml-2 lg:text-base lg:font-medium">
                Duration <span className="ml-4">{maxData.duration} min</span>
              </p>
            </div>
  
            <div className="flex items-center">
              <div className="w-10 h-2 rounded-full bg-[#8676FE]"></div>
              <p className="ml-2 lg:text-base lg:font-medium">
                Calories/hr <span className="ml-4">{caloriesPerHour} cal</span>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-400 mt-4">No workout data available yet.</p>
        )}
      </div>
    </>
  );
};

export default Workout;
