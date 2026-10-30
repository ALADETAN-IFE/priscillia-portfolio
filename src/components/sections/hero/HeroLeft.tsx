"use client";

import { Typography } from "@/components/common";
import { motion, type Variants } from "motion/react";

const HeroLeft = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-11"
    >
      <div className="flex flex-col gap-6">
        <motion.div variants={itemVariants}>
          <Typography className="text-black" variant="h1">
            Hi, I am
            <Typography variant="h1" as="span">
              &nbsp;Priscilla Ijomah.
            </Typography>
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography className="text-5xl! lg:text-8xl! xl:text-9xl! font-semibold tracking-0 leading-12 lg:leading-24 xl:leading-32 pt-0.5">
            Product
            <br />
            Designer
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography className="text-xl max-md:text-lg max-lg:text-xl font-normal! max-w-131.25" variant="h2">
            I create simple, useful and engaging digital experiences that solve
            real problems and make life easier for people.
          </Typography>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <div className="flex flex-col">
          <Typography className="text-2xl! lg:text-[32px] font-bold!">3</Typography>
          <Typography className="text-2xl! lg:text-[32px]" variant="span">
            Years of experience
          </Typography>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroLeft;
