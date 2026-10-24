import { Typography } from "@/components/common";
import Image from "next/image";

type aboutMeSkillsType = {
  title: string;
  desc: string;
  icon: string;
};

const AboutRight = () => {
  const aboutMeSkills: aboutMeSkillsType[] = [
    {
      title: "Design Focus",
      desc: "Web & Mobile Products",
      icon: "/assets/about/design_focus.svg",
    },
    {
      title: "Approach",
      desc: "User-Centered | Research-driven | Practical | Creative",
      icon: "/assets/about/approach.svg",
    },
    {
      title: "Goal",
      desc: "To grow as a Product Designer and work on meaningful global products.",
      icon: "/assets/about/goal.svg",
    },
  ];
  return (
    <div className="max-w-89.75 flex flex-col gap-16.25">
      {aboutMeSkills.map((skills: aboutMeSkillsType) => (
        <div className="flex gap-3.75" key={skills.title}>
          <div className="flex justify-center items-center w-7.5 h-7.5 bg-icon-bg-primary rounded-full shrink-0">
            <Image
              src={skills.icon}
              alt={`${skills.title.toLowerCase().replaceAll(" ", "-")}_icon`}
              width="16"
              height="16"
              priority
            />
          </div>
          <div className="flex flex-col gap-1.75">
            <Typography className="font-semibold text-tertiary">
              {skills.title}
            </Typography>
            <Typography className="font-medium text-tertiary" variant="span">
              {skills.desc}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutRight;
