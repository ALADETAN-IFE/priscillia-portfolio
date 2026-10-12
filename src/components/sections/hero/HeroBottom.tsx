import { Typography } from "@/components/common";
import Image from "next/image";

type mainSkillsType = {
  icon: string;
  value: string;
};

const HeroBottom = () => {
  const mainSkills: mainSkillsType[] = [
    {
      icon: "/assets/hero/laptop.svg",
      value: "Web Design",
    },
    {
      icon: "/assets/hero/phone.svg",
      value: "Mobile Design",
    },
    {
      icon: "/assets/hero/cpu.svg",
      value: "UI Design",
    },
    {
      icon: "/assets/hero/person.svg",
      value: "UX Design",
    },
  ];
  return (
    <div className="w-full bg-(--tertiary) absolute bottom-0 left-0 min-h-21.75 sm:h-21.75 flex justify-center">
      <div className="max-w-306 w-9/10 flex py-5.75 h-full justify-between items-center max-sm:grid max-sm:grid-cols-2 gap-3">
        {mainSkills.map((skills: mainSkillsType) => (
          <div
            className="flex items-center py-2.5 px-3.75 gap-2 rounded-[100px] bg-[#FDFDFD]"
            key={skills.value}
          >
            <Image
              src={skills.icon}
              alt="Hero Background"
              width="30"
              height="30"
            />
            <Typography className="text-[15px]">{skills.value}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBottom;
