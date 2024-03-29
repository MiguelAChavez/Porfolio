import React from "react";
import style from "../../css/header.module.css";
import ButtonNav from "./ButtonNav";
import { v4 as uuidv4 } from "uuid";
import ToggleTheme from "../ToggleTheme";

const buttons = [
  { text: "Sobre mí", idComp: "#My" },
  { text: "Proyectos", idComp: "#Projects" },
  { text: "Educación", idComp: "#Education" },
  { text: "Habilidades", idComp: "#Skills" },
];

const Header = () => {
  return (
    <header className="relative flex justify-center items-center py-3">
      <nav className="fixed top-0 flex justify-center flex-row gap-x-10 py-5 px-5 mt-2 dark:bg-indigo-950/35">
        <ul>
          {buttons.map((element) => (
            <ButtonNav key={uuidv4()} text={element.text} idComp={element.idComp}></ButtonNav>
          ))}
        </ul>
      </nav>
      <ToggleTheme className={"fixed top-2  right-1"}></ToggleTheme>
    </header>
  );
};

export default Header;
