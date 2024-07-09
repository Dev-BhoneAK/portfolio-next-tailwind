import ActionButton from "../common/ActionButton";
import { motion, AnimatePresence } from "framer-motion";
import { Spectral } from "next/font/google";

const spectral = Spectral({ weight: "300", subsets: ["latin"] });

export default function HeroSection() {
  const heroVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 2,
        delay: 1,
      },
    },
  };
  return (
    <section className="flex items-center justify-center my-auto">
      <div className="text-center space-y-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="space-y-8"
        >
          <p className="text-base md:text-lg tracking-widest">HELLO</p>
          <div>
            <h1 className="text-4xl mb-1">
              I&apos;m Bhone Aung Kyaw,{" "}
              <span className={`text-pink-600 ${spectral.className}`}>
                Full-stack Developer
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl opacity-50">
              From Yangon, Myanmar
            </h2>
          </div>
          <p className="text-base md:text-xl uppercase tracking-tighter md:tracking-wider">
            I craft web stuff using React and Node
          </p>
        </motion.div>
        <ActionButton />
      </div>
    </section>
  );
}
