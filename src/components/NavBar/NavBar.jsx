import { useState } from "react";
import "./navStyle.css";
import ButtonNav from "./ButtonNav.jsx";

function NavBar() {
  const handleClick = () => {
    alert("asd");
  };
  const itemText = ["Inicio", "Contacto", "Proyectos"];
  return (
    <header>
      <nav>
        <ul>
          {itemText.map((text, index) => (
            <ButtonNav
              key={index}
              onAction={handleClick}
              text={text}
            ></ButtonNav>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
