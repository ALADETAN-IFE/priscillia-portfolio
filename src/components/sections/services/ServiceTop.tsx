import { HorizontalLine, Typography } from "@/components/common";

const ServiceTop = () => {
  return (
    <div className="flex flex-col gap-2.25 items-center">
      <div className="flex gap-1.25 items-center">
        <HorizontalLine/>
        <Typography variant="p" className="font-semibold">
          My Services
        </Typography>
      </div>
        <Typography variant="h2" className="font-bold text-center">
          What I Can Do for my Clients 
        </Typography>
    </div>
  )
}

export default ServiceTop