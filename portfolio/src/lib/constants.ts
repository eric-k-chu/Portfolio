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

export const EMAIL = "kiyuen88ec@gmail.com";

export type Feature = {
  feat: string;
  desc: string;
  imgSrc: string;
};

export interface IProject {
  title: string;
  alt: string;
  imgSrc: string;
  desc: string;
  features: Feature[];
  github: string;
  live?: string;
}

export const PROJECTS: Record<string, IProject> = {
  Artus: {
    title: "Artus",
    alt: "screenshot of Artus homepage",
    imgSrc: `${import.meta.env.BASE_URL}artus.png`,
    desc: "A full-stack video-hosting web application",
    github: "https://github.com/eric-k-chu/Artus",
    live: "http://artus-dev.us-west-1.elasticbeanstalk.com/",
    features: [
      {
        feat: "Uploading Videos",
        desc: "Users can upload videos up to a max size of 5 megabytes.",
        imgSrc: "test",
      },
      {
        feat: "Watching Videos",
        desc: "Users can easily access and view a specific video.",
        imgSrc: "test",
      },
      {
        feat: "Editing Video Caption and Tags",
        desc: "Users can customize and edit the captions and tags for their uploaded videos.",
        imgSrc: "test",
      },
      {
        feat: "Deleting Videos",
        desc: "Users can delete their own videos.",
        imgSrc: "test",
      },
      {
        feat: "Liking a video",
        desc: "Users can favorite a video, which will appear in their liked videos section.",
        imgSrc: "test",
      },
      {
        feat: "Search Functionality",
        desc: "Users can search for usernames, captions, or tags.",
        imgSrc: "test",
      },
    ],
  },
  Castle: {
    title: "Castle",
    alt: "screenshot of Castle search results",
    imgSrc: `${import.meta.env.BASE_URL}castle.png`,
    desc: "Chess.com API-driven player search engine",
    github: "https://github.com/eric-k-chu/Castle",
    live: "https://eric-k-chu.github.io/Castle/",
    features: [
      {
        feat: "Player Search Functionality",
        desc: "Users can search for specific player accounts in Chess.com",
        imgSrc: "test",
      },
      {
        feat: "Public Account Information",
        desc: "Users can access and view public information about a player's account. This includes their name, their join date, their associated flag, and much more. ",
        imgSrc: "test",
      },
      {
        feat: "Club Membership Display",
        desc: "Users can view the list of clubs that a player is afffiliated with.",
        imgSrc: "test",
      },
      {
        feat: "Comprehensive Match History Exploration",
        desc: "Users can view the list games a player has played in. The games are sorted by when their completed date.",
        imgSrc: "test",
      },
      {
        feat: "Leaderboard Access",
        desc: "Users can view the leaderboards of the top 50 players in each game mode in Chess.com.",
        imgSrc: "test",
      },
      {
        feat: "Bookmarking",
        desc: "Users can bookmark a specific game played by a player. Users can view their bookmarked game in the bookmark section.",
        imgSrc: "test",
      },
      {
        feat: "Daily Puzzle Display",
        desc: "Users can view the daily puzzle of the day.",
        imgSrc: "test",
      },
      {
        feat: "Tournament History",
        desc: "Users can view the list of tournaments a player has participated in, are currently in, and will play in.",
        imgSrc: "test",
      },
    ],
  },
  "Geo Run": {
    title: "Geo Run",
    alt: "screenshot of Geo Run",
    imgSrc: `${import.meta.env.BASE_URL}georun.PNG`,
    desc: "An endless runner game created with Unity",
    github: "https://github.com/eric-k-chu/Geo-Run",
    live: "https://eric-k-chu.github.io/Geo-Run-Host/",
    features: [
      {
        feat: "Endless Running Gameplay",
        desc: "Geo Run is an endless runner type of game, where the player's character runs continuously through the game environment. The goal is to survive for as long as possible by avoiding obstacles.",
        imgSrc: "test",
      },
      {
        feat: "Navigation Controls",
        desc: "Geo Run has controls that allows the player to navigate their character. Players can move left or right to change lanes, move up to jump, and move down to fall quickly.",
        imgSrc: "test",
      },
      {
        feat: "Obstacle Avoidance",
        desc: "Players will encounter different obstacles during their playthrough of Geo Run. Some of these obstacles include crates and electrical fences.",
        imgSrc: "test",
      },
      {
        feat: "Collectible Points",
        desc: "Stars are located throughout the game environment and can be collected to further increase a player's score.",
        imgSrc: "test",
      },
      {
        feat: "Customizable Audio Settings",
        desc: "Players can adjust the in-game volume settings to their liking.",
        imgSrc: "test",
      },
      {
        feat: "Selectable Characters",
        desc: "Players can choose different characters to play as.",
        imgSrc: "test",
      },
    ],
  },
};

export const PROJECT_LIST: IProject[] = Object.values(PROJECTS);
