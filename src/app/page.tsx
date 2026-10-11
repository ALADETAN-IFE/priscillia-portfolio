import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Sections from "@/components/Sections";
import { Button } from "@/components/common";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Sections>hero</Sections>
        <Sections>
          about
          <Button value="testing" />
        </Sections>
        <Sections>design</Sections>
        <Sections>skills</Sections>
        <Sections>portfolio</Sections>
      </main>
      <Footer />
    </div>
  );
}
