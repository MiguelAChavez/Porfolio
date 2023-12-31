import React from "react";
import style from "../../css/header.module.css";

const ButtonNav = ({ text, idComp }) => {
  return (
    <li className={`${style.item} px-3 py-1 `}>
      <a href={idComp} className="text-sm">
        {text}
      </a>
    </li>
  );
};

export default ButtonNav;
