import React from "react";
import Image from "next/image";
import ToolsTag from "./ToolsTag";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function PortfolioCard({ title, image }) {
  const animation = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { duration: 2 },
  };
  return (
    <motion.div
      className="relative group h-96 m-1 md:m-8 cursor-pointer"
      whileHover="animate"
    >
      <Image
        fill
        alt="Ecommerce Admin Dashboard"
        src={image}
        className="rounded-3xl object-fill brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black rounded-3xl"></div>
      <motion.div
        className="absolute bottom-6 left-6 md:bottom-10 md:left-10 opacity-1 md:opacity-0 group-hover:opacity-100 text-white text-left"
        // variants={animation}
      >
        <h3 className="mb-4 text-2xl">{title}</h3>
        <p>
          <ToolsTag tagName="Express" />
          <ToolsTag tagName="React" />
          <ToolsTag tagName="Docker" />
          <ToolsTag tagName="AWS" />
        </p>
      </motion.div>
      <div className="absolute top-6 left-6 md:top-8 md:left-10 opacity-1 md:opacity-0 group-hover:opacity-100 text-xl text-white">
        <FaExternalLinkAlt />
      </div>
      <div className="absolute top-6 right-6 md:top-8 md:right-10 opacity-1 md:opacity-0 group-hover:opacity-100 text-xl text-white">
        <FaGithub />
      </div>
    </motion.div>
  );
}
