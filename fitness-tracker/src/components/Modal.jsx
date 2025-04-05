import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] sm:w-[400px]">
        <button onClick={closeModal} className="absolute top-4 right-4 text-xl cursor-pointer bg-white hover:bg-gray-200 rounded-full p-1 transition duration-200 ease-in-out">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
