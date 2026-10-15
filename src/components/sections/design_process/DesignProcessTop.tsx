import { HorizontalLine, Typography } from "@/components/common";

const DesignProcessTop = () => {
  return (
     <div className="flex flex-col gap-2.25 text-white">
      <div className="flex gap-1.25 items-center">
        <HorizontalLine/>
        <Typography variant="p" className="font-semibold">
          My Design Process
        </Typography>
      </div>
        <Typography variant="h2" >
         From Research to Impact
        </Typography>
    </div>
  )
}

export default DesignProcessTop