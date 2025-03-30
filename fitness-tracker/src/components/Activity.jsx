import React from 'react';

const Activity = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-64 h-40 bg-gray-200 rounded-lg shadow-md p-4">
        <div className="h-full flex flex-col justify-between">
          <div className="text-sm font-medium text-gray-700">
            Activity
          </div>
          <div className="text-xs text-gray-500">
            This is a credit card sized component
          </div>
          <div className="flex justify-end items-center">
            <span className="text-xs bg-gray-300 px-2 py-1 rounded">
              Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;