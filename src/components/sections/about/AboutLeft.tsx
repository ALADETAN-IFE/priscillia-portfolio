"use client";

import { Button, HorizontalLine, Typography } from "@/components/common";
import { motion, type Variants } from "motion/react";

const AboutLeft = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-9.5 max-w-103"
    >
      <motion.div variants={itemVariants} className="flex gap-1.25 items-center">
        <HorizontalLine />
        <Typography variant="p" className="text-white font-semibold">
          About Me
        </Typography>
      </motion.div>
      <div className="flex flex-col gap-7.75">
        <motion.div variants={itemVariants}>
          <Typography variant="h2" className="text-white">
            I&apos;m a Product Designer passionate about turning complex problems
            into simple, engaging digital experiences.
          </Typography>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography variant="span" className="text-tertiary pr-1">
            I work across user research, wireframing, UI design and prototyping to
            create products that is useful, accessible and easy to use. I'm always
            curious, open to learning and excited about building solutions that
            make a real impact.
          </Typography>
        </motion.div>
      </div>
      <motion.div variants={itemVariants}>
        <Button value="More about me" className="w-fit" />
      </motion.div>
    </motion.div>
  );
};

export default AboutLeft;
