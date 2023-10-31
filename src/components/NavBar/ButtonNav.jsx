import { useState } from "react";

function ButtonNav({ key, onAction, text }) {
  return (
    <li>
      <samp>
        <button id={key} onClick={onAction}>
          {text}
        </button>
      </samp>
    </li>
  );
}

export default ButtonNav;
