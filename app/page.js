"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import TransitionBackground from "./components/TransitionBackground";

export default function Home() {
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
      <Header theme={theme} setTheme={setTheme} />
      <Main />
      <Footer />
    </>
  );
}
