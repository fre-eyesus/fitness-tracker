// import React, { useState } from "react";

// const CalorieInput = () => {
//   const [calories, setCalories] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`You consumed ${calories} calories`);
//     setCalories("");
//   };

//   return (
//     <div className="w-[300px] md:w-[60%] mx-auto mt-10 p-6 bg-[#EEEEEE] rounded-lg shadow-md border border-gray-300">
//       <h2 className="text-xl font-bold mb-4 text-[#983535]">Calorie Tracker</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <label className="text-sm font-medium text-gray-700">
//           Enter Calories Consumed:
//         </label>
//         <input
//           type="number"
//           value={calories}
//           onChange={(e) => setCalories(e.target.value)}
//           className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8676FE]"
//           placeholder="e.g. 500"
//         />
//         <button
//           type="submit"
//           className="bg-[#8676FE] text-white py-2 rounded-md hover:bg-[#6c60e6] transition"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CalorieInput;

// import React, { useState } from 'react';

// const CalorieInput = () => {
//   const [calories, setCalories] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`You consumed ${calories} calories`);
//     setCalories("");
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4 text-[#983535]">Calorie Tracker</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <label className="text-sm font-medium text-gray-700">
//           Enter Calories Consumed:
//         </label>
//         <input
//           type="number"
//           value={calories}
//           onChange={(e) => setCalories(e.target.value)}
//           className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8676FE]"
//           placeholder="e.g. 500"
//         />
//         <button
//           type="submit"
//           className="bg-[#8676FE] text-white py-2 rounded-md hover:bg-[#6c60e6] transition"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CalorieInput;

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const CalorieInput = () => {
  const [activity, setActivity] = useState('');
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCalories = async () => {
    try {
      setLoading(true);
    
      const response = await fetch(`https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}&weight=${weight}&duration=${duration}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': import.meta.env.VITE_API_KEY
        }
      });

      const data = await response.json();
      setResult(data);

      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.trim()) {
      fetchCalories();
    }
  };

  return (
    
    <div className="w-[300px] md:w-[60%] mx-auto mt-10 p-6 bg-[#EEEEEE] rounded-lg shadow-md border border-gray-300">
      <h2 className="text-base font-bold mb-4 text-gray-900">Calculate your calories burned</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="text-sm font-medium text-gray-700">
          Enter an Activity (e.g., running, cycling, walking):
        </label>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8676FE]"
          placeholder="e.g. swimming"
          required
        />
        <label className='text-sm font-medium text-gray-700'>Enter your weight</label>
        <input type="numbers"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
         className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8676FE]"
        placeholder='eg. 170(lbs)'
        required
         />
        <label className='text-sm font-medium text-gray-700'>Activitiy duration</label>
        <input type="numbers"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
         className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8676FE]"
        placeholder='eg. 30(in minute)'
        required
        />
        <button
          type="submit"
          className="bg-[#8676FE] text-white py-2 rounded-md hover:bg-[#6c60e6] transition cursor-pointer"
        >
          Calculate 
        </button>
      </form>

      {loading && <p className="mt-4 text-sm text-gray-600">Fetching data...</p>}


    </div>
  );
};

export default CalorieInput;
