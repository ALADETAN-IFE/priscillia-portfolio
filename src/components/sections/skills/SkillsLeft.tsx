import { Button, HorizontalLine, Typography } from "@/components/common";

const SkillsLeft = () => {
  return (
    <div className="flex flex-col gap-7.5">
      <div className="flex flex-col gap-2.5 w-full sm:max-w-97">
        <div className="flex gap-1.25 items-center">
          <HorizontalLine />
          <Typography variant="p" className="font-semibold">
            My Skills & Tools
          </Typography>
        </div>
        <Typography variant="h2">Tools I use</Typography>
        <Typography variant="span" as="span">
          I combine design thinking with the right tools to create seamless and
          impactful experiences.
        </Typography>
      </div>
      <Button value="View my resume" className="w-fit" />
    </div>
  );
};

export default SkillsLeft;
