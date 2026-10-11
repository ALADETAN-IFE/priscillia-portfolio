import { ReactNode } from "react";

type TypographyVariant = "h1" | "p" | "span";

type TypographyProps = {
  as?: "h1" | "p" | "span";
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<TypographyVariant, string> = {
  h1: "font-bold text-(--primary) text-3xl lg:text-4xl",
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
