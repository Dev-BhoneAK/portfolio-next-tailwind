import React, { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";
import DreamLeague1 from "../../../../public/career/football-master/dl1.png";
import DreamLeague2 from "../../../../public/career/football-master/dl2.png";
import Livescore from "../../../../public/career/football-master/Livescore.png";

export default function FootballMasterProject() {
  // const Data = [
  //     ''
  // ]
  const isSmallScreen = useMediaQuery("(max-width: 896px)");

  return isSmallScreen ? <SmallScreen /> : <LargeScreen />;
}

const SmallScreen = () => {
  const variants = {
    center: {
      x: "0rem",
      scale: 1.1,
      zIndex: "5",
      filter: "brightness(100%)",
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: "-9rem",
      filter: "brightness(50%)",
      scale: 1,
      zIndex: "4",
      boxShadow: "unset",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      x: "9rem",
      filter: "brightness(50%)",
      scale: 1,
      boxShadow: "unset",
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
  return (
    <div className="flex flex-col justify-center">
      {" "}
      <h3 className="text-xl text-center mb-2">2022</h3>
      <div className="h-3 w-3 rounded-full bg-pink-600 self-center mb-1"></div>
      <div className="h-8 border-l-4 border-dotted self-center"></div>
      <motion.div
        className="bg-[#112240] p-4 rounded-md shadow-md"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center mt-4 mb-8">
          <div className="w-1/2 -mr-20 xs:-mr-36 sm:-mr-44">
            <Image
              src={DreamLeague1}
              alt="Kitchen Display System"
              className=" brightness-50 rounded-3xl"
            />
          </div>
          <div className="w-1/2 z-20 scale-110">
            <Image
              src={DreamLeague2}
              alt="Kitchen Display System"
              className="rounded-3xl"
            />{" "}
          </div>
          {/* <Image
            src={Livescore}
            alt="Kitchen Display System"
            className="w-1/2 -ml-20 xs:-ml-36 sm:-ml-44 brightness-50 rounded-3xl"
          /> */}
        </div>
        <h4 className="text-lg text-left text-slate-200 font-semibold">
          Senior Fullstack Developer - Myanmar Media Linkage
        </h4>
        <p className="text-slate-400 text-base">
          Deliver high-quality, robust production code for a diverse array of
          projects for clients including SEA Games Equestrian 2013 in Myanmar,
          Shwedagon Pagoda Website is one of the donation of CE Technology among
          others. Actively particpated in drawing web design and software.
          Shwedagon Pagoda Website is one of the projects that I particpated in.
        </p>
      </motion.div>
      <div className="h-8 border-l-4 border-dotted self-center"></div>
    </div>
  );
};

const LargeScreen = () => {
  const [FlowDirection, setFlowDirection] = useState(true);
  const [CenterId, setCenterId] = useState(0);
  //   const [LeftId, setLeftId] = useState(Data.length - 1);
  const [LeftId, setLeftId] = useState(2);
  const [RightId, setRightId] = useState(1);
  const variants = {
    center: {
      x: "0rem",
      opacity: 1,
      scale: 1.1,
      zIndex: "5",
      filter: "brightness(100%)",
      //   backgroundImage: "url(" + Data[CenterId] + ")",
      backgroundImage: "url(/career/football-master/dl2.png)",

      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: "-6rem",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      //   backgroundImage:
      // "url('https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80')",
      //   backgroundImage: `${Livescore}`,
      backgroundImage: "url(/career/football-master/dl1.png)",
      zIndex: "4",
      boxShadow: "unset",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      //   backgroundImage: "url(" + Data[RightId] + ")",
      backgroundImage: "url(/career/football-master/livescore.png)",
      x: "6rem",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      boxShadow: "unset",
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightHidden: {
      x: "8rem",
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: "-8rem",
      scale: 0,
      opacity: 0,
    },
  };
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-xl text-center mb-2">2022</h3>
      <div className="flex justify-center space-x-6">
        <motion.div
          className="flex space-x-2 w-1/2 max-w-lg justify-center border"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="min-w-0 border"></div>
          <div className="h-3 min-w-[0.75rem] rounded-full bg-pink-600 mt-8"></div>
        </motion.div>

        <div className="h-auto border-l-6 border-dotted border-sky-500"></div>

        <motion.div
          className="flex space-x-3 w-1/2 max-w-lg self-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="h-3 min-w-[0.75rem] rounded-full bg-pink-600 mt-8"></div>
          <div className="bg-[#112240] p-4 rounded-md shadow-md ">
            <h4 className="text-lg text-left text-slate-200 font-semibold mb-6">
              Senior Fullstack Developer - Myanmar Media Linkage
            </h4>
            <p className="text-slate-400 text-base">
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including SEA Games Equestrian 2013 in
              Myanmar, Shwedagon Pagoda Website is one of the donation of CE
              Technology among others. Actively particpated in drawing web
              design and software. Kitchen Display System is one of the projects
              that I particpated in.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
