import React from "react";
import JobCard from "./JobCard";
import SignUpForm from "./SignUpForm";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            If AI can search your job, then{" "}
            <div className="mt-4">
              <span className="text-black bg-red-400 px-2 py-1 rounded-md">
                hireHQ
              </span>{" "}
              is your tool
            </div>
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Super awesome job searching experience is awaiting you. Once upon a
            time there were many such platforms all which are awaited for you.
            You can feel free to come and sign up.
          </p>

          {/* Job Cards Section */}
          <div className="mt-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <JobCard
                logo="/google.png"
                title="Front End Developer"
                company="Google Inc, California"
                salary="$100/hour"
                color="pink-100"
                rotation="-rotate-6"
                customStyle="bg-[#FDEDED]"
              />
              <JobCard
                logo="/john-deere.png"
                title="Sales Office Executive"
                company="John Deere, Los Angeles"
                salary="$80/hour"
                color="yellow-100"
                rotation="rotate-6"
                customStyle="bg-[#FDF9DD]"
              />
            </div>
            <div className="flex justify-center sm:justify-start mt-4">
              <JobCard
                logo="/john-deere.png"
                title="UI/UX Designer"
                company="Apple Inc, San Francisco"
                salary="$120/hour"
                color="green-100"
                rotation="rotate-0"
                customStyle="w-64 bg-[#EFFDDD]"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Signup Form */}
        <SignUpForm />
      </div>
    </div>
  );
};

export default HeroSection;
