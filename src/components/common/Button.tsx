import { MoveRight } from "lucide-react";

type ButtonProps = {
    rounded?: boolean;
    value: string;
    icon?: boolean;
}


const Button = ({rounded=true, value, icon=true}: ButtonProps) => {
  return (
    <button className={`h-11 p-2.5 bg-(--primary) flex items-center gap-1.5 ${rounded && "rounded-[100px]"} transition-all ease-in duration-650`}>{value} {icon && <MoveRight />}</button>
  )
}

export default Button