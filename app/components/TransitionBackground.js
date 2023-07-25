"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function TransitionBackground() {
  return <div className="transition-background"></div>;
  //   return (
  //     <>
  /* <AnimatePresence initial={false}>
        <motion.div
          className="absolute top-0 right-0 w-full h-full bg-white text-blue-950 dark:bg-blue-950 dark:text-sky-400"
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%);" }}
          transition={{ ease: "linear", duration: 2 }}
        ></motion.div>
      </AnimatePresence> */
  //     </>
  //   );
}
