import { MoveRight } from "lucide-react";

type ButtonProps = {
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
}: ButtonProps) => {
  return (
    <button
      className={`h-11 px-2.5 text-white bg-(--primary) hover:bg-(--primary)/70 flex items-center justify-center gap-1.5 ${rounded ? "rounded-[100px]" : "rounded-[10px]"} transition-all ease-in duration-650 font-semibold text-base cursor-pointer ${className}`}
    >
      {value} {icon && <MoveRight />}
    </button>
  );
};

export default Button;
