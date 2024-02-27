import Data from "../../Projects.json";
import Project from "./Project";

const ProjectsContainer = () => {
  return (
    <div>
      <ul>
        {Data.Projects.map((e) => (
          <Project
            key={crypto.randomUUID()}
            title={e.Project.title}
            description={e.Project.description}
            skills={e.Project.skills}
            url={e.Project.url}
          ></Project>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsContainer;
