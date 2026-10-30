"use client";

import { Typography } from "@/components/common";
import Image from "next/image";
import { motion, type Variants } from "motion/react";

type aboutMeSkillsType = {
  title: string;
  desc: string;
  icon: string;
};

const AboutRight = () => {
  const aboutMeSkills: aboutMeSkillsType[] = [
    {
      title: "Design Focus",
      desc: "Web & Mobile Products",
      icon: "/assets/about/design_focus.svg",
    },
    {
      title: "Approach",
      desc: "User-Centered | Research-driven | Practical | Creative",
      icon: "/assets/about/approach.svg",
    },
    {
      title: "Goal",
      desc: "To grow as a Product Designer and work on meaningful global products.",
      icon: "/assets/about/goal.svg",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.55,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-89.75 flex flex-col gap-16.25"
    >
      {aboutMeSkills.map((skills: aboutMeSkillsType) => (
        <motion.div
          variants={itemVariants}
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex gap-3.75"
          key={skills.title}
        >
          <motion.div
            whileHover={{ scale: 1.15, rotate: 6 }}
            className="flex justify-center items-center w-7.5 h-7.5 bg-icon-bg-primary rounded-full shrink-0"
          >
            <Image
              src={skills.icon}
              alt={`${skills.title.toLowerCase().replaceAll(" ", "-")}_icon`}
              width="16"
              height="16"
              priority
              className="transition-transform duration-200 group-hover:scale-110"
            />
          </motion.div>
          <div className="flex flex-col gap-1.75">
            <Typography className="font-semibold text-tertiary">
              {skills.title}
            </Typography>
            <Typography className="font-medium text-tertiary" variant="span">
              {skills.desc}
            </Typography>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutRight;
