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
      className="h-52 w-72 translate-y-0 rounded-lg bg-transparent shadow-md transition-all hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-xl md:h-[17rem] md:w-96"
      initial="disappear"
      animate="appear"
      variants={anim.showAndHide}
      onClick={() => navigate(`/projects/${title}`)}
    >
      <div className="flex h-3/4 w-full items-center justify-center">
        <img
          className="h-full w-full rounded-t-md object-cover shadow-md"
          src={imgSrc}
          alt={alt}
        />
      </div>

      <div className="space-y-2 px-4 py-2">
        <h2 className="text-sm font-semibold md:text-base">{title}</h2>
        <h3 className="truncate text-xs font-light italic text-gray md:text-sm">
          {desc}
        </h3>
      </div>
    </motion.div>
  );
}
