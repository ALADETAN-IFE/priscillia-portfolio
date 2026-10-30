"use client";

import { ReactNode } from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";

export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  viewportAmount?: number | "some" | "all";
  once?: boolean;
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = { staggerChildren: 0.1, delayChildren: 0 }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerChildren,
      delayChildren: custom.delayChildren,
    },
  }),
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

export const StaggerContainer = ({
  children,
  staggerChildren = 0.12,
  delayChildren = 0,
  className = "",
  viewportAmount = 0.15,
  once = true,
  ...props
}: StaggerContainerProps) => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      custom={{ staggerChildren, delayChildren }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = "",
  variants = staggerItemVariants,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode; className?: string }) => {
  return (
    <motion.div variants={variants} className={className} {...props}>
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
