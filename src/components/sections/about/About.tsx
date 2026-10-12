import AboutLeft from "./AboutLeft"
import AboutRight from "./AboutRight"

const About = () => {
  return (
    <div className="flex max-sm:flex-col gap-13 sm:gap-15 lg:gap-47.5">
        <AboutLeft/>
        <AboutRight/>
    </div>
  )
}

export default About