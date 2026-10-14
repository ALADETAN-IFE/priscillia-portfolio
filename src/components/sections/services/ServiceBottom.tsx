import { Typography } from "@/components/common";
import Image from "next/image";

type servicesType = {
  title: string;
  desc: string;
  icon: string;
};

const ServiceBottom = () => {
  const services: servicesType[] = [
    {
      title: "Website & Mobile App Design",
      desc: "Clean, modern and responsive interfaces for web and mobile platforms.",
      icon: "/assets/services/tablet.svg",
    },
    {
      title: "UI/UX Design",
      desc: "User-centered designs that improve usability and drive engagement.",
      icon: "/assets/services/pencil.svg",
    },
    {
      title: "Animations",
      desc: "Smooth and purposeful interactions that bring products to life.",
      icon: "/assets/services/dashboard.svg",
    },
    {
      title: "UX Research",
      desc: "Understanding users, validating ideas and solving real problems.",
      icon: "/assets/services/closing_tag.svg",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
      {services.map((service: servicesType) => (
        <div
          className="flex min-h-62.75 min-w-0 w-full flex-col gap-2.5 rounded-[5px] bg-[#FAF9FA] pb-10 pl-8 pr-2.25 pt-2.25"
          key={service.title}
        >
          <div className="flex justify-center items-center h-12.5 w-12.5 bg-(--icon-bg-primary) rounded-[5px] shrink-0">
            <Image
              src={service.icon}
              alt={`${service.title.toLowerCase().replace(" ", "-")}_sbicon`}
              width="24"
              height="24"
              priority
            />
          </div>
          <Typography variant="h2">{service.title}</Typography>
          <Typography variant="p">{service.desc}</Typography>
        </div>
      ))}
    </div>
  );
};

export default ServiceBottom;
