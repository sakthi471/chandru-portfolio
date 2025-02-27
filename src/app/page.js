import Aboutsection from "@/components/Aboutsection";
import EducationExperienceToggle from "@/components/Educationsection";
import Footer from "@/components/FooterSection";
import Herosection from "@/components/Herosection";
import NavbarSection from "@/components/NavbarSection";
import Skillssection from "@/components/Skillssection";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-[80%] flex flex-col gap-20 pb-16">
      <Herosection/>
      <Aboutsection/>
      <Skillssection/>
      <EducationExperienceToggle/>
    </main>
  );
}
