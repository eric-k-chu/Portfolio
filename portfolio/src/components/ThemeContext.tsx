import { createContext } from "react";

export type Theme = "light" | "dark";

type ThemeContextValues = {
  theme: Theme | undefined;
  handleSetTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextValues>({
  theme: undefined,
  handleSetTheme: () => undefined,
});
