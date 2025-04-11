import React from 'react';
import LeftSidebar from '../layout/LeftSidebar';
import Workout from '../layout/Workout';
import CalorieChart from './CalorieChart';
import Trainer from './TrainerProfile';
import DietMenu from './DietMenu';
import Footer from './Footer';
import Sidebar from '../layout/Sidebar';


const Dashboard = () => {
  return (
    <>
      <div className='lg:flex lg:flex-row'>
        <div className='lg:w-[2%]'>
            <LeftSidebar />
        </div>
        <div className='lg:w-[85%] lg:flex lg:flex-col lg:justify-end lg:gap-2' >
         <div className=''> <Workout /></div>
          <div className='mt-4 md:flex md:flex-row md:ml-1 md:mt-5 lg:flex lg:flex-row lg:gap-4 lg:ml-20'>
            <CalorieChart />
          </div>
            <div> <Trainer /></div>
            <div><DietMenu /></div>
        </div>
  
          <div className='lg:w-[20%] mt-5 ml-4.5'>
            <Sidebar />
          </div>
    </div>
          <Footer />
    </>
  );
}
  
export default Dashboard
