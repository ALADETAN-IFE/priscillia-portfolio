"use client";

import { Button, HorizontalLine, Typography } from "@/components/common";
import { motion, type Variants } from "motion/react";

const SkillsLeft = () => {
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

  const handleOpenResume = () => {
    window.open("/docs/Priscilla-Ijomah-Resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-7.5"
    >
      <div className="flex flex-col gap-2.5 w-full sm:max-w-97">
        <motion.div variants={itemVariants} className="flex gap-1.25 items-center">
          <HorizontalLine />
          <Typography variant="p" className="font-semibold">
            My Skills & Tools
          </Typography>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography variant="h2">Tools I use</Typography>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography variant="span" as="span">
            I combine design thinking with the right tools to create seamless and
            impactful experiences.
          </Typography>
        </motion.div>
      </div>
      <motion.div variants={itemVariants}>
        <Button
          value="View my resume"
          className="w-fit"
          onClick={handleOpenResume}
        />
      </motion.div>
    </motion.div>
  );
};

export default SkillsLeft;
