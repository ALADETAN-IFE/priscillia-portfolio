import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import HeroBottom from "./HeroBottom";

const Hero = () => {
  return (
    <>
      <div className="flex max-sm:flex-col justify-between">
        <HeroLeft />
        <HeroRight />
      </div>
      <HeroBottom />
    </>
  );
};

export default Hero;
