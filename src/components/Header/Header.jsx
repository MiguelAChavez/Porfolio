import React from "react";
import style from "../../css/header.module.css";
import ButtonNav from "./ButtonNav";
import { v4 as uuidv4 } from "uuid";

const buttons = [
  { text: "Sobre mí", idComp: "#My" },
  { text: "Educación", idComp: "#Education" },
  { text: "Proyectos", idComp: "#Projects" },
  { text: "Contacto", idComp: "#Contact" },
];

const Header = () => {
  return (
    <header className="flex justify-center items-center py-3">
      <nav className="fixed top-0 flex justify-center flex-row gap-x-10 py-5 px-5 dark:bg-indigo-950/35">
        <ul>
          {buttons.map((element) => (
            <ButtonNav
              key={uuidv4()}
              text={element.text}
              idComp={element.idComp}
            ></ButtonNav>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
