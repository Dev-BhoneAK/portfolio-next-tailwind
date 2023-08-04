import React from "react";
import { motion } from "framer-motion";

export default function ActionButton() {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="flex w-full items-center justify-center">
      <motion.div
        className="relative w-48 h-14"
        initial="hidden"
        whileHover="visible"
        animate="hidden"
      >
        <svg className="absolute">
          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stop-color="#FF8282" />
              <stop offset="100%" stop-color="#db2777" />
            </linearGradient>
          </defs>
          <motion.rect
            x="1"
            y="1"
            rx="28"
            fill="none"
            stroke="#db2777"
            width="185"
            height="55"
            variants={pathVariants}
          ></motion.rect>
        </svg>

        <a
          href="http://marcel-pirnay.be/"
          className="absolute top-[0.4rem] left-[0.65rem] bg-pink-600 text-white uppercase font-bold rounded-full px-6 pt-3 pb-2"
        >
          Get My Resume
        </a>
      </motion.div>
    </div>
  );
}
