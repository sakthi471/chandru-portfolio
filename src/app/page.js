import Aboutsection from "@/components/Aboutsection";
import EducationExperienceToggle from "@/components/Educationsection";
import Herosection from "@/components/Herosection";
import Skillssection from "@/components/Skillssection";
import SocilaLinks from "@/components/SocialLinks";



export default function Home() {
  return (
    <main className=" w-[80%] flex flex-col gap-20 pb-16 max-xl:w-[85%] max-lg:w-[95%]">
      <Herosection/>
      <SocilaLinks/>
      <Aboutsection/>
      <Skillssection/>  
      <EducationExperienceToggle/>
    </main>
  );
}
