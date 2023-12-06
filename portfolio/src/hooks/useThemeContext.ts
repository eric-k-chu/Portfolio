import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

export function useThemeContext() {
  return useContext(ThemeContext);
}
