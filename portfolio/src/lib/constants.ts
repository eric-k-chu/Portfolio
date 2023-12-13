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

type Feature = {
  desc: string;
  imgSrc: string;
};

export interface IProject {
  title: string;
  alt: string;
  imgSrc: string;
  desc: string;
  features: Feature[];
}

export const PROJECTS: IProject[] = [
  {
    title: "Artus",
    alt: "screenshot of Artus homepage",
    imgSrc: "/Portfolio/artus.png",
    desc: "A full-stack video-hosting web application",
    features: [
      {
        desc: "fdsa",
        imgSrc: "test",
      },
      {
        desc: "fdsa",
        imgSrc: "test",
      },
      {
        desc: "fdsa",
        imgSrc: "test",
      },
      {
        desc: "fdsa",
        imgSrc: "test",
      },
    ],
  },
  {
    title: "Castle",
    alt: "screenshot of Castle search results",
    imgSrc: "/Portfolio/castle.png",
    desc: "Chess.com API-driven player search engine",
    features: [
      {
        desc: "fdsa",
        imgSrc: "test",
      },
      {
        desc: "fdsa",
        imgSrc: "test",
      },
      {
        desc: "fdsa",
        imgSrc: "test",
      },
      {
        desc: "fdsa",
        imgSrc: "test",
      },
    ],
  },
  {
    title: "Geo Run",
    alt: "screenshot of Geo Run",
    imgSrc: "/Portfolio/geo-run.png",
    desc: "An endless runner game created with Unity",
    features: [
      {
        desc: "fdsa",
        imgSrc: "test",
      },
      {
        desc: "fdsa",
        imgSrc: "test",
      },
      {
        desc: "fdsa",
        imgSrc: "test",
      },
      {
        desc: "fdsa",
        imgSrc: "test",
      },
    ],
  },
];
