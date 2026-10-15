import { MoveRight } from "lucide-react";
import { Typography } from "@/components/common";
import Image from "next/image";

type designProcessType = {
  title: string;
  desc: string;
  icon: string;
  hide?: boolean;
};

const DesignProcessBottom = () => {
  const designProcesses: designProcessType[] = [
    {
      title: "Discover",
      desc: "Understand users, market and goals",
      icon: "/assets/design_process/search.svg",
    },
    {
      title: "Define",
      desc: "Identify the real problem.",
      icon: "/assets/design_process/cuida_radar-outline.svg",
    },
    {
      title: "Ideate",
      desc: "Explore creative solutions..",
      icon: "/assets/design_process/bulb-filled.svg",
    },
    {
      title: "Design",
      desc: "Build and refine interfaces.",
      icon: "/assets/design_process/simple-line_pencil.svg",
    },
    {
      title: "Prototype",
      desc: "Bring ideas to life.",
      icon: "/assets/design_process/model-outline-thin.svg",
    },
    {
      title: "Test",
      desc: "Validate with real users.",
      icon: "/assets/design_process/user-group.svg",
      hide: true,
    },
  ];
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,12rem),1fr))] gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-6 lg:gap-x-10.75">
      {designProcesses.map((designProcess: designProcessType, index) => (
        <div
          className="flex min-w-0 flex-col max-sm:items-center justify-center gap-10.75 text-white sm:flex-row sm:gap-4"
          key={designProcess.title}
        >
          <div className="flex w-full min-w-0 max-w-33.25 flex-col items-center gap-1.75">
            <div className="flex justify-center items-center w-15 h-15 bg-(--icon-bg-primary) rounded-full shrink-0">
              <Image
                src={designProcess.icon}
                alt={`${designProcess.title}_icon`}
                width="24"
                height="24"
                priority
              />
            </div>
            <Typography className="font-bold!">
              {designProcess.title}
            </Typography>
            <Typography className="text-sm! text-center" as="span">
              {designProcess.desc}
            </Typography>
          </div>
          <MoveRight
            size={24}
            className={`${designProcess.hide ? "hidden" : ""} mt-0 shrink-0 rotate-90 ${
              index === designProcesses.length - 2 && "xs:-rotate-10"
            } text-(--primary) sm:mt-6 sm:rotate-0`}
          />
        </div>
      ))}
    </div>
  );
};

export default DesignProcessBottom;
