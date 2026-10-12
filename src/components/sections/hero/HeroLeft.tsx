import { Typography } from "@/components/common";

const HeroLeft = () => {
  return (
    <div className="flex flex-col gap-11">
      <div className="flex flex-col gap-6">
        <Typography className="text-black" variant="h1">
          Hi, I am
          <Typography className="" variant="h1" as="span">
            &nbsp;Priscilla Ijomah.
          </Typography>
        </Typography>
        <Typography className="text-6xl! lg:text-8xl! xl:text-9xl! font-semibold tracking-0 leading-15 lg:leading-24 xl:leading-32 pt-0.5">
          Product
          <br />
          Designer
        </Typography>
        <Typography className="max-lg:text-xl font-normal! max-w-131.25" variant="h2">
          I create simple, useful and engaging digital experiences that solve
          real problems and make life easier for people.
        </Typography>
      </div>
      <div className="flex flex-col">
        <Typography className="text-2xl! lg:text-[32px] font-bold!">3</Typography>
        <Typography className="text-2xl! lg:text-[32px]" variant="span">
          Years of experience
        </Typography>
      </div>
    </div>
  );
};

export default HeroLeft;
