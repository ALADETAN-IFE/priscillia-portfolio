import { ReactNode } from "react";

interface SectionsProps {
  children: ReactNode;
}

const Sections = ({ children }: SectionsProps) => {
  return (
    <section className="flex not-odd:bg-(--secondary) w-full max-sm:p-5 justify-center">
      <div className="max-w-306 flex max-md:flex-col">{children}</div>
    </section>
  );
};

export default Sections;
