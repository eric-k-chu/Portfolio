import { Theme } from "../components/ThemeContext";
import { useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  function handleSetTheme(theme: Theme) {
    setTheme(theme);
  }

  return { theme, handleSetTheme };
}
