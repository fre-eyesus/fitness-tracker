import React from 'react'
import { useState,useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';


const CalorieChart = ({ chartData = [] }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);


  

  useEffect(() => {

     const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
        chartInstance.current.destroy(); 
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartData.map(item => `${item.activity} - ${item.duration} min`),
        datasets: [
          { 
            label: 'Calories Burned',
            data: chartData.map(item => item.calories),
            backgroundColor: [
                '#8676FE',
                '#FF638433',
                '#FF9F4033',
                '#FFCD5633',
                '#4BC0C033',
                '#36A2EB33',
                '#9966FF33',
                '#C9CBCF33'],
            barThickness: window.innerWidth < 640 ? 20 : 30,
            categoryPercentage: 0.8,
            barPercentage: 0.6,


          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Activity - Duration (min)'
            },
            barPercentage: 0.7,
            categoryPercentage: 0.6
          },
          y: {
              title: {
                  display: true,
                  text: 'Calories Burned'
                },
                beginAtZero: false,
                min:0,
                max:400,
                ticks: {
                    callback: (value) => Math.round(value),
                  }
            }
        }
      }
    });

    return () => {
      chartInstance.current.destroy();
    };
  }, [chartData]);

  return (
    <div className="w-[300px] lg:w-full md:max-lg:ml-28 md:w-[66%] min-h-[250px] mx-14 md:mx-16 p-6 bg-[#EEEEEE] border border-gray-200 rounded-lg shadow-sm sm:h-[250px] md:h-[300px]">
    
        <canvas ref={chartRef} className='w-full h-[250px]' ></canvas>

    </div>  
  );
};

export default CalorieChart
