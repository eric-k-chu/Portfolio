import { PROJECT_LIST } from "../lib/constants";
import { ProjectCard, ProjectIcon } from "../components";

export function ProjectsPage() {
  return (
    <div className="mx-auto mb-96 mt-10 flex max-w-7xl flex-wrap items-center justify-center gap-8 p-8">
      <div className="flex w-full items-center justify-center gap-x-4">
        <ProjectIcon className="h-8 w-8 fill-dark-1 dark:fill-light-1" />
        <h1 className="text-medium font-semibold md:text-lg lg:text-xl">
          PROJECTS
        </h1>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-8">
        {PROJECT_LIST.map((n, i) => (
          <ProjectCard projectInfo={n} key={i} />
        ))}
      </div>
    </div>
  );
}
