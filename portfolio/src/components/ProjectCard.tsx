import { useRef } from "react";
import { useVisible } from "../hooks";
import { IProject } from "../lib/constants";

type Props = {
  projectInfo: IProject;
};

export function ProjectCard({ projectInfo }: Props) {
  const ref = useRef(null);
  const isVisible = useVisible(ref);
  const { title, alt, imgSrc, desc } = projectInfo;

  return (
    <article
      className={`flex w-full items-center p-6 transition-opacity duration-700 ease-in ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      ref={ref}
    >
      <img
        src={imgSrc}
        alt={alt}
        className="h-80 scale-100 rounded-lg object-cover transition-transform hover:scale-105"
      />
      <div className="ml-10">
        <strong className="font-semibold">{title}</strong>
        <span> - </span>
        <span className="italic">{desc}</span>
      </div>
    </article>
  );
}
