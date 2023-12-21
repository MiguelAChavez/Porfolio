import React from "react";

export const Skill = ({ name, description, image }) => {
  return (
    <article className="skill">
      <span>Fle</span>
      <div className="box">
        <img src={image.url} alt={image.title} title={image.title} />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};
