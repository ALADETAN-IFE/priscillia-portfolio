import { ReactNode } from "react";

interface SectionsProps {
  children: ReactNode;
  id?: string;
}

const Sections = ({ children, id }: SectionsProps) => {
  return (
    <section id={id} className="flex not-odd:bg-(--secondary) w-full max-sm:px-5 justify-center">
      <div className="max-w-306 w-9/10 flex max-md:flex-col">{children}</div>
    </section>
  );
};

export default Sections;
