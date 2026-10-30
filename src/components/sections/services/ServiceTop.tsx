"use client";

import { HorizontalLine, Typography } from "@/components/common";
import { motion } from "motion/react";

const ServiceTop = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="flex flex-col gap-2.25 items-center"
    >
      <div className="flex gap-1.25 items-center">
        <HorizontalLine />
        <Typography variant="p" className="font-semibold">
          My Services
        </Typography>
      </div>
      <Typography variant="h2" className="font-bold text-center">
        What I Can Do for my Clients
      </Typography>
    </motion.div>
  );
};

export default ServiceTop;