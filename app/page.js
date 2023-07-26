"use client";
import Image from "next/image";
import Header from "./components/Header";
import TransitionBackground from "./components/TransitionBackground";

export default function Home() {
  return (
    <>
      <TransitionBackground />
      <Header />
      <div className="z-20 relative">
        <h1 className="text-4xl text-red-500 z-30">Hello World</h1>
      </div>
      <footer></footer>
    </>
  );
}
