"use client";

import { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "motion/react";

export type FadeDirection = "up" | "down" | "left" | "right" | "none";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  fullWidth?: boolean;
  viewportAmount?: number | "some" | "all";
  once?: boolean;
  className?: string;
}

export const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 28,
  fullWidth = false,
  viewportAmount = 0.2,
  once = true,
  className = "",
  ...props
}: FadeInProps) => {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount: viewportAmount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
