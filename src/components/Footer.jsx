import React from 'react'

function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left text-sm lg:ml-15 lg:max-xl:ml-15">
            &copy; {new Date().getFullYear()} FitTrack. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-center">
            <a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
  
