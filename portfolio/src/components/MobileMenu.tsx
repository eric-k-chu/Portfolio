import {
  AboutIcon,
  ContactIcon,
  ExitIcon,
  GitHubIcon,
  HomeIcon,
  LinkedInIcon,
  MenuIcon,
  ProjectIcon,
  ThemeSelector,
} from ".";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GITHUB, LINKEDIN } from "../lib/constants";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation().pathname;

  return (
    <section className="block md:hidden">
      <MenuIcon
        className="h-7 w-7 fill-black hover:cursor-pointer dark:fill-white/90"
        onClick={() => setIsOpen(true)}
      />
      <div
        className={`fixed inset-0 z-10 transition duration-[300ms] ease-in-out ${
          isOpen
            ? "bg-slate-900/25 backdrop-blur-sm dark:bg-black/25"
            : "pointer-events-none bg-transparent backdrop-blur-none"
        }`}
      >
        <div
          className={`flex h-full items-start justify-end transition-transform duration-[300ms] ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="min-h-full w-full" onClick={() => setIsOpen(false)} />
          <nav className="flex min-h-full min-w-[15rem] flex-col bg-light-1 px-4 shadow-lg dark:bg-dark-1">
            <section className="flex items-center justify-between border-b border-gray p-4 dark:border-white/60">
              <ThemeSelector />
              <ExitIcon
                className="h-6 w-6 fill-black hover:cursor-pointer dark:fill-white/90"
                onClick={() => setIsOpen(false)}
              />
            </section>
            <Link
              to="/"
              className="my-2 flex items-center gap-x-2 rounded-md px-4 py-2 hover:cursor-pointer hover:bg-black/10 dark:hover:bg-gray"
            >
              <HomeIcon
                className={`h-4 w-4 ${
                  path === "/"
                    ? "fill-orange dark:fill-blue"
                    : "fill-black dark:fill-white/90"
                }`}
              />
              HOME
            </Link>
            <Link
              to="/about"
              className="my-2 flex items-center gap-x-2 rounded-md px-4 py-2 hover:cursor-pointer hover:bg-black/10 dark:hover:bg-gray"
            >
              <AboutIcon
                className={`h-4 w-4 ${
                  path === "/about"
                    ? "fill-orange dark:fill-blue"
                    : "fill-black dark:fill-white/90"
                }`}
              />
              ABOUT
            </Link>
            <Link
              to="/projects"
              className="my-2 flex items-center gap-x-2 rounded-md px-4 py-2 hover:cursor-pointer hover:bg-black/10 dark:hover:bg-gray"
            >
              <ProjectIcon
                className={`h-4 w-4 ${
                  path === "/projects"
                    ? "fill-orange dark:fill-blue"
                    : "fill-black dark:fill-white/90"
                }`}
              />
              PROJECTS
            </Link>
            <Link
              to="/contact"
              className="my-2 flex items-center gap-x-2 rounded-md px-4 py-2 hover:cursor-pointer hover:bg-black/10 dark:hover:bg-gray"
            >
              <ContactIcon
                className={`h-4 w-4 ${
                  path === "/contact"
                    ? "fill-orange dark:fill-blue"
                    : "fill-black dark:fill-white/90"
                }`}
              />
              CONTACT
            </Link>
            <footer className="mt-auto flex items-center gap-x-6 border-t border-gray p-4 dark:border-white/60">
              <a target="_blank" href={GITHUB}>
                <GitHubIcon className="h-6 w-6 fill-black hover:cursor-pointer dark:fill-white/90" />
              </a>
              <a target="_blank" href={LINKEDIN}>
                <LinkedInIcon className="h-6 w-6 fill-black hover:cursor-pointer dark:fill-white/90" />
              </a>
            </footer>
          </nav>
        </div>
      </div>
    </section>
  );
}
