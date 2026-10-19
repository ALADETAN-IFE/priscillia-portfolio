import Image from "next/image";

const HeroRight = () => {
  return (
    <div className="relative w-full max-[376px]:h-105 max-[426px]:h-115 h-122 md:h-full sm:max-w-153.25 flex justify-end lg:mb-10">
      <Image
        src="/assets/hero/hero_bg.jpg"
        alt="Hero Background"
        width={490}
        height={696}
        className="absolute top-0 md:-top-9 xl:-top-16 w-full"
      />
      <Image
        src="/assets/hero/hero_img2.webp"
        alt="Priscilla_Ijomah_image"
        width={522}
        height={697}
        priority
        className="absolute top-0 md:-top-11 xl:-top-17"
      />
    </div>
  );
};

export default HeroRight;
