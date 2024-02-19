import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import ShwedagonPagoda from "../../../../public/career/shwedagon/shwedagon.png";

export default function ShwedagonProject() {
  const isSmallScreen = useMediaQuery("(max-width: 896px)");

  return isSmallScreen ? <SmallScreen /> : <LargeScreen />;
}

const SmallScreen = () => {
  return (
    <div className="flex flex-col justify-center">
      {" "}
      <h3 className="text-2xl text-center mb-2">2013</h3>
      <div className="h-3 w-3 rounded-full bg-pink-600 self-center mb-1"></div>
      <div className="h-8 border-l-6 border-dotted self-center border-sky-700"></div>
      <motion.div
        className="bg-[#112240] p-4 rounded-md shadow-md self-center max-w-xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src={ShwedagonPagoda}
          alt="Shwedagon Pagoda Project"
          loading="lazy"
          placeholder="blur"
          className="mb-4"
        />
        <h4 className="text-xl text-left text-slate-200 font-semibold mb-2">
          Web Designer - SeaNet Technology
        </h4>
        <p className="text-slate-400 text-lg">
          During my tenure at my initial company, I served as a Junior Web
          Designer & Developer, where I actively contributed to various projects
          and initiatives. A primary focus of my role was crafting frontend
          solutions, mainly through the creation of HTML and CSS codebases. One
          of the standout projects during my time there was the "Shwedagon
          Pagoda Project," where I played a significant role in its development.
          I assisted in the design efforts, collaborating closely with the team
          to refine the project's visual elements and user experience.
          Additionally, I engaged as a junior developer in the 2013 SEA Games
          Equestrian event, contributing to the development of the event's point
          system using C#. This experience allowed me to hone my skills and gain
          valuable insights into software development processes in a dynamic
          environment.
        </p>
      </motion.div>
      <div className="h-8 border-l-6 border-dotted self-center border-sky-700"></div>
    </div>
  );
};

const LargeScreen = () => {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl text-center mb-2">2013</h3>
      <div className="flex justify-center space-x-6">
        <motion.div
          className="flex space-x-3 w-1/2 max-w-xl self-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="bg-[#112240] p-4 rounded-md shadow-md">
            <h4 className="text-xl text-left text-slate-200 font-semibold mb-6">
              Web Designer - SeaNet Technology
            </h4>
            <p className="text-slate-400 text-lg">
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including SEA Games Equestrian 2013 in
              Myanmar, Shwedagon Pagoda Website is one of the donation of SeaNet
              Technology among others. Actively particpated in drawing web
              design and software. Shwedagon Pagoda Website is one of the
              projects that I particpated in.
            </p>
          </div>

          <div className="h-3 min-w-[0.75rem] rounded-full bg-pink-600 mt-8"></div>
        </motion.div>

        <div className="h-auto border-l-6 border-dotted border-sky-700"></div>
        <motion.div
          className="flex space-x-2 w-1/2 max-w-xl"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="h-3 min-w-[0.75rem] rounded-full bg-pink-600 mt-8"></div>{" "}
          <Image
            src={ShwedagonPagoda}
            alt="Shwedagon Pagoda Project"
            loading="lazy"
            placeholder="blur"
            className="min-w-0"
          />
        </motion.div>
      </div>
    </div>
  );
};
