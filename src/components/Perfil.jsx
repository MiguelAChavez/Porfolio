import React from "react";
import style from "../css/perfil.module.css";
import Miguel from "../assets/perfilMiguel.png";

const image = {
  url: Miguel,
  name: "Miguel Angel",
};

const Perfil = () => {
  return (
    <figure className={`${style.img} `}>
      <img src={image.url} alt={image.name} title={`Perfil de ${image.name}`} />
    </figure>
  );
};

export default Perfil;
