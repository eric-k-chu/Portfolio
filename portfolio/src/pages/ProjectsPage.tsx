import { PROJECTS } from "../lib/constants";
import { ProjectCard } from "../components";

export function ProjectsPage() {
  return (
    <div className="mx-auto mt-20 flex max-w-7xl flex-wrap items-center justify-center gap-8 px-8">
      {PROJECTS.map((n, i) => (
        <ProjectCard projectInfo={n} key={i} />
      ))}
    </div>
  );
}
