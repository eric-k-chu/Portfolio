import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useThemeContext } from "../hooks";
import { motion } from "framer-motion";

export function ThemeSelector() {
  const { theme, handleSetTheme } = useThemeContext();
  return (
    <motion.button
      type="button"
      onClick={() => handleSetTheme(theme === "light" ? "dark" : "light")}
      whileHover={{ scale: 1.3 }}
      whileTap={{ rotate: 360 }}
    >
      {theme === "light" ? (
        <IoIosSunny className="text-orange h-6 w-6" />
      ) : (
        <IoIosMoon className="text-blue h-6 w-6" />
      )}
    </motion.button>
  );
}
