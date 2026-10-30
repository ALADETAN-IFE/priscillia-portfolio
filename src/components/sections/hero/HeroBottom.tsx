"use client";

import { Typography } from "@/components/common";
import Image from "next/image";
import { motion } from "motion/react";

type mainSkillsType = {
  icon: string;
  value: string;
};

const HeroBottom = () => {
  const mainSkills: mainSkillsType[] = [
    {
      icon: "/assets/hero/laptop.svg",
      value: "Web Design",
    },
    {
      icon: "/assets/hero/phone.svg",
      value: "Mobile Design",
    },
    {
      icon: "/assets/hero/cpu.svg",
      value: "UI Design",
    },
    {
      icon: "/assets/hero/person.svg",
      value: "UX Design",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.35,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <div className="w-full bg-tertiary absolute bottom-0 left-0 min-h-21.75 sm:h-21.75 flex justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-306 w-9/10 flex py-5.75 h-full justify-between items-center max-sm:grid max-sm:grid-cols-2 gap-3"
      >
        {mainSkills.map((skills: mainSkillsType) => (
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -4,
              scale: 1.04,
              boxShadow: "0 10px 20px -3px rgba(0, 0, 0, 0.08)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-center py-2.5 px-3.75 gap-2 rounded-[100px] bg-[#FDFDFD] cursor-default border border-transparent hover:border-primary/20 transition-colors"
            key={skills.value}
          >
            <Image
              src={skills.icon}
              alt={`${skills.value.toLowerCase().replace(" ", "-")}_sbicon`}
              width="30"
              height="30"
              priority
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <Typography className="text-[15px]">{skills.value}</Typography>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroBottom;
