import React,{useState, useEffect} from 'react';
import LeftSidebar from '../layout/LeftSidebar';
import Workout from '../layout/Workout';
import CalorieChart from './CalorieChart';
import Trainer from './TrainerProfile';
import DietMenu from './DietMenu';
import Footer from '../layout/Footer';
import Sidebar from '../layout/Sidebar';
import CalorieInput from './CalorieInput';
import Modal from './Modal';

const Dashboard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem('calorieChartData');
    if (stored) {
      setChartData(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calorieChartData', JSON.stringify(chartData));
  }, [chartData]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <>
      <div className='lg:flex lg:flex-row overflow-x-hidden'>
        <div className='lg:w-[2%]'>
            <LeftSidebar openModal={openModal} />
        </div>
        <div className='lg:w-[85%] lg:flex lg:flex-col lg:justify-end lg:gap-2' >
         <div className=''> <Workout data={chartData} /></div>
          <div className='mt-4 md:flex md:flex-row md:ml-1 md:mt-5 lg:flex lg:flex-row lg:gap-4 lg:ml-20'>
            <CalorieChart chartData={chartData} />
          </div>
            <div> <Trainer /></div>
            <div><DietMenu /></div>
        </div>
  
          <div className='lg:w-[30%] mt-15 ml-4.5 mr-3'>
            <Sidebar />
          </div>
    </div>
    <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <CalorieInput setChartData={setChartData} closeModal={closeModal} />
      </Modal>
          <Footer />
    </>
  );
}
  
export default Dashboard
