import Skill from "./Skill";

const Project = ({ img, title, description, skills }) => {
  return (
    <li>
      <div>
        <article>
          <img loading="lazy" src={img} alt={title} />
        </article>
        <article>
          <h3 className="">
            {title}
            <span className="">
              <Arrow></Arrow>
            </span>
          </h3>
          <p className="">{description}</p>

          {skills ?? (
            <ul className="">
              {skills.map(() => (
                <Skill></Skill>
              ))}
            </ul>
          )}
        </article>
      </div>
    </li>
  );
};

export default Project;
