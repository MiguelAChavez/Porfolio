import React from "react";
import style from "../../css/header.module.css";
import ButtonNav from "./ButtonNav";
import { v4 as uuidv4 } from "uuid";

const buttons = [
  { text: "Inicio", idComp: "#Home" },
  { text: "Sobre mí", idComp: "#My" },
  { text: "Proyectos", idComp: "#Projects" },
  { text: "Contacto", idComp: "#Contact" },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center py-3">
      <nav
        className="fixed top-0 left-0 flex justify-center flex-row gap-x-10 py-3 bg-indigo-950/35
      [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,#000_60%,transparent_100%)]"
      >
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
