import { useTheme } from "./hooks";
import { ThemeContext } from "./components/ThemeContext";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { LandingPage } from "./pages";

export default function App() {
  const { theme, handleSetTheme } = useTheme();

  const context = { theme, handleSetTheme };

  return (
    <ThemeContext.Provider value={context}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}
