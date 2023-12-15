import { IProject } from "../lib/constants";
import { motion } from "framer-motion";
import * as anim from "../lib/animations";
import { useNavigate } from "react-router-dom";

type Props = {
  projectInfo: IProject;
};

export function ProjectCard({ projectInfo }: Props) {
  const { title, alt, imgSrc, desc } = projectInfo;
  const navigate = useNavigate();

  return (
    <motion.div
      className="h-48 w-72 scale-100 rounded-lg bg-light-3 p-4 shadow-md transition-transform hover:scale-105 hover:cursor-pointer dark:bg-dark-2 md:h-64 md:w-96"
      initial="disappear"
      animate="appear"
      variants={anim.showAndHide}
      onClick={() => navigate(`/projects/${title}`)}
    >
      <img
        className="rounded-md object-cover shadow-md"
        src={imgSrc}
        alt={alt}
      />
      <h3 className="mt-3 truncate text-xs font-light md:text-sm">{desc}</h3>
      <h2 className="text-sm font-light italic text-gray md:text-base">
        {title}
      </h2>
    </motion.div>
  );
}
