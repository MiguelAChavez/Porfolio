import { useState } from "react";

function ButtonNav({ onAction, text }) {
  return (
    <li>
      <a href="/" onClick={onAction}>
        <span>{text} </span>
      </a>
    </li>
  );
}

export default ButtonNav;
