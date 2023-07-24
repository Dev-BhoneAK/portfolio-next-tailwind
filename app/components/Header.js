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
          <div className="flex items-center justify-center bg-white rounded-full p-2">
            <BsFillMoonStarsFill
              className="cursor-pointer  text-lg text-blue-950"
              onClick={() => setTheme("light")}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center bg-blue-950 rounded-full p-2">
            <BsSunFill
              className="cursor-pointer text-lg text-sky-400"
              onClick={() => setTheme("dark")}
            />
          </div>
        )}
      </nav>
    </header>
  );
}
