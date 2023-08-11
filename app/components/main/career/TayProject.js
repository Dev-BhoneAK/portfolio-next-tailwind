import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Tay from "../../../../public/career/tay/tay.png";

export default function TayProject() {
  const isSmallScreen = useMediaQuery("(max-width: 896px)");

  return isSmallScreen ? <SmallScreen /> : <LargeScreen />;
}

const SmallScreen = () => {
  return (
    <div className="flex flex-col justify-center">
      {" "}
      <h3 className="text-xl text-center mb-2">2018</h3>
      <div className="h-3 w-3 rounded-full bg-pink-600 self-center mb-1"></div>
      <div className="h-8 border-l-6 border-dotted self-center border-sky-700"></div>
      <motion.div
        className="bg-[#112240] p-4 rounded-md shadow-md"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image src={Tay} alt="Tay Project" className="mb-4" />
        <h4 className="text-xl text-left text-slate-200 font-semibold mb-2">
          Fullstack Developer - MML
        </h4>
        <p className="text-slate-400 text-lg">
          Deliver high-quality, robust production code for a diverse array of
          projects for clients including SEA Games Equestrian 2013 in Myanmar,
          Shwedagon Pagoda Website is one of the donation of CE Technology among
          others. Actively particpated in drawing web design and software.
          Shwedagon Pagoda Website is one of the projects that I particpated in.
        </p>
      </motion.div>
      <div className="h-8 border-l-6 border-dotted self-center border-sky-700"></div>
    </div>
  );
};

const LargeScreen = () => {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-xl text-center mb-2">2018</h3>
      <div className="flex justify-center space-x-6">
        <motion.div
          className="flex space-x-3 w-1/2 max-w-lg self-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="bg-[#112240] p-4 rounded-md shadow-md">
            <h4 className="text-xl text-left text-slate-200 font-semibold mb-6">
              Fullstack Developer - Myanmar Media Linkage
            </h4>
            <p className="text-slate-400 text-lg">
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including SEA Games Equestrian 2013 in
              Myanmar, Shwedagon Pagoda Website is one of the donation of CE
              Technology among others. Actively particpated in drawing web
              design and software. Shwedagon Pagoda Website is one of the
              projects that I particpated in.
            </p>
          </div>
          <div className="h-3 min-w-[0.75rem] rounded-full bg-pink-600 mt-8"></div>
        </motion.div>

        <div className="h-auto border-l-6 border-dotted border-sky-700"></div>
        <motion.div
          className="flex space-x-2 w-1/2 max-w-lg"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="h-3 min-w-[0.75rem] rounded-full bg-pink-600 mt-8"></div>
          <Image src={Tay} alt="Tay Project" className="min-w-0" />
        </motion.div>
      </div>
    </div>
  );
};
