import React from "react";

const JobCard = ({
  logo,
  title,
  company,
  salary,
  color,
  rotation,
  customStyle,
}) => {
  return (
    <div
      className={`flex items-center space-x-4 p-4 bg-${color} rounded-lg shadow-md transform ${rotation} ${customStyle}`}
    >
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img
          src={logo}
          alt={`${title} logo`}
          className="h-12 w-12 rounded-full"
        />
      </div>

      {/* Job Details */}
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{company}</p>
        <p className="text-sm font-semibold text-blue-500">{salary}</p>
      </div>
    </div>
  );
};

export default JobCard;
