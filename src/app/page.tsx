import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Sections from "@/components/Sections";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { DesignProcess } from "@/components/sections/design_process";

export default function Home() {
  return (
    <div className="flex flex-col pt-32 relative">
      <Header />
      <main>
        <Sections id="home">
          <div className="pt-22.25 w-full pb-26 sm:pb-21.75 flex flex-col gap-100"><Hero /></div>
        </Sections>
        <Sections id="about">
          <div className="pt-15.25 pb-11.25 w-full"><About /></div>
        </Sections>
        <Sections id="services">
          <div className="py-12.5 w-full"><Services /></div>
        </Sections>
        <Sections>
          <div className="py-11 w-full"><DesignProcess /></div>
        </Sections>
        <Sections>
          <div className="py-12.5 w-full">skills</div>
        </Sections>
        <Sections id="portfolio">
          <div className="pt-16 pb-11.25 w-full">portfolio</div>
        </Sections>
      </main>
      <Footer />
    </div>
  );
}
