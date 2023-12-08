import { GitHubIcon, LinkedInIcon, Logo, MobileMenu, ThemeSelector } from ".";
import { Link, Outlet } from "react-router-dom";
import { GITHUB, LINKEDIN } from "../lib/constants";
import { motion } from "framer-motion";

export function NavBar() {
  return (
    <>
      <header className="mx-auto max-w-7xl px-6">
        <div className="border-b border-gray py-6 dark:border-white/60">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <Logo />
              <h1 className="font-medium">ERIC CHU</h1>
            </div>
            <nav className="hidden items-center justify-center gap-x-8 md:flex">
              <Link
                to="/"
                className="border-b border-transparent hover:border-inherit"
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="border-b border-transparent hover:border-inherit"
              >
                ABOUT
              </Link>
              <Link
                to="/projects"
                className="border-b border-transparent hover:border-inherit"
              >
                PROJECTS
              </Link>
              <Link
                to="/contact"
                className="border-b border-transparent hover:border-inherit"
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
