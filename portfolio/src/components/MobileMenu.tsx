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
import { useLocation, useNavigate } from "react-router-dom";
import { GITHUB, LINKEDIN } from "../lib/constants";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  function handleNavigate(path: string): void {
    navigate(path);
    setIsOpen(false);
  }

  return (
    <section className="block md:hidden">
      <MenuIcon
        className="h-7 w-7 hover:cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      <div
        className={`fixed inset-0 z-30 transition duration-[300ms] ease-in-out ${
          isOpen
            ? "bg-slate-900/25 backdrop-blur-sm dark:bg-dark-1/25"
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
            <section className="border-cm-gray flex items-center justify-between border-b p-4">
              <ThemeSelector />
              <ExitIcon
                className="h-6 w-6 fill-dark-1 hover:cursor-pointer dark:fill-light-1"
                onClick={() => setIsOpen(false)}
              />
            </section>
            <button
              onClick={() => handleNavigate("/")}
              className="my-2 flex items-center gap-x-2 rounded-md px-4 py-2 hover:cursor-pointer hover:bg-dark-1/10 dark:hover:bg-dark-2"
            >
              <HomeIcon
                className={`h-4 w-4 ${
                  path === "/"
                    ? "dark:fill-cm-blue fill-cm-orange"
                    : "fill-dark-1 dark:fill-light-1"
                }`}
              />
              HOME
            </button>
            <button
              onClick={() => handleNavigate("/about")}
              className="my-2 flex items-center gap-x-2 rounded-md px-4 py-2 hover:cursor-pointer hover:bg-dark-1/10 dark:hover:bg-dark-2"
            >
              <AboutIcon
                className={`h-4 w-4 ${
                  path === "/about"
                    ? "dark:fill-cm-blue fill-cm-orange"
                    : "fill-dark-1 dark:fill-light-1"
                }`}
              />
              ABOUT
            </button>
            <button
              onClick={() => handleNavigate("/projects")}
              className="my-2 flex items-center gap-x-2 rounded-md px-4 py-2 hover:cursor-pointer hover:bg-dark-1/10 dark:hover:bg-dark-2"
            >
              <ProjectIcon
                className={`h-4 w-4 ${
                  path === "/projects"
                    ? "dark:fill-cm-blue fill-cm-orange"
                    : "fill-dark-1 dark:fill-light-1"
                }`}
              />
              PROJECTS
            </button>
            <button
              onClick={() => handleNavigate("/contact")}
              className="my-2 flex items-center gap-x-2 rounded-md px-4 py-2 hover:cursor-pointer hover:bg-dark-1/10 dark:hover:bg-dark-2"
            >
              <ContactIcon
                className={`h-4 w-4 ${
                  path === "/contact"
                    ? "dark:fill-cm-blue fill-cm-orange"
                    : "fill-dark-1 dark:fill-light-1"
                }`}
              />
              CONTACT
            </button>
            <footer className="border-cm-gray mt-auto flex items-center gap-x-6 border-t p-4">
              <a target="_blank" href={GITHUB}>
                <GitHubIcon className="h-6 w-6 fill-dark-1 hover:cursor-pointer dark:fill-light-1" />
              </a>
              <a target="_blank" href={LINKEDIN}>
                <LinkedInIcon className="h-6 w-6 fill-dark-1 hover:cursor-pointer dark:fill-light-1" />
              </a>
            </footer>
          </nav>
        </div>
      </div>
    </section>
  );
}
