"use client";
import Image from "next/image";
import Header from "./components/Header";
import TransitionBackground from "./components/TransitionBackground";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <AnimatePresence initial={false}>
        {theme === "dark" ? (
          <motion.div
            // initial={{ backgroundColor: "white", color: "black" }}
            // initial={{ className: `bg-white` }}
            key={theme}
            animate={
              {
                // clipPath: ["circle(0% at 100% 0%)", "circle(150% at 100% 0%)"],
                //   className: `bg-blue-950`,
                // backgroundColor: "black",
                // color: "white",
              }
            }
            // className="absolute top-0 right-0 z-10 w-full h-full"
            transition={{
              duration: 4,
            }}
          >
            <Header setLoading={setLoading} />
            <div className="z-20">
              <h1 className="text-4xl text-red-600 dark:text-red-600">
                Hello World
              </h1>
            </div>
          </motion.div>
        ) : (
          <motion.div
            // initial={{ className: `bg-blue-950` }}
            // initial={{ backgroundColor: "black", color: "white" }}
            key={theme}
            animate={
              {
                // clipPath: ["circle(0% at 100% 0%)", "circle(150% at 100% 0%)"],
                //   className: `bg-white`,
                // backgroundColor: "white",
                // color: "black",
              }
            }
            // className="absolute top-0 right-0 z-10 w-full h-full"
            transition={{
              duration: 4,
            }}
          >
            <Header setLoading={setLoading} />
            <div className="z-20">
              <h1 className="text-4xl text-red-600 dark:text-red-600">
                Hello World
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* {loading && <TransitionBackground />} */}

      {/* <footer></footer> */}
    </>
  );
}
