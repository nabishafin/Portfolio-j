import Image from "next/image";
import Bannersection from "./components/herosection/Bannersection";
import Navbar from "./components/Navbar";
import Routine from "./components/Routine";
import LogoLoop from "./components/LogoLoop";
import AboutMe from "./components/AboutMe";
import Cycle from "./components/Cycle";
import SkillsSection from "./SkillsSection";

const logosData = [
  { src: "/typescript.svg", alt: "Logo 1" },
  { src: "/tailwind.svg", alt: "Logo 2" },
  { src: "/docker.svg", alt: "Logo 3" },
  { src: "/react.svg", alt: "Logo 4" },
  { src: "/next.svg", alt: "Logo 5" },
];
export default function Home() {
  return (
    <div className="bg-[#171717] pt-16 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="relative">
        <Navbar />
        <Bannersection />
        <Routine />
        <Cycle />
        <AboutMe />
        <SkillsSection />
        {/* <LogoLoop logos={logosData}/> */}
      </div>
    </div>
  );
}
