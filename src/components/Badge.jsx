import React from "react";

const Badge = ({ red, link, shadow, isDownload, children }) => {
  return (
    <li>
      <a
        className={`rounded-full border border-blue-600  dark:border-indigo-400 
        flex justify-center items-center gap-x-3 py-[.3rem] px-3 text-sm font-medium bg-slate-200/45 dark:bg-gray-700 dark:text-gray-300
        hover:scale-105 hover:shadow-lg ${shadow} transition`}
        {...(isDownload
          ? { download: "" }
          : { target: "_blank", rel: "noopener noreferrer" })}
        href={link}
      >
        {children}
        {red}
      </a>
    </li>
  );
};

export default Badge;
