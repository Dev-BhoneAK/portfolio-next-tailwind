import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";
import DreamLeague1 from "../../../../public/career/football-master/fm0.png";
import DreamLeague2 from "../../../../public/career/football-master/fm1.png";
import Livescore from "../../../../public/career/football-master/fm2.png";

export default function FootballMasterProject() {
  const isSmallScreen = useMediaQuery("(max-width: 896px)");

  return isSmallScreen ? <SmallScreen /> : <LargeScreen />;
}

const SmallScreen = () => {
  const [isCenter, setCenter] = useState("center");
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      !isHover &&
        setCenter((prevState) =>
          prevState == "center"
            ? "left"
            : prevState == "left"
            ? "right"
            : "center"
        );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [isHover]);

  const variants = {
    center: {
      x: 0,
      scale: 1.3,
      zIndex: "5",
      filter: "brightness(100%)",
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
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    leftright: {
      x: "200%",
      filter: "brightness(40%)",
      scale: 1.1,
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
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightleft: {
      x: "-200%",
      filter: "brightness(40%)",
      scale: 1.1,
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
      <h3 className="text-2xl text-center mb-2">2022</h3>
      <div className="h-3 w-3 rounded-full bg-pink-00 self-center mb-1"></div><div className="h-8 border-l-6 border-dotted self-center border-sky-700"></div>
      <motion.div
        className="bg-[#112240] p-4 rounded-md shadow-md self-center max-w-xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        when="beforeChildren"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        onTouchStart={() => setHover(true)}
        onTouchEnd={() => setHover(false)}
      >
        <div className="flex items-center justify-center mt-8 mb-14 xs:mt-16 xs:mb-20">
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
              alt="Dream League - Before Choosing Players"
              loading="lazy"
              placeholder="blur"
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
              alt="Dream League - After Choosing Players"
              loading="lazy"
              placeholder="blur"
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
              alt="Livescore Screen"
              loading="lazy"
              placeholder="blur"
              className="rounded-xl sm:rounded-2xl"
            />
          </motion.div>
        </div>
        <h4 className="text-slate-200 dark:text-sky-400 text-lg text-left font-semibold mb-2">
          Senior Fullstack Developer - MML
        </h4>
        <p className="text-slate-400 text-base">
        Promoted from Full-stack Developer to Senior Team Lead, I led a team of developers across various products. I collaborated with a cloud engineer to migrate projects from a local data center to AWS, reducing monthly cost of the company. I communicated daily with engineers, designers, clients, and stakeholders. Additionally, I architected, designed, tested, and documented the admin dashboard and REST APIs for the nation’s first-ever Fantasy Football App using Node.js
        </p>
      </motion.div>
      <div className="h-8 border-l-6 border-dotted self-center border-sky-700"></div>
    </div>
  );
};

const LargeScreen = () => {
  const [isCenter, setCenter] = useState("center");
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      !isHover &&
        setCenter((prevState) =>
          prevState == "center"
            ? "left"
            : prevState == "left"
            ? "right"
            : "center"
        );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [isHover]);
  const variants = {
    center: {
      x: 0,
      scale: 1.3,
      zIndex: "5",
      filter: "brightness(100%)",
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
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: "2%",
      filter: "brightness(40%)",
      scale: 1.1,
      zIndex: "4",
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
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    leftright: {
      x: "200%",
      filter: "brightness(40%)",
      scale: 1.1,
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      x: "-2%",
      filter: "brightness(40%)",
      scale: 1.1,
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
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightleft: {
      x: "-200%",
      filter: "brightness(40%)",
      scale: 1.1,
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl text-center mb-2">2022</h3>
      <div className="flex justify-center space-x-6">
        <motion.div
          className="flex md:space-x-2 lg:space-x-4 w-1/2 max-w-xl justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          when="beforeChildren"
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="flex items-center justify-center min-w-0">
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
              className="md:w-1/2 lg:w-full"
            >
              <Image
                src={DreamLeague1}
                alt="Dream League - Before Choosing Players"
                loading="lazy"
                placeholder="blur"
                className="rounded-2xl"
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
              className="md:w-1/2 lg:w-full"
            >
              <Image
                src={DreamLeague2}
                alt="Dream League - After Choosing Players"
                loading="lazy"
                placeholder="blur"
                className="rounded-2xl"
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
              className="md:w-1/2 lg:w-full"
            >
              <Image
                src={Livescore}
                alt="Livescore Screen"
                loading="lazy"
                placeholder="blur"
                className="rounded-2xl"
              />
            </motion.div>
          </div>
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
              Senior Fullstack Developer - Myanmar Media Linkage
            </h4>
            </div>
            <p className="text-slate-400 text-base">
            Promoted from Full-stack Developer to Senior Team Lead, I led a team of developers across various products. I collaborated with a cloud engineer to migrate projects from a local data center to AWS, reducing monthly cost of the company. I communicated daily with engineers, designers, clients, and stakeholders. Additionally, I architected, designed, tested, and documented the admin dashboard and REST APIs for the nation’s first-ever Fantasy Football App using Node.js
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
