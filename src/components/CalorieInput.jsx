import React, { useState, useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import CalorieChart from './CalorieChart';
import Workout from '../layout/Workout';

const CalorieInput = () => {
  const [activity, setActivity] = useState('');
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
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
    
    const clearChart = () => {
      setChartData([]);
      localStorage.removeItem('calorieChartData');
    };
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

          if (Array.isArray(data) && data.length > 0) {


          const max = data.reduce((a, b) =>
                a.total_calories > b.total_calories ? a : b
                            );
                                 
         const processed = {
           activity: max.name,
           duration: max.duration_minutes,
           calories: max.total_calories
         };

            setActivity('');
            setWeight('');
            setDuration('');
            
              
          console.log(' Processed chartData:', processed);
          setChartData(prev => [...prev, processed]);
          } else {
            alert('No data found for this activity. Please try a different activity name.');
            setChartData([]);
          }
      
          console.log('Fetched data:', data);
        } catch (error) {
          console.error('Error fetching data:', error);
          setChartData([]);
        } finally {
          setLoading(false);
        }
  };

        const handleSubmit = (e) => {
          e.preventDefault();

          if (!activity.trim()) {
            alert('Please enter an activity');
            return;
          }
          if (!weight || isNaN(weight) || weight <= 0 || weight > 500 || weight < 50) {
            alert('Please enter a valid weight');
            return;
          }
          if (!duration || isNaN(duration) || duration <= 0 ) {
            alert('Please enter a valid duration');
            return;
          }
        fetchCalories();

        };
       
    return (
       <>
           <div className='flex flex-col'>
                <div className="w-[300px] md:w-[60%] mx-auto mt-10 p-6 bg-[#EEEEEE] rounded-lg shadow-md border border-gray-300">
                  <h2 className="text-base font-bold mb-4 text-gray-900">Calculate your calories burned</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8676FE]"
                      placeholder="e.g. swimming"
                      required
                    />
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8676FE]"
                      placeholder="Weight (lbs)"
                      required
                    />
                    <input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8676FE]"
                      placeholder="Duration (min)"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-[#8676FE] text-white py-2 rounded-md hover:bg-[#6c60e6] cursor-pointer"
                    >
                      Calculate
                    </button>
                    <button
                      type="button"
                      onClick={clearChart}
                      className="bg-red-500 text-white py-2 rounded-md hover:bg-red-400 cursor-pointer"
                    >
                      Clear Data
                    </button>
                  </form>
            
                  {loading && <p className="mt-4 text-sm text-gray-600">Fetching data...</p>}
                </div>
                 <div className='flex flex-col items-center justify-center mt-10'>
                       <div className='mb-5'>  <Workout data={chartData} /></div>
                         <CalorieChart chartData={chartData}/>
                 </div>
           </div>
       </>
  );
};

export default CalorieInput;
