"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "./components/Header";
import TransitionBackground from "./components/TransitionBackground";

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading && <TransitionBackground />}
      <Header setLoading={setLoading} />
      <div className="z-20 relative">
        <h1 className="text-4xl">Hello World</h1>
      </div>
      <footer></footer>
    </>
  );
}
