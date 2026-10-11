import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Sections from "@/components/Sections";

export default function Home() {
  return (
    <div className="flex flex-col pt-32 relative">
      <Header />
      <main>
        <Sections id="home">
          <div className="pt-22.25">hero</div>
        </Sections>
        <Sections id="about">
          <div className="pt-15.25 pb-11.25">about</div>
        </Sections>
        <Sections id="services">
          <div className="py-12.5">services</div>
        </Sections>
        <Sections>
          <div className="py-11">design</div>
        </Sections>
        <Sections>
          <div className="py-12.5">skills</div>
        </Sections>
        <Sections id="portfolio">
          <div className="pt-16 pb-11.25">portfolio</div>
        </Sections>
      </main>
      <Footer />
    </div>
  );
}
