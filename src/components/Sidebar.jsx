import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#3b75ef] text-white flex flex-col">
      <div className="flex items-center px-4 py-4 border-b border-blue-500">
        <img src={logo} alt="App Logo" className="h-8 w-8 mr-4" />
        <h1 className="text-xl font-bold">My App</h1>
      </div>
      <nav className="mt-4 flex flex-col space-y-2">
        <Link
          to="/"
          className="flex items-center space-x-4 px-4 py-2 hover:bg-blue-700 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
          <span>Calendar</span>
        </Link>
        <Link
          to="/summary"
          className="flex items-center space-x-4 px-4 py-2 hover:bg-blue-700 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
          <span>Summary</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;