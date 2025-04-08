import React from 'react'
import fitness from '../assets/fitness.svg'
import trainer from '../assets/trainer.jpg'
import trainer2 from '../assets/trainer2.jpg'
import cardio from '../assets/cardio.jpg'
function Trainer() {
  return (
    <>

    <p className='text-sm my-6 mx-9 font-medium md:m-4 md:text-center'>Recomended Trainer for you</p> 
   <div className='flex flex-row justify-center items-center mx-9'>
      <div className="max-w-xs mx-4 bg-[#EEEE] w-[150px] h-[180x] rounded-2xl shadow-lg overflow-hidden md:w-[46%] md:h-[18%]">
          <img 
            src={fitness} 
            alt="Header" 
            className="w-full h-32 object-cover"
          />
        <div className="p-4 text-center">
          <div className="w-16 h-16 mx-auto -mt-10 border-4 border-white rounded-full overflow-hidden">
            <img
              src={trainer}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-2 text-lg font-semibold">Besu Tesfaye</h3>
          <p className="text-sm text-gray-500">Fitness Specialist</p>
          <div className="flex justify-center items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <span>🏅</span>
              <span className="font-medium">25</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span className="font-medium">104</span>
            </div>
          </div>
          <a href="#" className="block mt-3 text-purple-600 font-medium hover:underline">
            View Profile
          </a>
        </div>
      </div>
  
      <div className="max-w-xs mx-4 bg-[#EEEE] w-[150px] h-[180x] rounded-2xl shadow-lg overflow-hidden md:w-[36%] md:h-[18%] md:mt-0 ">
          <img 
            src={cardio}
            alt="Header" 
            className="w-full h-32 object-cover"
          />
        <div className="p-4 text-center">
          <div className="w-16 h-16 mx-auto -mt-10 border-4 border-white rounded-full overflow-hidden">
            <img
              src={trainer2} 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-2 text-lg font-semibold">Girum Ermias</h3>
          <p className="text-sm text-gray-500">Cardio Specialist</p>
          <div className="flex justify-center items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <span>🏅</span>
              <span className="font-medium">20</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span className="font-medium">90</span>
            </div>
          </div>
          <a href="#" className="block mt-3 text-purple-600 font-medium hover:underline">
            View Profile
          </a>
        </div>
      </div>
   </div>
   </>    
     


  );
}

export default Trainer
