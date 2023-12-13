import { PROJECTS } from "../lib/constants";

export function ProjectPage() {
  return (
    <div className="mx-auto mt-40 flex max-w-7xl flex-col items-center gap-y-6 px-8">
      {PROJECTS.map((n, i) => (
        <div className="mb-40 flex w-full items-center justify-center" key={i}>
          <div className="w-[40%] pl-12">
            <h1>{n.title}</h1>
          </div>
          <div className="w-[60%]">
            <img src={n.imgSrc} alt={n.alt} />
          </div>
        </div>
      ))}
    </div>
  );
}
