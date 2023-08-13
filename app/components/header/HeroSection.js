import ActionButton from "../common/ActionButton";
import { motion, AnimatePresence } from "framer-motion";

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
          <h4 className="text-base md:text-lg tracking-widest">HELLO</h4>
          <div>
            <h1 className="text-4xl mb-1">
              I&apos;m Bhone Aung Kyaw,{" "}
              <span className="text-pink-600">Full-stack Developer.</span>
            </h1>
            <h1 className="text-3xl md:text-4xl opacity-50">
              From Yangon, Myanmar
            </h1>
          </div>
          <h4 className="text-lg md:text-xl uppercase tracking-normal md:tracking-wider">
            I craft web stuff using React and Node
          </h4>
        </motion.div>
        <ActionButton />
      </div>
    </section>
  );
}
