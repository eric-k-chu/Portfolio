import { type Theme } from "../components";
import { PROJECTS } from "./constants";

export function readTheme(): Theme {
  const localTheme = localStorage.getItem("theme-eric-chu") as Theme;
  return localTheme ? localTheme : "light";
}

export function writeTheme(theme: Theme): void {
  localStorage.setItem("theme-eric-chu", theme);
}

export function doesProjectExist(name: string | undefined): boolean {
  if (name === undefined) return false;

  return PROJECTS[name] !== undefined;
}
