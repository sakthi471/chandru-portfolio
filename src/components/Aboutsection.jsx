import React from "react";
import { FileUser } from "lucide-react";
import { Download } from "lucide-react";

const data = [
  "Open to work",
  "Raising Fund",
  "Hiring",
  "Open to Invest",
  "Open to Consult",
  "Want to outsource",
];

const Aboutsection = () => {
  return (
    <div className="bg-secondary rounded-3xl  p-14  flex justify-between min-h-[410px] ">
      <div>
        <p className=" text-accent font-extrabold text-xl pb-7">
          Rajesh Rajendran
        </p>
        <p>Surveying with precision, building with confidence</p>
        <p className=" text-xl font-semibold ">Professional</p>
      </div>

      <div className=" flex gap-5 items-center ">
        <div className="w-[100px] h-[100px] flex justify-center items-center text-center bg-background rounded-2xl ">
           
        <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer group">
      <FileUser
        size={50}
        className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
      />
      <Download
        color="#0add87"
        size={50}
        className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 "
      />
    </div>
        </div>
        <div className="bg-background rounded-2xl p-7 w-[390px] flex flex-wrap justify-between gap-2 ">
          {data.map((item, index) => (
            <div key={index} className="flex w-[160px] gap-2 ">
              <input type="radio" disabled />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
