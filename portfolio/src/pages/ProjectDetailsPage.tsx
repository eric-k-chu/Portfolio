import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doesProjectExist } from "../lib/api";
import { IProject, PROJECTS } from "../lib/constants";
import { motion } from "framer-motion";
import { showAndHide } from "../lib/animations";
import { ProjectFeatureCard } from "../components";

export function ProjectDetailsPage() {
  const [project, setProject] = useState<IProject>();
  const [error, setError] = useState<Error>();
  const { projectName } = useParams();

  useEffect(() => {
    if (!doesProjectExist(projectName) || projectName === undefined) {
      setError(new Error("This project does not exist."));
    } else {
      setProject(PROJECTS[projectName]);
    }
  }, [projectName]);

  if (error) {
    return (
      <div className="mx-auto mt-20 flex max-w-7xl items-center justify-center px-8">
        <div>{error.message}</div>
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
      <div className="relative w-full rounded-lg">
        <img
          src={project?.imgSrc}
          className="mx-auto h-auto w-full rounded-lg"
        />
        <div className="absolute inset-0 rounded-lg bg-black opacity-50" />
        <section className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center space-y-2 text-center text-light-1">
          <h1 className="text-lg font-semibold md:text-2xl lg:text-4xl">
            {project?.title}
          </h1>
          <h3 className="text-xs font-medium md:text-sm lg:text-lg">
            {project?.desc}
          </h3>
        </section>
      </div>
      <div className="mt-8 w-full">
        {project?.features.map((n) => (
          <ProjectFeatureCard feature={n} key={n.feat} />
        ))}
      </div>
    </motion.div>
  );
}
