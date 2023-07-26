"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TransitionBackground() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log("theme changed to " + theme);
  return (
    <>
      <AnimatePresence initial={false}>
        {theme === "dark" ? (
          <motion.div
            // initial={{ backgroundColor: "white" }}
            key={theme}
            animate={{
              clipPath: ["circle(0% at 100% 0%)", "circle(150% at 100% 0%)"],
              backgroundColor: "red",
            }}
            className=" absolute top-0 right-0 z-10 w-full h-full"
            transition={{
              duration: 4,
            }}
          />
        ) : (
          <motion.div
            // initial={{ backgroundColor: "black" }}
            key={theme}
            animate={{
              clipPath: ["circle(0% at 100% 0%)", "circle(150% at 100% 0%)"],
              backgroundColor: "blue",
            }}
            className=" absolute top-0 right-0 z-10 w-full h-full"
            transition={{
              duration: 4,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
