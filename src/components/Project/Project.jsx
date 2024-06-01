import { ExternalLink, ExternalLinkOff } from "../../assets/Icon/LinkIcon";
import Skill from "./Skill";

const Project = ({ img, url, title, description, skills }) => {
  const typeSite = String(url).includes("github.com") ? "GitHub" : "Web Site";

  return (
    <li className="transition-all   hover:scale-[1.01]  my-10 px-3">
      <div className="rounded-xl border-[1px] border-gray-500/45  hover:outline outline-1 outline-sky-500 bg-slate-800/30  px-5 py-4">
        <article className="mb-4 grid place-items-center">
          <img className="rounded-xl " loading="lazy" src={img} alt={title} />
        </article>
        <article className="flex flex-col gap-3">
          <h3 className="text-lg flex justify-between">
            {title}
            <span>
              {url ? (
                <a
                  href={url}
                  className="hover:text-emerald-300  hover:underline cursor-pointer "
                  target="_blank"
                >
                  <span className="px-2">{typeSite}</span>
                  <ExternalLink />
                </a>
              ) : (
                <ExternalLinkOff />
              )}
            </span>
          </h3>
          <p className="text-pretty">{description}</p>

          {skills && (
            <ul className="my-2">
              {skills.map((e) => (
                <Skill key={crypto.randomUUID()} icon={e.icon} name={e.name}></Skill>
              ))}
            </ul>
          )}
        </article>
      </div>
    </li>
  );
};

export default Project;
