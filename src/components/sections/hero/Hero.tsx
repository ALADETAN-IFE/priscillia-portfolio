import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import HeroBottom from "./HeroBottom";

const Hero = () => {
  return (
    <>
      <div className="flex max-[700px]:flex-col  max-sm:gap-4 justify-between mb-1.5">
        <HeroLeft />
        <HeroRight />
      </div>
      <HeroBottom />
    </>
  );
};

export default Hero;
