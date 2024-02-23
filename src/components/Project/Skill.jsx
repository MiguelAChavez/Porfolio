import React from "react";

const Skill = ({ name, icon }) => {
  return (
    <li>
      {icon}
      <span className="flex items-center px-3 py-1 rounded-full  text-xs font-medium ">{name}</span>
    </li>
  );
};

export default Skill;
