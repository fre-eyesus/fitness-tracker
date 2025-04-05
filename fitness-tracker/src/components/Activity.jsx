import React from "react";
import Dropdown from "./DropDown";

const Activity = () => {
  return (
    <div class="flex justify-center mt-4 mb-4 w-[300px] h-[191px] mx-6 md:w-[29.66%] md:h-[30%] md:ml-[6.4%] ">
      <div className="w-[300px] h-[191px] pt-3 px-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold tracking-tight text-gray-900">Activity</p>
            <Dropdown />
          </div>

      </div>
    </div>
  );
};

export default Activity;
