import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function CareerImage({ data: { imageSrc, imageAlt } }) {
  return (
    <motion.div
      className="flex space-x-2 w-1/2 max-w-xl"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <div className="h-3 min-w-[0.75rem] rounded-full bg-pink-600 mt-8"></div>{" "}
      <Image
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        // placeholder="blur"
        className="min-w-0"
      />
    </motion.div>
  );
}

export default CareerImage;
