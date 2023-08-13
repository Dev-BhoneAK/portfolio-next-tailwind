import Image from "next/image";
import ToolsTag from "./ToolsTag";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import InfotainmentProject from "../../../public/portfolio/infotainment.png";
import Web6 from "../../../public/portfolio/web6.png";

export default function PortfolioCard({
  title,
  image,
  description,
  tagNames,
  widthFlag,
}) {
  const isSmallScreen = useMediaQuery("(max-width: 896px)");
  const animation = {
    hidden: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 2 },
  };
  const textVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const brightnessVariants = {
    hidden: {
      filter: "brightness(100%)",
    },
    visible: {
      filter: "brightness(40%)",
    },
  };

  const displayVariants = {
    hidden: {
      display: "none",
    },
    visible: {
      display: "block",
    },
  };
  const attributes = isSmallScreen
    ? {
        whileInView: "visible",
      }
    : { whileHover: "visible" };

  const transitions = {
    transition: {
      duration: 0.5,
    },
  };

  return (
    <motion.div
      className={`relative ${widthFlag ? "w-full md:w-1/3" : "w-full h-96"}`}
      initial="hidden"
      {...attributes}
      animate="hidden"
    >
      <motion.div
        variants={brightnessVariants}
        {...transitions}
        className="h-full"
      >
        <Image
          alt={title}
          src={image}
          className="rounded-3xl w-full h-full"
          priority={widthFlag && true}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 custom-gradient rounded-3xl"
        variants={displayVariants}
        {...transitions}
      ></motion.div>

      <motion.div
        className="absolute top-6 left-6  text-2xl text-white cursor-pointer md:top-8 md:left-8 "
        variants={iconVariants}
        {...transitions}
        viewport={{ once: true }}
      >
        <FiExternalLink />
      </motion.div>
      <motion.div
        className="absolute top-6 right-6  text-2xl text-white cursor-pointer md:top-8 md:right-8"
        variants={iconVariants}
        {...transitions}
        viewport={{ once: true }}
      >
        <FiGithub />
      </motion.div>
      <motion.div
        className="absolute bottom-6 left-6 text-white text-left md:bottom-10 md:left-8"
        viewport={{ once: true }}
        variants={textVariants}
        {...transitions}
      >
        <h3 className="mb-1 text-2xl">{title}</h3>
        <p className="text-lg text-slate-400 mb-4 leading-tight">
          {description}
        </p>
        <p>
          {tagNames.map((tagName) => (
            <ToolsTag key={tagName} tagName={tagName} />
          ))}
        </p>
      </motion.div>
    </motion.div>
  );
}
