import {
  BsFillBootstrapFill,
  BsTypeBold,
  BsFillMoonStarsFill,
  BsSunFill,
} from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav({ theme, setTheme }) {
  const lightVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      color: "#37bcf8",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      color: "#0b1a2e",
      transition: {
        duration: 0.5,
      },
    },
  };

  const darkVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      color: "#0b1a2e",
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      color: "#37bcf8",
      transition: {
        duration: 1,
      },
    },
  };

  const svgVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const pathVariants = {
    initial: {
      pathLength: 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 5,
      },
    },
  };
  return (
    <nav className="flex items-center justify-between">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 36 36"
        variants={svgVariants}
        initial="initial"
        animate="animate"
      >
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          variants={pathVariants}
          transform="translate(4, 8)"
          d="M 0 21.12 L 0 0 L 5.872 0 A 11.435 11.435 0 0 1 8.322 0.256 A 10.197 10.197 0 0 1 9.12 0.464 A 5.505 5.505 0 0 1 10.648 1.189 A 4.839 4.839 0 0 1 11.584 2.032 A 3.675 3.675 0 0 1 12.307 3.4 Q 12.528 4.151 12.528 5.104 A 5.868 5.868 0 0 1 12.345 6.594 A 5.066 5.066 0 0 1 12.008 7.512 Q 11.488 8.592 10.72 9.264 A 4.287 4.287 0 0 1 10.158 9.684 Q 9.676 9.983 9.2 10.064 Q 9.717 10.105 10.333 10.354 A 6.037 6.037 0 0 1 10.552 10.448 Q 11.296 10.784 11.976 11.408 A 4.709 4.709 0 0 1 12.845 12.493 A 5.72 5.72 0 0 1 13.096 12.968 A 4.472 4.472 0 0 1 13.446 14.095 Q 13.536 14.604 13.536 15.184 A 7.231 7.231 0 0 1 13.338 16.91 A 5.933 5.933 0 0 1 12.832 18.256 A 4.92 4.92 0 0 1 10.872 20.263 A 6.006 6.006 0 0 1 10.696 20.36 Q 9.479 21.006 7.712 21.103 A 11.696 11.696 0 0 1 7.072 21.12 L 0 21.12 Z M 2.72 11.456 L 2.72 18.832 L 6.8 18.832 A 6.971 6.971 0 0 0 7.684 18.78 Q 8.133 18.722 8.502 18.601 A 2.89 2.89 0 0 0 9.16 18.296 A 3.089 3.089 0 0 0 9.965 17.567 A 2.822 2.822 0 0 0 10.344 16.896 Q 10.688 16.032 10.688 15.056 A 4.012 4.012 0 0 0 10.514 13.846 A 3.214 3.214 0 0 0 9.632 12.448 A 3.397 3.397 0 0 0 8.298 11.691 Q 7.783 11.529 7.162 11.479 A 7.245 7.245 0 0 0 6.576 11.456 L 2.72 11.456 Z M 2.72 2.288 L 2.72 9.216 L 6.256 9.216 A 4.527 4.527 0 0 0 7.124 9.138 Q 7.645 9.036 8.061 8.802 A 2.664 2.664 0 0 0 8.256 8.68 Q 9.04 8.144 9.424 7.304 Q 9.808 6.464 9.808 5.568 A 4.889 4.889 0 0 0 9.727 4.646 Q 9.513 3.531 8.728 3.008 Q 7.839 2.415 6.457 2.311 A 8.161 8.161 0 0 0 5.84 2.288 L 2.72 2.288 Z"
        />
      </motion.svg>
      <div className="flex items-center justify-center cursor-pointer bg-blue-950 rounded-full p-2 dark:bg-sky-400">
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              key={theme}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={darkVariants}
            >
              <BsFillMoonStarsFill
                className="text-baseline"
                onClick={() => setTheme("light")}
              />
            </motion.div>
          ) : (
            <motion.div
              key={theme}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={lightVariants}
            >
              <BsSunFill
                className="text-baseline"
                onClick={() => setTheme("dark")}
              />
            </motion.div>
          )}
          {/* </motion.div> */}
        </AnimatePresence>
      </div>
    </nav>
  );
}
