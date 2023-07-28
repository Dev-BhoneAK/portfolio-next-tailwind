"use client";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      {/* {loading && <TransitionBackground />} */}
      <Header setLoading={setLoading} />
      <main>
        <section>
          <h2 className="text-3xl text-center mb-10">My Career Projects</h2>
          {/* <div className="grid grid-cols-1 divide-y text-center border-dotted">
            <h4>Left Side</h4>
            <h4>Right Side</h4>
          </div> */}

          {/* <div className="flex items-center justify-between border">
            <h4 className=" w-1/2">Left Side</h4>
            <div className="h-12 border-l border-dotted"></div>
            <p className="w-1/2">Your text here</p>
          </div> */}
          {/* <div className="flex items-center relative">
            <div className="h-12 border-l border-dotted flex-grow"></div>
            <div className="bg-white p-4 rounded-lg shadow-lg absolute left-0 top-0">
              <h2 className="text-xl font-semibold mb-2">Card Title</h2>
              <p className="text-gray-600">Card content goes here.</p>
            </div>
          </div> */}
          {/* <div className="relative">
            <div className="absolute h-48 border-l border-dotted  mx-auto"></div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Card Title</h2>
              <p className="text-gray-600">Card content goes here.</p>
            </div>
          </div> */}
          <div className="flex flex-col justify-center">
            {" "}
            <h2 className="text-xl text-center mb-2">2015</h2>
            <div className="h-3 w-3 rounded-full bg-pink-600 self-center mb-1"></div>
            <div className="h-8 border-l-4 border-dotted self-center"></div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Card Title</h2>
              <p className="text-gray-600">Card content goes here.</p>
            </div>
            <div className="h-8 border-l-4 border-dotted self-center"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
