import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Tay from "../../../../public/career/tay/tay.png";

import {
  SmallCareerCard,
  LargeCareerCard,
} from "@/app/components/common/CareerCard";
import { MMLFullStackData } from "@/app/utils/careerData";
import CareerImage from "@/app/components/common/CareerImage";
import DottedDivider from "@/app/components/common/DottedDivider";

export default function TayProject() {
  const isSmallScreen = useMediaQuery("(max-width: 896px)");

  return isSmallScreen ? <SmallScreen /> : <LargeScreen />;
}

const SmallScreen = () => {
  return (
    <div className="flex flex-col justify-center">
      {" "}
      <h3 className="text-2xl text-center mb-2">2018</h3>
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
          src={Tay}
          alt="Kitchen Display System"
          loading="lazy"
          placeholder="blur"
          className="mb-4"
        />
        <h4 className="text-lg text-left text-slate-200 dark:text-sky-400 font-semibold mb-2">
        Fullstack Developer - MML
        </h4>
        <p className="text-slate-400 text-base">
        Developed the backend and REST API for an agriculture app in collaboration with the nation’s largest telecom company. I maintained and enhanced Lotaya, a major web portal in Myanmar, using Laravel 5.6 and Angular 2. I led the creation of Tay4U, a video social platform and contributed to video transcoding and storing videos on AWS S3 as a microservice which can be used video-related products of the company.
        </p>
      </motion.div>
      <div className="h-8 border-l-6 border-dotted self-center border-sky-700"></div>
    </div>
  );
};

const LargeScreen = () => {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl text-center mb-2">2018</h3>
      <div className="flex justify-center space-x-6">
        <LargeCareerCard data={MMLFullStackData} />
        <DottedDivider screenSize="large" />
        <CareerImage data={MMLFullStackData} />
      </div>
    </div>
  );
};
