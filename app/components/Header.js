"use client";
import {
  BsFillBootstrapFill,
  BsTypeBold,
  BsFillMoonStarsFill,
  BsSunFill,
} from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <header>
      <nav className="mt-8 flex items-center justify-between lg:mt-12">
        <BsFillBootstrapFill className="cursor-pointer text-3xl" />
        {theme === "dark" ? (
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsSunFill
            className="cursor-pointer text-2xl text-black"
            onClick={() => setTheme("dark")}
          />
        )}
      </nav>
    </header>
  );
}
