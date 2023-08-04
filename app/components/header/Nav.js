import {
  BsFillBootstrapFill,
  BsTypeBold,
  BsFillMoonStarsFill,
  BsSunFill,
} from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav({ theme, setTheme }) {
  return (
    <nav className="flex items-center justify-between">
      <BsFillBootstrapFill className="cursor-pointer text-3xl" />
      <div className="flex items-center justify-center bg-blue-950 rounded-full p-2 dark:bg-white">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 15, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {theme === "dark" ? (
              <BsFillMoonStarsFill
                className="cursor-pointer text-lg text-blue-950"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BsSunFill
                className="cursor-pointer text-lg text-sky-400"
                onClick={() => setTheme("dark")}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  );
}
