export const SKILLS = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "PostgreSQL",
];

export const GITHUB = "https://github.com/eric-k-chu";

export const LINKEDIN = "https://www.linkedin.com/in/eric-k-chu/";

export interface IProject {
  title: string;
  alt: string;
  imgSrc: string;
  desc: string;
}
export const PROJECTS: IProject[] = [
  {
    title: "Artus",
    alt: "screenshot of Artus homepage",
    imgSrc: "/artus.png",
    desc: "A full-stack video-hosting web application.",
  },
  {
    title: "Castle",
    alt: "screenshot of Castle search results",
    imgSrc: "/castle.png",
    desc: "A player search engine powered by the Chess.com API.",
  },
  {
    title: "Geo Run",
    alt: "screenshot of Geo Run",
    imgSrc: "/geo-run.png",
    desc: "An endless runner created with Unity.",
  },
];
