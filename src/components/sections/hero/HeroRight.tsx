import Image from "next/image";

const HeroRight = () => {
  return (
    <div className="relative w-full sm:max-w-153.25">
      <Image
        src="/assets/hero/hero_bg.jpg"
        alt="Hero Background"
        width="450"
        height="696"
        className="max-sm:h-122 max-sm:w-full"
      />
      <Image
        src="/assets/hero/hero_img.webp"
        alt="Priscilla_Ijomah_image"
        width="613"
        height="696"
        priority
        className="absolute top-0 md:-top-17 xl:-top-20 left-0"
      />
    </div>
  );
};

export default HeroRight;
