import React from "react";

const Skill = ({ name, icon }) => {
  return (
    <li className="inline-block mx-1 my-1">
      {icon}
      <span className="flex items-center px-4 py-1 rounded-full  text-xs font-medium bg-blue-600/20">
        {name}
      </span>
    </li>
  );
};

export default Skill;
