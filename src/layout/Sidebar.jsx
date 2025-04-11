import React from 'react';
import acc from '../assets/acc.svg';
const Sidebar = () => {
  return (
    <aside className="ml-9.5 w-full max-w-[300px] bg-[#EEEEEE] p-4 flex flex-col space-y-6 text-gray-800 rounded-lg md:max-lg:mx-auto md:max-lg:mt-10 md:max-lg:w-full">
      
      <div className="flex justify-end">
            <img src={acc} alt="a placeholder for account" className='w-5 h-5'/>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-sm bg-white shadow rounded-lg p-3">
        <div>
          <p className="font-bold text-lg">75<small className="text-xs">kg</small></p>
          <p className="text-gray-500">Weight</p>
        </div>
        <div>
          <p className="font-bold text-lg">6.5</p>
          <p className="text-gray-500">Height</p>
        </div>
        <div>
          <p className="font-bold text-lg">25<small className="text-xs">yrs</small></p>
          <p className="text-gray-500">Age</p>
        </div>
      </div>

      <section>
        <h3 className="font-semibold text-sm mb-3">Your Goals</h3>

        <div className="bg-white shadow rounded-lg p-3 space-y-4 text-sm">
          <GoalCard title="Running" value="70km/80km" progress={79} icon="🏃" />
          <GoalCard title="Sleeping" value="50hrs/60hrs" progress={60} icon="😴" />
          <GoalCard title="Weight Loss" value="70kg/100kg" progress={60} icon="🔥" />
        </div>
      </section>

      <section>
        <h3 className="font-semibold text-sm mb-3">Monthly Progress</h3>
        <div className="bg-white shadow rounded-lg p-5 text-center">
          <div className="w-20 h-20 mx-auto rounded-full border-4 border-orange-400 flex items-center justify-center font-bold text-lg">
            70%
          </div>
          <p className="mt-2 text-xs text-gray-600">
            You have achieved <span className="text-orange-500 font-semibold">70%</span> of your goal this month
          </p>
        </div>
      </section>

      <section>
        <h3 className="font-semibold text-sm mb-2">Schedules</h3>
        <div className="bg-white shadow rounded-lg p-4 text-xs text-gray-400">
          No schedules added.
        </div>
      </section>
    </aside>
  );
};

const GoalCard = ({ title, value, progress, icon }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="text-lg">{icon}</div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-xs text-gray-500">{value}</p>
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-600">{progress}%</div>
    </div>
  );
};

export default Sidebar;
