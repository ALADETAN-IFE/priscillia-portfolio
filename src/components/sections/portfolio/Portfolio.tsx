import PortfolioBottom from "./PortfolioBottom"
import PortfolioTop from "./PortfolioTop"

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-10.25">
      <PortfolioTop />
      <PortfolioBottom />
    </div>
  )
}

export default Portfolio