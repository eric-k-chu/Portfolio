import {
  GitHubIcon,
  LinkedInIcon,
  LogoIcon,
  MobileMenu,
  ThemeSelector,
} from ".";
import { Link, Outlet, useLocation } from "react-router-dom";
import { GITHUB, LINKEDIN } from "../lib/constants";
import { motion } from "framer-motion";

export function NavBar() {
  const path = useLocation().pathname;

  return (
    <>
      <header className="mx-auto max-w-7xl px-6">
        <div className="border-b border-gray py-6 dark:border-white/60">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <LogoIcon />
              <h1 className="font-medium">ERIC CHU</h1>
            </div>
            <nav className="hidden items-center justify-center gap-x-8 md:flex">
              <Link
                to="/"
                className={`border-b border-transparent hover:border-inherit ${
                  path === "/"
                    ? "border-orange dark:border-blue"
                    : "text-inherit"
                }`}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className={`border-b border-transparent hover:border-inherit ${
                  path === "/about"
                    ? "border-orange dark:border-blue"
                    : "text-inherit"
                }`}
              >
                ABOUT
              </Link>
              <Link
                to="/projects"
                className={`border-b border-transparent hover:border-inherit ${
                  path === "/projects"
                    ? "border-orange dark:border-blue"
                    : "text-inherit"
                }`}
              >
                PROJECTS
              </Link>
              <Link
                to="/contact"
                className={`border-b border-transparent hover:border-inherit ${
                  path === "/contact"
                    ? "border-orange dark:border-blue"
                    : "text-inherit"
                }`}
              >
                CONTACT
              </Link>
            </nav>
            <div className="hidden gap-x-4 md:flex">
              <ThemeSelector />
              <motion.a
                href={GITHUB}
                target="_blank"
                whileHover={{ scale: 1.1 }}
              >
                <GitHubIcon className="h-6 w-6 fill-black dark:fill-white/90" />
              </motion.a>
              <motion.a
                href={LINKEDIN}
                target="_blank"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedInIcon className="h-6 w-6 fill-black dark:fill-white/90" />
              </motion.a>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
