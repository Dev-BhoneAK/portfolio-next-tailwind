import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

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
      pathLength: 1.1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const buttonVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 2,
        delay: 1,
      },
    },
  };
  return (
    <motion.div
      className="flex w-full items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
    >
      <motion.svg
        width="200"
        height="60"
        initial="hidden"
        whileHover="visible"
        animate="hidden"
      >
        {/* <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stop-color="#FF8282" />
              <stop offset="100%" stop-color="#db2777" />
            </linearGradient>
          </defs> */}
        {/* <motion.rect
          x="1"
          y="1"
          rx="28"
          fill="none"
          stroke="#db2777"
          width="185"
          height="55"
          variants={pathVariants}
        ></motion.rect> */}
        <motion.rect
          width="180"
          height="50"
          x="50%"
          y="50%"
          transform="translate(-90,-25)"
          rx="24"
          fill="none"
          stroke="#db2777"
          variants={pathVariants}
        ></motion.rect>
        <foreignObject
          x="50%"
          y="50%"
          transform="translate(-85,-20)"
          width="170"
          height="40"
        >
          <a
            href="/Resume.pdf"
            className="bg-pink-600 text-white uppercase font-semibold tracking-wider w-full h-full inline-block rounded-full px-5 pt-2"
            download="BHONE AUNG KYAW - Resume"
          >
            {/* <FiDownload className="cursor-pointer text-xl hover:text-2xl" /> */}
            Get Resume
          </a>
        </foreignObject>
      </motion.svg>
    </motion.div>
  );
}
