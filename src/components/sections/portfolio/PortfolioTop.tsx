import { HorizontalLine, Typography } from "@/components/common";

const PortfolioTop = () => {
  return (
    <div className="flex flex-col gap-2.25">
      <div className="flex gap-1.25 items-center">
        <HorizontalLine />
        <Typography variant="p" className="font-semibold">
          My Portfolio
        </Typography>
      </div>
      <Typography variant="h2">Selected Project</Typography>
    </div>
  );
};

export default PortfolioTop;
