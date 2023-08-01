"use client";
import {
  BsFillBootstrapFill,
  BsTypeBold,
  BsFillMoonStarsFill,
  BsSunFill,
} from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ theme, setTheme }) {
  return (
    <header className="min-h-screen pt-8 lg:pt-12 flex flex-col">
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
      <section className="flex items-center justify-center my-auto">
        <div className="text-center space-y-6">
          <h4 className="text-lg tracking-widest">HELLO</h4>
          <div>
            <h1 className="text-4xl">
              I'm Bhone Aung Kyaw,{" "}
              <span className="text-pink-600">Full-stack Developer.</span>
            </h1>
            <h1 className="text-4xl opacity-50">From Yangon, Myanmar</h1>
          </div>
          <h4 className="text-lg uppercase">
            I make great things with react and Node
          </h4>
          <button className="bg-pink-600 text-white uppercase font-bold rounded-full px-6 pt-3 pb-2 cursor-pointer">
            Get My Resume
          </button>
        </div>
      </section>
    </header>
  );
}
