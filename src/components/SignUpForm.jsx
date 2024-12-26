import React from "react";

const SignUpForm = () => {
  return (
    <div className="relative flex flex-col justify-end [height:500px] ">
      <div className="absolute top-1 right-1 bg-purple-500 text-white p-2 rounded-lg shadow-md w-56 transform rotate-[-20deg]">
        <h2 className="text-[12px] font-semibold text-center">
          Get in touch with us to implement your next idea. Or change your
          business with AI.
        </h2>
      </div>
      <div className=" absolute top-10 right-56 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="123.77"
          height="140.918"
          viewBox="0 0 123.77 140.918"
        >
          <g
            id="Icon_akar-arrow-counter-clockwise"
            data-name="Icon akar-arrow-counter-clockwise"
            transform="translate(78.686 137.304) rotate(-160)"
          >
            <path
              id="Path_107"
              data-name="Path 107"
              d="M-6.833,117.434c3.8,8.007,24.7-30.153,32.31-26.066,10.748-11.117,12.9-3.2,21.269-4.724A39.023,39.023,0,0,0,68.679,74.287,43.241,43.241,0,0,0,79.4,50.513,44.34,44.34,0,0,0,74.71,24.628,40.7,40.7,0,0,0,56.454,6.771,37.576,37.576,0,0,0,31.772,3.925a36.827,36.827,0,0,0-20.733,12.9,35.766,35.766,0,0,0-5.475,8.336"
              transform="translate(2.36 -3.687)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Path_108"
              data-name="Path 108"
              d="M19.514,17.755,5.481,20.8,3,3.59"
              transform="translate(0 1.388)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>

      {/* Sign Up Form */}
      <div className="bg-white p-4 rounded-lg shadow-md w-64 relative z-10 mb-6 ml-auto ">
        {/* Aligned to the right */}
        <h2 className="text-lg font-semibold mb-2">Get Started</h2>
        <p className="text-gray-600 mb-2 text-sm">
          Please create your account to setup with hireHQ.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Email or Username"
            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <div className="flex items-center space-x-1">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-gray-600 text-sm">
              Remember me
            </label>
          </div>
          <button className="bg-blue-500 text-white py-1 pr-2 pl-1 rounded-lg hover:bg-blue-600 text-sm">
            <i className="fa-regular fa-circle-check p-1"></i> Sign Up
          </button>
          <p className="text-center text-gray-600 mt-2 text-[12px]">
            hireHQ is a platform for all types of job search across United
            States and Europe
          </p>

          <button className="flex items-center">
            <img src="/google.png" alt="Google Logo" className="h-5 w-auto" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
