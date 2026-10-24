import { ReactNode } from "react";

type TypographyVariant = "h1" | "h2" | "p" | "span";

type TypographyProps = {
  as?: "h1" | "h2" | "p" | "span";
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<TypographyVariant, string> = {
  h1: "font-bold text-primary text-2xl lg:text-3xl xl:text-4xl",
  h2: "text-2xl font-semibold",
  p: "text-xl font-normal",
  span: "text-base font-normal",
};

const Typography = ({
  as,
  variant = "p",
  children,
  className = "",
}: TypographyProps) => {
  const Component = as ?? variant;
  const classes = [variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
};

export default Typography;
