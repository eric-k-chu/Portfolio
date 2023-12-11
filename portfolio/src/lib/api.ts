import { type Theme } from "../components";

export function readTheme(): Theme {
  const localTheme = localStorage.getItem("theme-eric-chu") as Theme;
  return localTheme ? localTheme : "light";
}

export function writeTheme(theme: Theme): void {
  localStorage.setItem("theme-eric-chu", theme);
}
