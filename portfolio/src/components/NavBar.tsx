import { FaGithub } from "react-icons/fa";
import { ThemeSelector } from ".";
import { Link, Outlet } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <header className="mx-auto max-w-6xl px-6">
        <div className="border-gray border-b py-6">
          <div className="flex justify-between">
            <h1 className="font-medium">ERIC CHU</h1>
            <nav className="flex items-center justify-center gap-x-8">
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
            <div className="flex gap-x-4">
              <ThemeSelector />
              <a
                type="button"
                target="_blank"
                href="https://github.com/eric-k-chu"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
