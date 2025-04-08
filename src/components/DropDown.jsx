import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-20 px-1 py-1 text-sm font-normal text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none"
      >
        Options
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 w-40 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Monday</li>
            <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Tuesday</li>
            <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Wednesday</li>
            <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Thursday</li>
            <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Friday</li>
            <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Saturday</li>
            <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Sunday</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
