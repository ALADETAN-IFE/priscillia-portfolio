import SkillsLeft from "./SkillsLeft";
import SkillsRight from "./SkillsRight";

const Skills = () => {
  return (
    <div className="flex w-full max-md:flex-col gap-10 lg:gap-16 xl:gap-34.75 justify-between">
      <SkillsLeft />
      <SkillsRight />
    </div>
  );
};

export default Skills;
