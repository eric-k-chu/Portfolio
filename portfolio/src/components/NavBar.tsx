import {
  GitHubIcon,
  LinkedInIcon,
  LogoIcon,
  MobileMenu,
  ThemeSelector,
} from ".";
import { Link, Outlet, useLocation } from "react-router-dom";
import { EMAIL, GITHUB, LINKEDIN } from "../lib/constants";

export function NavBar() {
  const path = useLocation().pathname;

  return (
    <>
      <header className="mx-auto px-8">
        <div className="py-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <LogoIcon />
              <h1 className="font-medium">ERIC CHU</h1>
            </div>
            <nav className="hidden items-center justify-center gap-x-8 md:flex">
              <ThemeSelector />
              <Link
                to="/"
                className={`border-b hover:border-inherit ${
                  path === "/"
                    ? "border-orange dark:border-blue"
                    : "border-transparent"
                }`}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className={`border-b hover:border-inherit ${
                  path === "/about"
                    ? "border-orange dark:border-blue"
                    : "border-transparent"
                }`}
              >
                ABOUT
              </Link>
              <Link
                to="/projects"
                className={`border-b hover:border-inherit ${
                  path === "/projects" || path.includes("/projects/")
                    ? "border-orange dark:border-blue"
                    : "border-transparent"
                }`}
              >
                PROJECTS
              </Link>
            </nav>
            <MobileMenu />
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="mx-auto mt-auto flex h-96 w-full flex-col items-center bg-black p-8 text-light-1 md:flex-row md:justify-around">
        <div className="flex h-full w-full flex-col justify-center gap-y-6 md:w-1/4">
          <h1 className="text-base font-semibold underline underline-offset-4 md:text-lg">
            Contact
          </h1>
          <h2 className="text-sm md:text-base">{EMAIL}</h2>
        </div>
        <div className="flex h-full w-full flex-col justify-center gap-y-6 md:w-1/4">
          <h1 className="text-base font-semibold underline underline-offset-4 md:text-lg">
            Socials
          </h1>
          <div className="flex items-center gap-x-4">
            <a target="_blank" href={GITHUB}>
              <GitHubIcon className="h-5 w-5 fill-light-1" />
            </a>
            <a target="_blank" href={LINKEDIN}>
              <LinkedInIcon className="h-5 w-5 fill-light-1" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
