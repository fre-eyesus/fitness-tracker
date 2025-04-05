import React from 'react'
import acc from '../assets/acc.svg'
function Menu() {
  return (
  <div className='flex flex-row justify-between '>
      <div className='flex flex-col mx-4 mt-4'>
        <button  className="p-2 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer">
          <div className='w-10 h-1 rounded-lg bg-gray-200 mt-1'></div>
          <div className='w-10 h-1 rounded-lg bg-gray-200 mt-1'></div>
          <div className='w-10 h-1 rounded-lg bg-gray-200 mt-1'></div>
          <div className='w-10 h-1 rounded-lg bg-gray-200 mt-1'></div>
        </button> 
      </div>
      <a href="#"><img src={acc} className='w-8 h-8 mr-4 mt-7.5' alt="a placeholder for account" /></a>
  </div>
  )
}

export default Menu