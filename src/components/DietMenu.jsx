import React from 'react'
import salad from '../assets/salad.png'
import blueberry from '../assets/blueberry.svg'
function DietMenu() {
  return (
    <>
    <p className='text-sm mx-9 my-4 font-medium md:text-center'>Featured Diet Menu</p>
    <div className="mx-9 block w-[300px] h-[225px] p-3 bg-[#EEEEEE] border border-gray-200 rounded-lg shadow-sm md:mx-auto md:w-[50%] md:mb-2 md:p-2 lg:w-[75%]">
        <div className='flex justify-between bg-gray-900 rounded-lg p-3'>
            <p className='text-white font-medium'>Breakfast</p>
            <span className='text-white font-medium'>10:00 am</span>
        </div>

        <div className='md:flex md:flex-row md:gap-4 md:mt-5 md:max-xl:flex-col md:max-xl:mt-1 xl:gap-2 md:max-xl:ml-10 xl:ml-8'>
            <div className='flex row gap-4 mt-3'>
                <div>
                    <img src={salad} alt=" "  className="w-full h-full object-cover max-md:hidden"/>
                </div>
                <div>
                    <h3 className='text-sm font-medium'>Avocado Salad</h3>
                    <div className='flex fle-row gap-2 mt-2'>
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#8676FE]"></div><p className='text-sm font-normal text-[12px] text-gray-500'>9% Carbs</p>
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#FF844B]"></div><p className='text-sm font-normal text-[12px] text-gray-500'>19% Protein</p>
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#F85C7F]"></div><p className='text-sm font-normal text-[12px] text-gray-500'>5% Fat</p>
                    </div>
                    <div className='flex flex-row gap-2 mt-2'>
                        <div className='w-14 h-2 rounded-full bg-[#8676FE]'></div>
                        <div className='w-30 h-2 rounded-full bg-[#FF844B]'></div>
                        <div className='w-13 h-2 rounded-full bg-[#F85C7F]'></div>
                    </div>
                </div>
            </div>
        
            <div className='flex row gap-4 mt-3 md:max-xl:mt-1'>
                <div>
                    <img src={blueberry} alt=" " className='w-full h-full object-cover max-md:hidden'/>
                </div>
                <div>
                    <h3 className='text-sm font-medium'>Blue Berry</h3>
                    <div className='flex fle-row gap-2 mt-2'>
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#8676FE]"></div><p className='text-sm font-normal text-[12px] text-gray-500'>8% Carbs</p>
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#FF844B]"></div><p className='text-sm font-normal text-[12px] text-gray-500'>16% Protein</p>
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#F85C7F]"></div><p className='text-sm font-normal text-[12px] text-gray-500'>6% Fat</p>
                    </div>
                    <div className='flex flex-row gap-2 mt-2'>
                        <div className='w-14 h-2 rounded-full bg-[#8676FE]'></div>
                        <div className='w-30 h-2 rounded-full bg-[#FF844B]'></div>
                        <div className='w-13 h-2 rounded-full bg-[#F85C7F]'></div>
                    </div>
                </div>
            </div>
        </div>
 </div>
    </>
  )
}

export default DietMenu
