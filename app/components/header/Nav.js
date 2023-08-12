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
        duration: 3,
      },
    },
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // delay: 0.1,
        staggerChildren: 5,
        // when: "beforeChildren",
      },
    },
  };

  const themeVariants = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },
  };
  return (
    <nav
      className="flex items-center justify-between"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 40 40"
        variants={svgVariants}
        initial="initial"
        animate="animate"
      >
        {/* <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          variants={pathVariants}
          transform="translate(4, 8)"
          d="M 0 21.12 L 0 0 L 5.872 0 A 11.435 11.435 0 0 1 8.322 0.256 A 10.197 10.197 0 0 1 9.12 0.464 A 5.505 5.505 0 0 1 10.648 1.189 A 4.839 4.839 0 0 1 11.584 2.032 A 3.675 3.675 0 0 1 12.307 3.4 Q 12.528 4.151 12.528 5.104 A 5.868 5.868 0 0 1 12.345 6.594 A 5.066 5.066 0 0 1 12.008 7.512 Q 11.488 8.592 10.72 9.264 A 4.287 4.287 0 0 1 10.158 9.684 Q 9.676 9.983 9.2 10.064 Q 9.717 10.105 10.333 10.354 A 6.037 6.037 0 0 1 10.552 10.448 Q 11.296 10.784 11.976 11.408 A 4.709 4.709 0 0 1 12.845 12.493 A 5.72 5.72 0 0 1 13.096 12.968 A 4.472 4.472 0 0 1 13.446 14.095 Q 13.536 14.604 13.536 15.184 A 7.231 7.231 0 0 1 13.338 16.91 A 5.933 5.933 0 0 1 12.832 18.256 A 4.92 4.92 0 0 1 10.872 20.263 A 6.006 6.006 0 0 1 10.696 20.36 Q 9.479 21.006 7.712 21.103 A 11.696 11.696 0 0 1 7.072 21.12 L 0 21.12 Z M 2.72 11.456 L 2.72 18.832 L 6.8 18.832 A 6.971 6.971 0 0 0 7.684 18.78 Q 8.133 18.722 8.502 18.601 A 2.89 2.89 0 0 0 9.16 18.296 A 3.089 3.089 0 0 0 9.965 17.567 A 2.822 2.822 0 0 0 10.344 16.896 Q 10.688 16.032 10.688 15.056 A 4.012 4.012 0 0 0 10.514 13.846 A 3.214 3.214 0 0 0 9.632 12.448 A 3.397 3.397 0 0 0 8.298 11.691 Q 7.783 11.529 7.162 11.479 A 7.245 7.245 0 0 0 6.576 11.456 L 2.72 11.456 Z M 2.72 2.288 L 2.72 9.216 L 6.256 9.216 A 4.527 4.527 0 0 0 7.124 9.138 Q 7.645 9.036 8.061 8.802 A 2.664 2.664 0 0 0 8.256 8.68 Q 9.04 8.144 9.424 7.304 Q 9.808 6.464 9.808 5.568 A 4.889 4.889 0 0 0 9.727 4.646 Q 9.513 3.531 8.728 3.008 Q 7.839 2.415 6.457 2.311 A 8.161 8.161 0 0 0 5.84 2.288 L 2.72 2.288 Z"
        /> */}
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          variants={pathVariants}
          transform="translate(2, 6)"
          d="M 21.75 13.891 L 21.391 13.891 A 1.349 1.349 0 0 1 21.266 13.885 A 1.092 1.092 0 0 1 21.188 13.875 A 21.915 21.915 0 0 1 19.807 16.648 A 17.368 17.368 0 0 1 18.508 18.547 Q 16.953 20.516 15.195 21.805 Q 13.438 23.094 11.586 23.711 A 12.327 12.327 0 0 1 9.55 24.21 A 10.051 10.051 0 0 1 8.031 24.328 A 11.051 11.051 0 0 1 6.036 24.155 A 9.167 9.167 0 0 1 4.789 23.836 A 8.048 8.048 0 0 1 3.124 23.071 A 6.885 6.885 0 0 1 2.25 22.438 A 6.328 6.328 0 0 1 0.594 20.242 Q 0 18.953 0 17.359 A 9.356 9.356 0 0 1 0.303 15.04 A 11.565 11.565 0 0 1 0.648 13.93 A 14.095 14.095 0 0 1 1.578 11.917 A 18.188 18.188 0 0 1 2.578 10.328 Q 3.797 8.609 5.281 7.242 Q 6.766 5.875 8.398 4.844 A 23.347 23.347 0 0 1 11.766 3.078 A 27.574 27.574 0 0 1 14.997 1.935 A 25.302 25.302 0 0 1 15.211 1.875 A 25.095 25.095 0 0 1 17.94 1.284 A 22.493 22.493 0 0 1 18.555 1.195 A 25.979 25.979 0 0 1 20.496 1.015 A 21.185 21.185 0 0 1 21.625 0.984 A 31.655 31.655 0 0 1 23.304 1.027 A 27.423 27.423 0 0 1 23.859 1.063 Q 24.922 1.141 25.891 1.297 A 16.137 16.137 0 0 1 26.158 1.006 Q 26.449 0.699 26.668 0.507 A 3.486 3.486 0 0 1 26.797 0.398 Q 27.126 0.137 27.183 0.097 A 0.257 0.257 0 0 1 27.188 0.094 Q 27.317 0.029 27.424 0.009 A 0.499 0.499 0 0 1 27.516 0 Q 27.734 0 27.906 0.125 A 0.404 0.404 0 0 1 28.075 0.421 A 0.581 0.581 0 0 1 28.078 0.484 A 0.733 0.733 0 0 1 28.018 0.784 A 0.707 0.707 0 0 1 27.859 1.008 Q 27.692 1.169 27.433 1.418 A 496.2 496.2 0 0 1 27.266 1.578 A 14.045 14.045 0 0 1 29.073 2.146 Q 29.995 2.51 30.718 2.979 A 6.679 6.679 0 0 1 31.641 3.695 Q 33.156 5.109 33.156 7.188 Q 33.156 8.328 32.781 9.234 A 5.193 5.193 0 0 1 31.758 10.828 A 6.727 6.727 0 0 1 30.35 11.959 A 7.536 7.536 0 0 1 30.242 12.023 A 10.714 10.714 0 0 1 28.406 12.875 Q 29.56 13.197 30.42 13.599 A 8.593 8.593 0 0 1 30.695 13.734 Q 31.558 14.176 32.173 14.651 A 6.617 6.617 0 0 1 32.289 14.742 A 6.22 6.22 0 0 1 32.821 15.221 Q 33.081 15.486 33.273 15.757 A 3.741 3.741 0 0 1 33.313 15.813 A 6.553 6.553 0 0 1 33.64 16.34 A 4.804 4.804 0 0 1 33.891 16.859 Q 34.087 17.343 34.145 17.761 A 2.741 2.741 0 0 1 34.148 17.789 Q 34.189 18.11 34.2 18.356 A 3.805 3.805 0 0 1 34.203 18.516 A 4.942 4.942 0 0 1 34.086 19.612 A 4.014 4.014 0 0 1 33.789 20.469 A 5.063 5.063 0 0 1 32.672 21.984 A 6.536 6.536 0 0 1 31.268 22.977 A 7.437 7.437 0 0 1 31.039 23.094 A 11.808 11.808 0 0 1 29.094 23.836 Q 28.078 24.125 27.016 24.258 A 17.384 17.384 0 0 1 25.73 24.372 A 14.597 14.597 0 0 1 25 24.391 A 16.752 16.752 0 0 1 22.419 24.184 A 19.036 19.036 0 0 1 21.805 24.078 Q 20.156 23.766 18.469 23.063 Q 18.094 22.906 18.094 22.516 Q 18.094 22.25 18.281 22.086 A 0.708 0.708 0 0 1 18.448 21.975 A 0.561 0.561 0 0 1 18.688 21.922 A 0.585 0.585 0 0 1 18.812 21.936 A 0.795 0.795 0 0 1 18.922 21.969 Q 20.375 22.578 21.906 22.891 A 15.356 15.356 0 0 0 24.984 23.203 A 18.399 18.399 0 0 0 26.6 23.136 Q 27.398 23.066 28.087 22.921 A 9.72 9.72 0 0 0 28.609 22.797 A 10.612 10.612 0 0 0 29.752 22.424 Q 30.323 22.199 30.79 21.924 A 5.735 5.735 0 0 0 31.102 21.727 A 5.483 5.483 0 0 0 31.859 21.113 A 3.944 3.944 0 0 0 32.547 20.227 A 3.732 3.732 0 0 0 32.923 19.292 A 3.175 3.175 0 0 0 33.016 18.531 A 3.197 3.197 0 0 0 32.492 16.766 A 4.552 4.552 0 0 0 31.716 15.861 A 6.032 6.032 0 0 0 31.008 15.313 Q 30.062 14.682 28.745 14.233 A 13.362 13.362 0 0 0 28.703 14.219 Q 27.359 13.766 25.719 13.547 A 22.51 22.51 0 0 1 23.944 13.785 A 20.231 20.231 0 0 1 23.625 13.813 A 27.884 27.884 0 0 1 22.648 13.871 A 21.611 21.611 0 0 1 21.75 13.891 Z M 25.031 2.375 Q 24.234 2.266 23.391 2.219 A 30.846 30.846 0 0 0 22.081 2.175 A 35.123 35.123 0 0 0 21.625 2.172 A 20.946 20.946 0 0 0 19.839 2.251 A 25.327 25.327 0 0 0 18.703 2.375 A 24.019 24.019 0 0 0 16.037 2.885 A 26.98 26.98 0 0 0 15.531 3.016 A 25.153 25.153 0 0 0 12.67 3.979 A 27.67 27.67 0 0 0 12.258 4.148 Q 10.609 4.844 9.055 5.82 A 20.269 20.269 0 0 0 6.094 8.094 Q 4.688 9.391 3.531 11.016 A 16.028 16.028 0 0 0 2.449 12.762 A 12.441 12.441 0 0 0 1.766 14.281 A 10.047 10.047 0 0 0 1.311 15.899 A 7.805 7.805 0 0 0 1.172 17.344 A 6.451 6.451 0 0 0 1.311 18.709 A 5.238 5.238 0 0 0 1.664 19.781 A 5.009 5.009 0 0 0 3.063 21.602 Q 3.969 22.344 5.234 22.742 A 8.589 8.589 0 0 0 6.965 23.089 A 10.745 10.745 0 0 0 8.031 23.141 A 9.389 9.389 0 0 0 10.145 22.89 A 11.577 11.577 0 0 0 11.219 22.586 A 11.398 11.398 0 0 0 13.559 21.482 A 13.64 13.64 0 0 0 14.453 20.883 Q 16.031 19.734 17.453 17.977 A 16.622 16.622 0 0 0 19.015 15.655 A 21.133 21.133 0 0 0 19.938 13.797 A 1.064 1.064 0 0 1 19.598 13.739 A 1.442 1.442 0 0 1 19.359 13.633 Q 19.1 13.49 19.067 13.198 A 0.787 0.787 0 0 1 19.063 13.109 A 0.604 0.604 0 0 1 19.11 12.865 Q 19.173 12.721 19.32 12.626 A 0.799 0.799 0 0 1 19.422 12.57 A 2.036 2.036 0 0 1 19.656 12.482 Q 19.917 12.401 20.3 12.335 A 9.395 9.395 0 0 1 20.547 12.297 Q 20.969 11.016 21.406 9.734 A 37.215 37.215 0 0 1 22.375 7.203 Q 22.906 5.953 23.547 4.742 Q 24.188 3.531 25.031 2.375 Z M 25.734 12.359 A 15.33 15.33 0 0 0 26.877 12.105 A 17.209 17.209 0 0 0 27.148 12.031 A 12.392 12.392 0 0 0 28.57 11.539 A 8.573 8.573 0 0 0 29.891 10.852 Q 30.516 10.453 30.977 9.914 A 4.404 4.404 0 0 0 31.711 8.703 A 3.639 3.639 0 0 0 31.939 7.839 A 4.751 4.751 0 0 0 31.984 7.172 A 3.463 3.463 0 0 0 30.832 4.539 A 4.641 4.641 0 0 0 30.531 4.281 A 6.797 6.797 0 0 0 29.203 3.481 Q 28.535 3.169 27.719 2.928 A 15.694 15.694 0 0 0 26.359 2.594 A 17.045 17.045 0 0 0 25.196 4.231 A 19.497 19.497 0 0 0 24.891 4.734 A 27.467 27.467 0 0 0 23.625 7.164 A 31.46 31.46 0 0 0 22.586 9.711 A 26.814 26.814 0 0 0 22.008 11.52 A 23.091 23.091 0 0 0 21.828 12.203 A 13.137 13.137 0 0 1 22.129 12.191 A 10.28 10.28 0 0 1 22.406 12.188 L 22.859 12.188 A 21.687 21.687 0 0 1 23.496 12.197 A 27.835 27.835 0 0 1 24.188 12.227 A 23.88 23.88 0 0 1 24.934 12.279 A 29.747 29.747 0 0 1 25.734 12.359 Z"
        />
      </motion.svg>
      <motion.div
        className="flex items-center justify-center cursor-pointer bg-blue-950 rounded-full p-2 dark:bg-sky-400"
        variants={themeVariants}
        initial="hidden"
        animate="visible"
      >
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
      </motion.div>
    </nav>
  );
}
