import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import KitchenDisplay from "../../../../public/career/kitchen-display/kitchen-display.png";

export default function KitchenDisplayProject() {
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
          src={KitchenDisplay}
          alt="Kitchen Display System"
          loading="lazy"
          placeholder="blur"
          className="mb-4"
        />
        <h4 className="text-lg text-left text-slate-200 dark:text-sky-400 font-semibold mb-2">
          Web Developer - Novitee
        </h4>
        <p className="text-slate-400 text-base">
          Started working as a Backend Developer at a Singapore-based F&B solutions company, where my primary responsibility was developing backend solutions.
          Additionally, I utilized Bootstrap and jQuery to develop responsive
          and interactive frontend interfaces. I delivered high-quality code for
          projects like Purchasing and Inventory System, Hotel Booking System,
          and Kitchen Display System, for which you can see a visual
          representation.
        </p>
      </motion.div>
      <div className="h-8 border-l-6 border-dotted self-center border-sky-700"></div>
    </div>
  );
};

const LargeScreen = () => {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl text-center mb-2">2015</h3>
      <div className="flex justify-center space-x-6">
        <motion.div
          className="flex space-x-2 w-1/2 max-w-xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <Image
            src={KitchenDisplay}
            alt="Kitchen Display System"
            loading="lazy"
            placeholder="blur"
            className="min-w-0"
          />
          <div className="h-3 min-w-[0.75rem] rounded-full bg-pink-600 mt-8"></div>
        </motion.div>

        <div className="h-auto border-l-6 border-dotted border-sky-700"></div>

        <motion.div
          className="flex space-x-3 w-1/2 max-w-xl self-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="h-3 min-w-[0.75rem] rounded-full bg-pink-600 mt-8"></div>
          <div className="bg-[#112240] p-4 rounded-md shadow-md ">
            <div className="flex items-center mb-6">
            <h4 className="text-slate-200 dark:text-sky-400 text-lg text-left font-semibold mr-2">
              Web Developer - Novitee
            </h4>
            </div>
            <p className="text-slate-400 text-base">
              Started working as a Backend Developer at a Singapore-based F&B solutions company, where my primary responsibility was developing backend solutions.
              Additionally, I utilized Bootstrap and jQuery to develop
              responsive and interactive frontend interfaces. I delivered
              high-quality code for projects like Purchasing and Inventory
              System, Hotel Booking System, and Kitchen Display System, for
              which you can see a visual representation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
