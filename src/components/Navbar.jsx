import React from "react";
import { BiSearch } from "react-icons/bi"; // Importing the search icon

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-xl font-bold">
            <span className="text-gray-700">hire</span>
          </span>
          <span className="text-2xl font-bold leading-tight text-black">H</span>
          <span className="text-2xl font-bold leading-tight text-[#635BFF]">
            Q
          </span>
        </div>

        {/* Search bar with search icon */}
        <div className="relative w-full max-w-xs mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Search Job in Los Angeles"
            className="w-full px-3 py-2 pl-10 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[12px]"
          />
          {/* Search Icon */}
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <BiSearch size={16} />
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4 mt-2 md:mt-0 text-gray-700">
          <a href="#all-jobs" className="hover:text-black text-[12px]">
            All Jobs
          </a>
          <a href="#for-employers" className="hover:text-black text-[12px]">
            For Employers
          </a>
          <a href="#help" className="hover:text-black text-[12px]">
            Help?
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
