import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";
import DreamLeague1 from "../../../../public/career/football-master/fm0.png";
import DreamLeague2 from "../../../../public/career/football-master/fm1.png";
import Livescore from "../../../../public/career/football-master/fm2.png";

export default function FootballMasterProject() {
  // const Data = [
  //     ''
  // ]
  const isSmallScreen = useMediaQuery("(max-width: 896px)");

  return isSmallScreen ? <SmallScreen /> : <LargeScreen />;
}

const SmallScreen = () => {
  const [isCenter, setCenter] = useState("center");

  // useEffect(() => {
  //   const id = setInterval(
  //     () =>
  //       setCenter((prevState) =>
  //         prevState == "center"
  //           ? "left"
  //           : prevState == "left"
  //           ? "right"
  //           : "center"
  //       ),
  //     5000
  //   );

  //   return () => {
  //     clearInterval(id);
  //   };
  // }, []);
  const variants = {
    center: {
      x: 0,
      scale: 1.3,
      zIndex: "5",
      filter: "brightness(100%)",
      // boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    centerleft: {
      x: "-100%",
      scale: 1.1,
      zIndex: "3",
      filter: "brightness(40%)",
      // boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    centerright: {
      x: "100%",
      scale: 1.1,
      zIndex: "3",
      filter: "brightness(40%)",
      // boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: "8%",
      filter: "brightness(40%)",
      scale: 1.1,
      zIndex: "4",
      // boxShadow: "unset",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    leftcenter: {
      x: "100%",
      scale: 1.3,
      zIndex: "5",
      filter: "brightness(100%)",
      // boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    leftright: {
      x: "200%",
      filter: "brightness(40%)",
      scale: 1.1,
      // boxShadow: "unset",
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      x: "-8%",
      filter: "brightness(40%)",
      scale: 1.1,
      // boxShadow: "unset",
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightcenter: {
      x: "-100%",
      scale: 1.3,
      zIndex: "5",
      filter: "brightness(100%)",
      // boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightleft: {
      x: "-200%",
      filter: "brightness(40%)",
      scale: 1.1,
      // boxShadow: "unset",
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
      <div className="h-8 border-l-6 border-dotted self-center border-sky-500"></div>
      <motion.div
        className="bg-[#112240] p-4 rounded-md shadow-md"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div
          className="flex items-center justify-center mt-8 mb-12 sm:mt-12 sm:my-16"
          onClick={() =>
            setCenter((prevState) =>
              prevState == "center"
                ? "left"
                : prevState == "left"
                ? "right"
                : "center"
            )
          }
        >
          <motion.div
            initial="left"
            animate={
              isCenter == "left"
                ? "leftright"
                : isCenter == "right"
                ? "leftcenter"
                : "left"
            }
            variants={variants}
            className="w-full sm:w-1/2"
          >
            <Image
              src={DreamLeague1}
              alt="Kitchen Display System"
              className="rounded-xl sm:rounded-2xl"
            />
          </motion.div>
          <motion.div
            initial="center"
            animate={
              isCenter == "left"
                ? "centerleft"
                : isCenter == "right"
                ? "centerright"
                : "center"
            }
            variants={variants}
            className="w-full sm:w-1/2"
          >
            <Image
              src={DreamLeague2}
              alt="Kitchen Display System"
              className="rounded-xl sm:rounded-2xl"
            />
          </motion.div>
          <motion.div
            initial="right"
            animate={
              isCenter == "left"
                ? "rightcenter"
                : isCenter == "right"
                ? "rightleft"
                : "right"
            }
            variants={variants}
            className="w-full sm:w-1/2"
          >
            <Image
              src={Livescore}
              alt="Kitchen Display System"
              className="rounded-xl sm:rounded-2xl"
            />
          </motion.div>
        </div>
        <h4 className="text-xl text-left text-slate-200 font-semibold mb-2">
          Senior Fullstack Developer - MML
        </h4>
        <p className="text-slate-400 text-lg">
          Deliver high-quality, robust production code for a diverse array of
          projects for clients including SEA Games Equestrian 2013 in Myanmar,
          Shwedagon Pagoda Website is one of the donation of CE Technology among
          others. Actively particpated in drawing web design and software.
          Shwedagon Pagoda Website is one of the projects that I particpated in.
        </p>
      </motion.div>
      <div className="h-8 border-l-6 border-dotted self-center border-sky-500"></div>
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
