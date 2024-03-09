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
          During the time of my initial company, I was a Junior Web Designer &
          Developer, focusing on frontend solutions with HTML and CSS. I
          contributed significantly to the &quot;Shwedagon Pagoda Project&quot;,
          aiding in design and refining visual elements. I also worked as a
          junior developer for the 2013 SEA Games Equestrian event, contributing
          to the development of the event&apos;s point system using C# language.
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
              During the time of my initial company, I was a Junior Web Designer
              & Developer, focusing on frontend solutions with HTML and CSS. I
              contributed significantly to the &quot;Shwedagon Pagoda
              Project&quot;, aiding in design and refining visual elements. I
              also worked as a junior developer for the 2013 SEA Games
              Equestrian event, contributing to the development of the
              event&apos;s point system using C# language.
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
