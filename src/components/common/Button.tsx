"use client";

import { MoveRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import { motion, type HTMLMotionProps } from "motion/react";

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart"
>;

export type ButtonProps = NativeButtonProps & {
  rounded?: boolean;
  value: string;
  icon?: boolean;
  className?: string;
};

const Button = ({
  rounded = true,
  value,
  icon = true,
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`h-11 px-2.5 text-white bg-primary hover:bg-primary/70 flex items-center justify-center gap-1.5 ${
        rounded ? "rounded-[100px]" : "rounded-[10px]"
      } transition-all ease-in duration-650 font-semibold text-base cursor-pointer ${className}`}
      {...(props as HTMLMotionProps<"button">)}
    >
      {value} {icon && <MoveRight />}
    </motion.button>
  );
};

export default Button;
