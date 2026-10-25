import { Typography } from "@/components/common";
import Image from "next/image";

type skillItemType = {
  name: string;
  icon: string;
};

type skillCardType = {
  title: string;
  icon: string;
  items: skillItemType[];
};

const SkillsRight = () => {
  const skills: skillCardType[] = [
    {
      title: "Design Skills",
      icon: "/assets/skills/design-skills-icon.svg",
      items: [
        { name: "UX Research", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "Wireframing", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "UI Design", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "Prototyping", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "Design Systems", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "Usability Testing", icon: "/assets/skills/check-mark-icon.svg" },
        { name: "Responsive Design", icon: "/assets/skills/check-mark-icon.svg" },
      ],
    },
    {
      title: "Tools",
      icon: "/assets/skills/tools-icon.svg",
      items: [
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        },
        { name: "Figjam", icon: "/assets/portfolio/figjam.svg" },
        { name: "HTML", icon: "/assets/skills/html-icon.svg" },
        { name: "CSS", icon: "/assets/skills/css.svg" },
      ],
    },
  ];

  return (
    <div className="flex w-full max-w-173 gap-4 lg:gap-7 max-sm:flex-col">
      {skills.map((card) => {
        const isTools = card.title === "Tools";

        return (
          <div
            key={card.title}
            className="flex min-h-93.5 w-full sm:max-w-83.75 flex-col rounded-[5px] bg-tertiary px-8 py-7.5"
          >
            <div className="flex items-end gap-3.75">
              <div className="flex h-9.75 w-9.75 shrink-0 items-center justify-center rounded-[5px] bg-icon-bg-primary">
                <Image
                  src={card.icon}
                  alt={`${card.title.toLowerCase().replaceAll(" ", "-")}_icon`}
                  width={24}
                  height={24}
                  priority
                />
              </div>
              <div className="flex flex-col relative">
                <Typography variant="h2">{card.title}</Typography>
                {!isTools && <div className="absolute -bottom-2 h-1 w-full bg-quaternary" />}
              </div>
            </div>
            <div
              className={`mt-6 flex flex-1 flex-col ${
                isTools ? "justify-between" : "gap-3"
              }`}
            >
              {card.items.map((item) => (
                <div key={item.name} className="flex items-center gap-2.5">
                  <Image
                    src={item.icon}
                    alt={`${item.name.toLowerCase().replaceAll(" ", "-")}_icon`}
                    width={isTools ? 40 : 16}
                    height={isTools ? 40 : 16}
                    className="shrink-0"
                  />
                  <Typography variant="span" as="span">
                    {item.name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsRight;
