import { Theme } from "../components/ThemeContext";
import { useEffect, useLayoutEffect, useState } from "react";
import { readTheme, writeTheme } from "../lib/api";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useLayoutEffect(() => {
    const localTheme = readTheme();
    document.documentElement.className = localTheme;
    setTheme(localTheme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  function handleSetTheme(theme: Theme) {
    setTheme(theme);
    writeTheme(theme);
  }

  return { theme, handleSetTheme };
}
