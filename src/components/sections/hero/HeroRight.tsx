"use client";

import Image from "next/image";
import { motion } from "motion/react";

const HeroRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative w-full max-[376px]:h-105 max-[426px]:h-115 h-122 md:h-full sm:max-w-153.25 flex justify-end lg:mb-10"
    >
      <Image
        src="/assets/hero/hero_bg.jpg"
        alt="Hero Background"
        width={490}
        height={696}
        className="absolute top-0 md:-top-9 xl:-top-16 w-full"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute top-0 md:-top-11 xl:-top-17"
      >
        <Image
          src="/assets/hero/hero_img2.webp"
          alt="Priscilla_Ijomah_image"
          width={522}
          height={697}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroRight;
