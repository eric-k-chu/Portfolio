import { useTheme } from "./hooks";
import { ThemeContext } from "./components/ThemeContext";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { LandingPage, AboutPage, NotFoundPage, ProjectPage } from "./pages";

export default function App() {
  const { theme, handleSetTheme } = useTheme();

  const context = { theme, handleSetTheme };

  return (
    <ThemeContext.Provider value={context}>
      <Routes>
        <Route path="/Portfolio/" element={<NavBar />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}
