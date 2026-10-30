"use client";

import { Typography } from "@/components/common";
import Image from "next/image";
import { motion, type Variants } from "motion/react";

type servicesType = {
  title: string;
  desc: string;
  icon: string;
};

const ServiceBottom = () => {
  const services: servicesType[] = [
    {
      title: "Website & Mobile App Design",
      desc: "Clean, modern and responsive interfaces for web and mobile platforms.",
      icon: "/assets/services/tablet.svg",
    },
    {
      title: "UI/UX Design",
      desc: "User-centered designs that improve usability and drive engagement.",
      icon: "/assets/services/pencil.svg",
    },
    {
      title: "Animations",
      desc: "Smooth and purposeful interactions that bring products to life.",
      icon: "/assets/services/dashboard.svg",
    },
    {
      title: "UX Research",
      desc: "Understanding users, validating ideas and solving real problems.",
      icon: "/assets/services/closing_tag.svg",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4"
    >
      {services.map((service: servicesType) => (
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -8,
            boxShadow: "0 16px 32px -8px rgba(0, 0, 0, 0.08)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="flex min-h-62.75 min-w-0 w-full flex-col gap-2.5 rounded-[5px] bg-[#FAF9FA] hover:border hover:border-primary/30 pb-10 pl-8 pr-2.25 pt-2.25"
          key={service.title}
        >
          <motion.div
            whileHover={{ scale: 1.12, rotate: 6 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="flex justify-center items-center h-12.5 w-12.5 bg-icon-bg-primary rounded-[5px] shrink-0"
          >
            <Image
              src={service.icon}
              alt={`${service.title.toLowerCase().replace(" ", "-")}_sbicon`}
              width="24"
              height="24"
              priority
            />
          </motion.div>
          <Typography variant="h2">{service.title}</Typography>
          <Typography variant="p">{service.desc}</Typography>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceBottom;
