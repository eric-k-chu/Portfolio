import { IProject } from "../lib/constants";
import { useNavigate } from "react-router-dom";

type Props = {
  projectInfo: IProject;
};

export function ProjectCard({ projectInfo }: Props) {
  const { key, title, alt, imgSrc, desc } = projectInfo;
  const navigate = useNavigate();

  return (
    <div className="group flex h-52 w-72 translate-y-0 items-center justify-center rounded-lg bg-transparent p-[2px] transition-all hover:-translate-y-0.5 hover:cursor-pointer hover:bg-gradient-to-r hover:from-orange hover:to-blue md:h-[17rem] md:w-96">
      <div
        className="h-full w-full rounded-lg bg-light-1 dark:bg-dark-2"
        onClick={() => navigate(`/projects/${key}`)}
      >
        <div className="flex h-3/4 w-full items-center justify-center">
          <img
            className="h-full w-full rounded-t-md object-cover"
            src={imgSrc}
            alt={alt}
          />
        </div>

        <div className="space-y-2 rounded-b-md px-4 py-2 shadow-md group-hover:shadow-lg">
          <h2 className="text-sm font-semibold md:text-base">{title}</h2>
          <h3 className="flex items-center truncate text-xs font-light italic text-gray md:text-sm">
            {desc}
          </h3>
        </div>
      </div>
    </div>
  );
}
