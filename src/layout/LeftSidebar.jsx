import React from 'react';
import { Home, Plus } from 'lucide-react';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import {useState} from 'react';
import CalorieInput from '../components/CalorieInput';
const LeftSidebar = ({ openModal }) => {

  return (
    <div className="fixed top-0 left-0 h-full max-sm:w-[5%] sm:w-[5%] lg:w-[10%] xl:w-[5%] bg-[#EEEEEE] shadow-lg flex flex-col items-center p-4 space-y-10 max-lg:w-20">
      <div className="text-xl font-bold text-indigo-600">
        <a href='#'><img src={logo} alt="a logo for fitness tracking dashbaord"/></a>
      </div>    

      <nav className="flex flex-col items-center space-y-6 text-gray-700 text-xs">
        <a href="#" className="flex flex-col items-center hover:text-indigo-500 transition">
          <Home size={20}/>
          <span className="mt-1 hidden lg:block">Home</span>
        </a>

        <a href="#" className="flex flex-col items-center hover:text-indigo-500 transition" onClick={openModal}>
          <Plus size={20} />
          <span className="mt-1 hidden lg:block text-center">Calorie</span>
        </a>
      </nav>
    </div>
  );
};

export default LeftSidebar;
