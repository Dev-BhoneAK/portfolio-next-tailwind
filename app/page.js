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
      {/* {loading && <TransitionBackground />} */}
      <Header setLoading={setLoading} />
      {/* <main>

      </main>
      <footer></footer> */}
    </>
  );
}
