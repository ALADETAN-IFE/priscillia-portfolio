import { Button, HorizontalLine, Typography } from "@/components/common";

const AboutLeft = () => {
  return (
    <div className="flex flex-col gap-9.5 max-w-103">
      <div className="flex gap-1.25 items-center">
        <HorizontalLine />
        <Typography variant="p" className="text-white font-semibold">
          About Me
        </Typography>
      </div>
      <div className="flex flex-col gap-7.75">
        <Typography variant="h2" className="text-white">
          I&apos;m a Product Designer passionate about turning complex problems
          into simple, engaging digital experiences.
        </Typography>
        <Typography variant="span" className="text-tertiary pr-1">
          I work across user research, wireframing, UI design and prototyping to
          create products that is useful, accessible and easy to use. I’m always
          curious, open to learning and excited about building solutions that
          make a real impact.
        </Typography>
      </div>
      <Button value="More about me" className="w-fit" />
    </div>
  );
};

export default AboutLeft;
