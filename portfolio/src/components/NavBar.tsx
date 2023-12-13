import { LogoIcon, MobileMenu, ThemeSelector } from ".";
import { Link, Outlet, useLocation } from "react-router-dom";

export function NavBar() {
  const path = useLocation().pathname;

  return (
    <>
      <header className="mx-auto px-12">
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
                  path === "/projects"
                    ? "border-orange dark:border-blue"
                    : "border-transparent"
                }`}
              >
                PROJECTS
              </Link>
              <Link
                to="/contact"
                className={`border-b hover:border-inherit ${
                  path === "/contact"
                    ? "border-orange dark:border-blue"
                    : "border-transparent"
                }`}
              >
                CONTACT
              </Link>
            </nav>
            <MobileMenu />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
