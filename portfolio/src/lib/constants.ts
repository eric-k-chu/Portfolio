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
  tags?: string[];
}

export const PROJECTS: Record<string, IProject> = {
  Artus: {
    title: "Artus",
    alt: "screenshot of Artus homepage",
    imgSrc: `${import.meta.env.BASE_URL}artus/artus.png`,
    desc: "A full-stack video-hosting web application",
    github: "https://github.com/eric-k-chu/Artus",
    live: "http://artus-dev.us-west-1.elasticbeanstalk.com/",
    features: [
      {
        feat: "Uploading Videos",
        desc: "Users can upload videos up to a max size of 5 megabytes.",
        imgSrc: `${import.meta.env.BASE_URL}artus/upload.png`,
      },
      {
        feat: "Watching Videos",
        desc: "Users can easily access and view a specific video.",
        imgSrc: `${import.meta.env.BASE_URL}artus/watch.png`,
      },
      {
        feat: "Editing Video Caption and Tags",
        desc: "Users can customize and edit the captions and tags for their uploaded videos.",
        imgSrc: `${import.meta.env.BASE_URL}artus/update-and-delete.png`,
      },
      {
        feat: "Deleting Videos",
        desc: "Users can delete their own videos.",
        imgSrc: `${import.meta.env.BASE_URL}artus/update-and-delete.png`,
      },
      {
        feat: "Liking a video",
        desc: "Users can favorite a video, which will appear in their liked videos section.",
        imgSrc: `${import.meta.env.BASE_URL}artus/liking.png`,
      },
      {
        feat: "Search Functionality",
        desc: "Users can search for usernames, captions, or tags.",
        imgSrc: `${import.meta.env.BASE_URL}artus/search.png`,
      },
    ],
    tags: [
      "React",
      "TypeScript",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
    ],
  },
  Castle: {
    title: "Castle",
    alt: "screenshot of Castle search results",
    imgSrc: `${import.meta.env.BASE_URL}castle/castle.png`,
    desc: "Chess.com API-driven player search engine",
    github: "https://github.com/eric-k-chu/Castle",
    live: "https://eric-k-chu.github.io/Castle/",
    features: [
      {
        feat: "Player Search Functionality",
        desc: "Users can search for specific player accounts in Chess.com",
        imgSrc: `${import.meta.env.BASE_URL}castle/search.png`,
      },
      {
        feat: "Public Account Information",
        desc: "Users can access and view public information about a player's account. This includes their name, their join date, their associated flag, and much more. ",
        imgSrc: `${import.meta.env.BASE_URL}castle/account.png`,
      },
      {
        feat: "Club Membership Display",
        desc: "Users can view the list of clubs that a player is afffiliated with.",
        imgSrc: `${import.meta.env.BASE_URL}castle/clubs.png`,
      },
      {
        feat: "Comprehensive Match History",
        desc: "Users can view the list games a player has played in. The games are sorted by their completion date.",
        imgSrc: `${import.meta.env.BASE_URL}castle/match-history.png`,
      },
      {
        feat: "Leaderboard Access",
        desc: "Users can view the leaderboards of the top 50 players in each game mode in Chess.com.",
        imgSrc: `${import.meta.env.BASE_URL}castle/leaderboard.png`,
      },
      {
        feat: "Bookmarking",
        desc: "Users can bookmark a specific game played by a player. Users can view their bookmarked game in the bookmark section.",
        imgSrc: `${import.meta.env.BASE_URL}castle/bookmark.png`,
      },
      {
        feat: "Daily Puzzle Display",
        desc: "Users can view the daily puzzle of the day.",
        imgSrc: `${import.meta.env.BASE_URL}castle/daily-puzzle.png`,
      },
      {
        feat: "Tournament History",
        desc: "Users can view the list of tournaments a player has participated in, are currently in, and will play in.",
        imgSrc: `${import.meta.env.BASE_URL}castle/tournament.png`,
      },
    ],
    tags: ["JavaScript", "AJAX", "HTML5", "CSS3"],
  },
  "Geo Run": {
    title: "Geo Run",
    alt: "screenshot of Geo Run",
    imgSrc: `${import.meta.env.BASE_URL}georun/georun.PNG`,
    desc: "An endless runner game created with Unity",
    github: "https://github.com/eric-k-chu/Geo-Run",
    live: "https://eric-k-chu.github.io/Geo-Run-Host/",
    features: [
      {
        feat: "Endless Running Gameplay",
        desc: "Geo Run is an endless runner type of game, where the player's character runs continuously through the game environment. The goal is to survive for as long as possible by avoiding obstacles.",
        imgSrc: `${import.meta.env.BASE_URL}georun/gameplay.PNG`,
      },
      {
        feat: "Navigation Controls",
        desc: "Geo Run has controls that allows the player to navigate their character. Players can move left or right to change lanes, move up to jump, and move down to fall quickly.",
        imgSrc: `${import.meta.env.BASE_URL}georun/navigation.gif`,
      },
      {
        feat: "Obstacle Avoidance",
        desc: "Players will encounter different obstacles during their playthrough of Geo Run. Some of these obstacles include crates and electrical fences.",
        imgSrc: `${import.meta.env.BASE_URL}georun/obstacles.gif`,
      },
      {
        feat: "Collectible Points",
        desc: "Stars are located throughout the game environment and can be collected to further increase a player's score.",
        imgSrc: `${import.meta.env.BASE_URL}georun/points.gif`,
      },
      {
        feat: "Customizable Audio Settings",
        desc: "Players can adjust the in-game volume settings to their liking.",
        imgSrc: `${import.meta.env.BASE_URL}georun/audio.PNG`,
      },
      {
        feat: "Selectable Characters",
        desc: "Players can choose different characters to play as.",
        imgSrc: `${import.meta.env.BASE_URL}georun/characters.PNG`,
      },
    ],
    tags: ["Unity3D", "Blender", "C#"],
  },
};

export const PROJECT_LIST: IProject[] = Object.values(PROJECTS);
