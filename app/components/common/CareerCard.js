import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import ProjectLink from "./ProjectLink";

export function SmallCareerCard({
  imageSrc,
  imageAlt,
  position,
  responsibility,
}) {
  return (
    <motion.div
      className="bg-[#112240] p-4 rounded-md shadow-md self-center max-w-xl"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        // placeholder="blur"
        className="mb-4"
      />
      <h4 className="text-xl text-left text-slate-200 font-semibold mb-2">
        {position}
      </h4>
      <p className="text-slate-400 text-lg">{responsibility}</p>
    </motion.div>
  );
}

export function LargeCareerCard({
  data: { position, responsibility, projectLinks },
}) {
  return (
    <motion.div
      className="flex space-x-3 w-1/2 max-w-xl self-center"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <div className="bg-[#003459] dark:bg-[#112240] p-4 rounded-md shadow-md">
        <div className="flex items-center mb-6">
          <h4 className="text-slate-200 dark:text-sky-400 text-lg text-left font-semibold mr-2">
            {position}
          </h4>
          {/* <FiExternalLink className="cursor-pointer text-2xl text-pink-600 hover:text-3xl" /> */}
        </div>
        <p className="text-slate-400 dark:text-slate-400 text-base">
          {responsibility}
        </p>
        {/* <ProjectLink projectLinks={projectLinks} /> */}
      </div>

      <div className="h-3 min-w-[0.75rem] rounded-full bg-pink-600 mt-8"></div>
    </motion.div>
  );
}
