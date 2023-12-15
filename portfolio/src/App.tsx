import { useTheme } from "./hooks";
import { ThemeContext } from "./components/ThemeContext";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { LandingPage, AboutPage, NotFoundPage, ProjectsPage } from "./pages";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";

export default function App() {
  const { theme, handleSetTheme } = useTheme();

  const context = { theme, handleSetTheme };

  return (
    <ThemeContext.Provider value={context}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route
            path="projects/:projectName"
            element={<ProjectDetailsPage />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}
