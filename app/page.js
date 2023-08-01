"use client";
import KitchenDisplay from "../public/career/kitchen-display/kitchen-display.png";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import TransitionBackground from "./components/TransitionBackground";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }git a
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Main />
      <Footer />
    </>
  );
}
