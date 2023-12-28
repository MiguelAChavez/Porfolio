import React from "react";

const Badge = ({ red, link, shadow, children }) => {
  return (
    <li>
      <a
        className={`rounded-full border  border-indigo-400 
        flex justify-center items-center gap-x-3 py-1 px-3 text-sm font-medium  dark:bg-gray-700 dark:text-gray-300
        hover:scale-105 hover:shadow-lg ${shadow} transition`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {red}
      </a>
    </li>
  );
};

export default Badge;
