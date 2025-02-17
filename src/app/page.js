import Aboutsection from "@/components/Aboutsection";
import EducationExperienceToggle from "@/components/Educationsection";
import Herosection from "@/components/Herosection";
import Skillssection from "@/components/Skillssection";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-[80%] flex flex-col gap-16 pb-16">
      <p > Nav</p>

      <Herosection/>
      <Aboutsection/>
      <Skillssection/>
      <EducationExperienceToggle/>
    </main>
  );
}
