import Image from "next/image";
import React from "react";

const Herosection = ({ skills,user}) => {
  return (
    <div
      id="home"
      className="scroll-mt-20 w-full bg-gradient-to-b from-secondary to-background  rounded-3xl flex justify-between items-start p-14 flex-wrap gap-5 max-xl:justify-center max-xl:gap-y-14  max-md:p-4  "
    >
      <div className=" flex flex-col w-[40%] justify-between min-h-[150px] max-xl:items-center max-md:w-full max-md:justify-center gap-4">
        <Image src={"./comma_logo.svg"} width={50} height={50} alt="logo" />
        <p className=" font-bold text-sm  max-md:text-center max-md:text-[14px] ">
          “My goal is not to be better than anyone else, but to be better then I
          used to be."
        </p>
      </div>

      <div className=" rounded-[15px] bg-black flex  overflow-hidden max-md:flex-col  ">
        <div
          style={{ backgroundImage: "url('TextureDark.png')" }}
          className="max-md:w-full w-[160px] h-[250px]  bg-cover bg-center   bg-secondary flex flex-col gap-5 p-9 justify-center items-center  max-md:h-[140px] max-md:flex-row "
        >
          <Image
            className="rounded-md"
            src={`https:${user[0].fields.profilePhoto.fields.file.url}`}
            width={90}
            height={90}
            alt="profile_image"
          />
          <div>
            <p className="font-bold hidden max-md:block">Rajesh Rajendran</p>
            <small>Jul 15,1998</small>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('Texturelight.png')" }}
          className="w-[280px]  h-[250px] text-black  bg-cover bg-center  bg-white  p-8 flex flex-col justify-between  max-md:w-full  max-md:h-[180px]  "
        >
          <div>
            <p className=" font-bold text-lg max-md:hidden">Rajesh Rajendran</p>
            <p className=" text-[12px]">
              Surveying with precision, building with confidence
            </p>
          </div>

          <div className="flex  gap-3 items-center">
            {skills.map((skill) => (
              <div key={skill.sys.id} className="flex  gap-2 items-center">
                <p className=" font-extrabold text-[16px]">O</p>
                <small className=" font-medium">{skill.fields.skillName}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
