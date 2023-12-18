import { Link } from "react-router-dom";
import { NotFound404Icon } from "../components";

export function NotFoundPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-4">
      <NotFound404Icon className="h-28 w-28 fill-dark-1 dark:fill-light-1 md:h-40 md:w-40" />
      <h1 className="text-lg font-semibold md:text-xl">Not Found</h1>
      <h2 className="text-center text-sm font-light md:text-base">
        The requested page could not be found.
      </h2>
      <Link
        to="/"
        className="dark:bg-cm-blue bg-cm-orange mt-4 scale-100 rounded-full px-6 py-2 text-sm text-dark-1 shadow-sm transition-transform hover:scale-110 md:text-base"
      >
        GO HOME
      </Link>
    </div>
  );
}
