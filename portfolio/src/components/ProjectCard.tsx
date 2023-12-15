import { IProject } from "../lib/constants";
import { motion } from "framer-motion";
import * as anim from "../lib/animations";
import { useNavigate } from "react-router-dom";
import { ExitIcon, GitHubIcon } from ".";

type Props = {
  projectInfo: IProject;
};

export function ProjectCard({ projectInfo }: Props) {
  const { title, alt, imgSrc, desc } = projectInfo;
  const navigate = useNavigate();

  return (
    <motion.div
      className="group relative h-48 w-72 rounded-lg bg-light-3 p-4 shadow-md dark:bg-dark-2 md:h-64 md:w-96"
      initial="disappear"
      animate="appear"
      variants={anim.showAndHide}
    >
      <img
        className="rounded-md object-cover shadow-md hover:cursor-pointer"
        src={imgSrc}
        alt={alt}
      />
      <div className="absolute inset-0 z-10 w-full rounded-md bg-black opacity-0 transition-opacity duration-[400ms] group-hover:opacity-50" />
      <div className="absolute inset-0 z-20 flex items-center justify-between text-light-1">
        <h3 className="flex h-full w-1/2 items-center justify-center gap-x-2 opacity-0 transition-opacity duration-[400ms] hover:cursor-pointer hover:opacity-100">
          <span className="select-none">GitHub</span>
          <span>
            <GitHubIcon className="h-4 w-4 fill-light-1" />
          </span>
        </h3>
        <h3
          className="flex h-full w-1/2 items-center justify-center gap-x-2 opacity-0 transition-opacity duration-[400ms] hover:cursor-pointer hover:opacity-100"
          onClick={() => navigate(`/projects/${title}`)}
        >
          <span className="select-none">Read More</span>
          <span>
            <ExitIcon className="h-4 w-4 fill-light-1" />
          </span>
        </h3>
      </div>
      <h2 className="mt-2 text-sm font-light italic text-gray md:text-base">
        {title}
      </h2>
      <h3 className="mt-1 truncate text-xs font-light md:text-sm">{desc}</h3>
    </motion.div>
  );
}
