import { IProject } from "../lib/constants";
import { motion } from "framer-motion";
import * as anim from "../lib/animations";
import { useNavigate } from "react-router-dom";
import { ExitIcon, GitHubIcon } from ".";

type Props = {
  projectInfo: IProject;
};

export function ProjectCard({ projectInfo }: Props) {
  const { title, alt, imgSrc, desc, github } = projectInfo;
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative h-48 w-72 rounded-lg bg-light-3 p-4 shadow-md dark:bg-dark-2 md:h-64 md:w-96"
      initial="disappear"
      animate="appear"
      variants={anim.showAndHide}
    >
      <img
        className="rounded-md object-cover shadow-md hover:cursor-pointer"
        src={imgSrc}
        alt={alt}
      />
      <div className="absolute inset-0 z-10 w-full rounded-md" />
      <div className="absolute inset-0 z-20 flex items-center justify-between">
        <a
          className="group flex h-full w-1/2 items-center justify-center gap-x-2 rounded-l-md bg-gradient-to-l from-black/0 to-black/0 to-70% hover:cursor-pointer hover:to-black/70"
          target="_blank"
          href={github}
        >
          <span className="select-none text-light-1/0 transition-colors group-hover:text-light-1">
            GitHub
          </span>
          <span>
            <GitHubIcon className="h-4 w-4 fill-light-1/0 transition-colors group-hover:fill-light-1" />
          </span>
        </a>
        <div
          className="group flex h-full w-1/2 items-center justify-center gap-x-2 rounded-r-md bg-gradient-to-r from-black/0 to-black/0 to-70% hover:cursor-pointer hover:to-black/70"
          onClick={() => navigate(`/projects/${title}`)}
        >
          <span className="select-none text-light-1/0 transition-colors group-hover:text-light-1">
            Read More
          </span>
          <span>
            <ExitIcon className="h-4 w-4 fill-light-1/0 transition-colors group-hover:fill-light-1" />
          </span>
        </div>
      </div>
      <h2 className="mt-2 text-sm font-light italic text-gray md:text-base">
        {title}
      </h2>
      <h3 className="mt-1 truncate text-xs font-light md:text-sm">{desc}</h3>
    </motion.div>
  );
}
