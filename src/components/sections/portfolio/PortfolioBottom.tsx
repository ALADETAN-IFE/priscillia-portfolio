"use client";

import { Typography } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

type toolsUsedType = {
  name: string;
  icon: string;
};

type projectType = {
  link: {
    name: string;
    value: string;
  };
  title: string;
  desc: string;
  image: string;
  toolsUsed?: toolsUsedType[];
};

// https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg
const PortfolioBottom = () => {
  const projects: projectType[] = [
    {
      link: {
        name: "Tourism Web",
        value: "#",
      },
      title: "Voy Vista",
      desc: "Voy Vista is a digital website that helps user discover hidden places, cultural sites, adventurous destinations and unique travel experiences  and historical places across Nigeria.",
      image: "/assets/portfolio/Voy-Vista-bg.svg",
    },
    {
      link: {
        name: "Pregnancy Tracker / Mobile App",
        value: "#",
      },
      title: "Blossom Births",
      desc: "Blossom Births is a solution designed  to assist pregnant parents at every stage of pregnancy. The app aims to provide reliable information like Tracking Tools, Educational Resources, and Community Support.",
      image: "/assets/portfolio/Blossom-Births-bg.svg",
    },
    {
      link: {
        name: "Logistics Website",
        value: "#",
      },
      title: "Elisha Global Logistics",
      desc: "Elisha Global logistics is web application design with solutions to assists users to send / receive and manage the movement of their documents, raw food items and more.",
      image: "/assets/portfolio/Elisha-Global-Logistics-bg.svg",
    },
    {
      link: {
        name: "Real Estate Agency / Web & Mobile App",
        value: "#",
      },
      title: "HOMEHUB",
      desc: "Home hub is a platform that focuses on expanding a vast audience and customer base via social media, while concurrently crafting an intuitive platform for real estate agencies to showcase their properties for rent or sale. By leveraging social media dynamics, we aim to amplify exposure and engagement, connecting sellers and landlords with potential buyers and tenants.",
      image: "/assets/portfolio/Homehub-bg.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-6.75 w-full">
      {projects.map((project: projectType, index: number) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.65,
            delay: index * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98] as const,
          }}
          className="flex bg-project-bg rounded-[5px] max-sm:px-2.5 justify-center items-center w-full py-7 border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div
            className={`flex h-full w-94/100 gap-12.5 max-md:items-center ${
              index % 2 === 1
                ? "flex-col-reverse md:flex-row-reverse justify-between"
                : "flex-col md:flex-row justify-start"
            }`}
          >
            <div className="overflow-hidden rounded-xl md:w-1/2 w-full flex items-center justify-center bg-gray-100 shadow-sm">
              <Image
                src={project.image}
                alt={`${project.title.toLowerCase().replaceAll(" ", "-")}_icon`}
                width={556}
                height={384}
                className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-6.25 md:max-w-104">
              <div className="flex flex-col gap-3.25">
                <div className="flex flex-col gap-1">
                  <Link href={project.link.value}>
                    <Typography
                      variant="span"
                      className="font-semibold text-primary hover:underline"
                    >
                      {project.link.name}
                    </Typography>
                  </Link>
                  <Typography variant="h2" as="h2">
                    {project.title}
                  </Typography>
                </div>
                <Typography variant="span" as="span">
                  {project.desc}
                </Typography>
              </div>
              <div className="flex flex-col gap-2.5">
                <Typography variant="span" as="span" className="font-semibold leading-[150%]">
                  Tools used
                </Typography>
                {project?.toolsUsed === undefined ? (
                  <div className="w-full flex gap-8.75">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex gap-1.75 items-center justify-center"
                    >
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                        alt="figma_icon"
                        width={40}
                        height={40}
                        className="max-w-full h-auto"
                      />
                      Figma
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex gap-1.75 items-center justify-center"
                    >
                      <Image
                        src="/assets/portfolio/figjam.svg"
                        alt="figjam_icon"
                        width={40}
                        height={40}
                        className="max-w-full h-auto"
                      />
                      Figjam
                    </motion.div>
                  </div>
                ) : (
                  <Typography variant="h2" as="h2">
                    {project.title}b
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioBottom;
