import React from "react";
import style from "../css/perfil.module.css";
import Miguel from "../assets/perfilMiguel.png";

const image = {
  url: Miguel,
  name: "Miguel Angel",
};

const Perfil = () => {
  return (
    <figure
      className={`${style.img} shadow-lg shadow-indigo-300 dark:shadow-indigo-950`}
    >
      <img src={image.url} alt={image.name} title={`Perfil de ${image.name}`} />
    </figure>
  );
};

export default Perfil;
