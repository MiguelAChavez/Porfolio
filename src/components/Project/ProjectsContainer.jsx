import { uuid } from "uuidv4";
const Project = [];
const ProjectsContainer = () => {
  return (
    <div>
      <ul>
        {Project.map(() => (
          <Project key={uuid()}></Project>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsContainer;
