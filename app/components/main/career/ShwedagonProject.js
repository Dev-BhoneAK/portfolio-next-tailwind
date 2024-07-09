import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ShwedagonPagoda from "../../../../public/career/shwedagon/shwedagon.png";

import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import {
  SmallCareerCard,
  LargeCareerCard,
} from "@/app/components/common/CareerCard";
import { SeaNetTechData } from "@/app/utils/careerData";
import CareerImage from "@/app/components/common/CareerImage";
import DottedDivider from "@/app/components/common/DottedDivider";

export default function ShwedagonProject() {
  const isSmallScreen = useMediaQuery("(max-width: 896px)");
  return isSmallScreen ? <SmallScreen /> : <LargeScreen />;
}

const SmallScreen = () => {
  return (
    <div className="flex flex-col justify-center">
      {" "}
      <h3 className="text-2xl text-center mb-2">2015</h3>
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
        <h4 className="text-lg text-left text-slate-200 dark:text-sky-400 font-semibold mb-2">
        Web Designer - SeaNet Technology
        </h4>
        <p className="text-slate-400 text-base">
        During my time at my initial company, I served as a Junior Web Designer & Developer, specializing in frontend solutions using HTML and CSS. I made significant contributions to the Shwedagon Pagoda Project by assisting in design and refining visual elements. Additionally, I worked as a junior PHP developer for the Maha Dhamma Pala e-Library system, mainly contributed to enhancing the searching and browsing functions of the website.
        </p>
      </motion.div>
      <div className="h-8 border-l-6 border-dotted self-center border-sky-700"></div>
    </div>
  );
};

const LargeScreen = () => {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl text-center mb-2">
        {SeaNetTechData.year}
      </h3>

      <div className="flex justify-center space-x-6">
        <LargeCareerCard data={SeaNetTechData} />
        <DottedDivider screenSize="large" />
        <CareerImage data={SeaNetTechData} />
      </div>
    </div>
  );
};
