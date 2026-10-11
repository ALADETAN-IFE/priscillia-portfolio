import { MoveRight } from "lucide-react";

type ButtonProps = {
    rounded?: boolean;
    value: string;
    icon?: boolean;
}


const Button = ({rounded=true, value, icon=true}: ButtonProps) => {
  return (
    <button className={`h-11 p-2.5 ${rounded && "r-[100px]"}`}>{value} {icon && <MoveRight />}</button>
  )
}

export default Button