"use client";

import { Typography } from "@/components/common";
import Image from "next/image";
import { motion } from "motion/react";

type skillItemType = {
  name: string;
  icon: string;
};

type skillCardType = {
  title: string;
  icon: string;
  items: skillItemType[];
};

const SkillsRight = () => {
  const skills: skillCardType[] = [
    {
      title: "Design Skills",
      icon: "/assets/skills/design-skills-icon.svg",
      items: [
        { name: "UX Research", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "Wireframing", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "UI Design", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "Prototyping", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "Design Systems", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "Usability Testing", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "Responsive Design", icon: "/assets/skills/check-mark-icon.svg" },
      ],
    },
    {
      title: "Tools",
      icon: "/assets/skills/tools-icon.svg",
      items: [
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        },
        { name: "Figjam", icon: "/assets/portfolio/figjam.svg" },
        { name: "HTML", icon: "/assets/skills/html-icon.svg" },
        { name: "CSS", icon: "/assets/skills/css.svg" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex w-full max-w-173 gap-4 lg:gap-7 max-sm:flex-col"
    >
      {skills.map((card) => {
        const isTools = card.title === "Tools";

        return (
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -6,
              boxShadow: "0 16px 30px -8px rgba(0, 0, 0, 0.08)",
            }}
            transition={{ type: "spring", stiffness: 350, damping: 24 }}
            key={card.title}
            className="flex min-h-93.5 w-full sm:max-w-83.75 flex-col rounded-[5px] bg-tertiary px-8 py-7.5  border border-transparent hover:border-primary/20 transition-colors duration-300"
          >
            <div className="flex items-end gap-3.75">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -4 }}
                className="flex h-9.75 w-9.75 shrink-0 items-center justify-center rounded-[5px] bg-icon-bg-primary"
              >
                <Image
                  src={card.icon}
                  alt={`${card.title.toLowerCase().replaceAll(" ", "-")}_icon`}
                  width={24}
                  height={24}
                  priority
                />
              </motion.div>
              <div className="flex flex-col relative">
                <Typography variant="h2">{card.title}</Typography>
                {!isTools && <div className="absolute -bottom-2 h-1 w-full bg-quaternary" />}
              </div>
            </div>
            <div
              className={`mt-6 flex flex-1 flex-col ${
                isTools ? "justify-between" : "gap-3"
              }`}
            >
              {card.items.map((item) => (
                <motion.div
                  whileHover={{ x: 4 }}
                  key={item.name}
                  className="flex items-center gap-2.5"
                >
                  <motion.div
                    whileHover={isTools ? { scale: 1.18, rotate: 4 } : { scale: 1.2 }}
                    className="shrink-0 flex items-center justify-center"
                  >
                    <Image
                      src={item.icon}
                      alt={`${item.name.toLowerCase().replaceAll(" ", "-")}_icon`}
                      width={isTools ? 40 : 16}
                      height={isTools ? 40 : 16}
                      className="shrink-0"
                    />
                  </motion.div>
                  <Typography variant="span" as="span">
                    {item.name}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SkillsRight;
