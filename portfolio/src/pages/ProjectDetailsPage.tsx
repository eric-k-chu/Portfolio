import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doesProjectExist } from "../lib/api";
import { IProject, PROJECTS } from "../lib/constants";
import { motion } from "framer-motion";
import { showAndHide } from "../lib/animations";
import {
  GitHubIcon,
  LinkIcon,
  NotFound404Icon,
  ProjectFeatureCard,
  UpIcon,
} from "../components";

export function ProjectDetailsPage() {
  const [project, setProject] = useState<IProject>();
  const [error, setError] = useState<Error>();
  const { projectName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!doesProjectExist(projectName) || projectName === undefined) {
      setError(new Error("This project does not exist."));
    } else {
      setProject(PROJECTS[projectName]);
    }
  }, [projectName]);

  if (error) {
    return (
      <div className="mx-auto mb-96 mt-40 flex max-w-7xl flex-col items-center justify-center px-8">
        <NotFound404Icon className="h-40 w-40 fill-dark-1 dark:fill-light-1" />
        <div className="mt-10">{error.message}</div>
        <button
          className="mt-8 scale-100 rounded-lg bg-gradient-to-r from-cm-orange to-cm-blue p-2 px-6 text-sm font-semibold text-dark-1 shadow-md transition-transform hover:scale-[1.05] md:text-base lg:text-lg"
          onClick={() => navigate("/projects")}
        >
          BACK TO PROJECTS
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="mx-auto mt-12 flex max-w-7xl flex-col items-center px-6"
      initial="disappear"
      animate="appear"
      variants={showAndHide}
    >
      <div className="mb-4 flex w-full items-center gap-x-2 font-semibold">
        <h3
          className="inline-block select-none hover:cursor-pointer hover:bg-gradient-to-r hover:from-cm-orange hover:to-cm-blue hover:bg-clip-text hover:text-transparent"
          onClick={() => navigate("/projects")}
        >
          PROJECTS
        </h3>
        <span>/</span>
        <span>{project?.title}</span>
      </div>
      <div className="relative w-full rounded-lg">
        <img
          src={project?.imgSrc}
          className="mx-auto h-full w-full rounded-lg"
        />
        <div className="absolute inset-0 rounded-lg bg-black opacity-50" />
        <section className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-y-2 text-light-1">
          <h1 className="text-lg font-semibold md:text-2xl lg:text-4xl">
            {project?.title}
          </h1>
          <h3 className="text-xs font-medium drop-shadow-md md:text-sm lg:text-lg">
            {project?.desc}
          </h3>
          <div className="flex items-center justify-center gap-x-4 pt-4">
            <a target="_blank" href={project?.github}>
              <GitHubIcon className="h-5 w-5 fill-light-1 md:h-8 md:w-8" />
            </a>
            {project?.live && (
              <a target="_blank" href={project?.live}>
                <LinkIcon className="h-5 w-5 fill-light-1 md:h-8 md:w-8" />
              </a>
            )}
          </div>
        </section>
      </div>
      <div className="mt-8 w-full">
        {project?.features.map((n) => (
          <ProjectFeatureCard feature={n} key={n.feat} />
        ))}
      </div>
      <div className="flex h-96 w-full flex-col items-center justify-center gap-y-4">
        <button onClick={() => (document.documentElement.scrollTop = 0)}>
          <UpIcon className="h-8 w-8 fill-dark-1 dark:fill-light-1" />
        </button>
        <h4>BACK TO TOP</h4>
      </div>
    </motion.div>
  );
}
