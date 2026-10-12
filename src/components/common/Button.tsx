import { MoveRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  rounded?: boolean;
  value: string;
  icon?: boolean;
  className?: string;
};

const Button = ({
  rounded = true,
  value,
  icon = true,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`h-11 px-2.5 text-white bg-(--primary) hover:bg-(--primary)/70 flex items-center justify-center gap-1.5 ${rounded ? "rounded-[100px]" : "rounded-[10px]"} transition-all ease-in duration-650 font-semibold text-base cursor-pointer ${className}`}
      {...props}
    >
      {value} {icon && <MoveRight />}
    </button>
  );
};

export default Button;
