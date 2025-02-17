"use client";

import Image from "next/image";
import { useState } from "react";


const educationDetails = [
    {
        course: "BE in CIVIL ENGINEERING",
        institute: "Sree Sakthi Engineering College",
        year: "06/2015 to 05/2019",
        location: "Coimbatore"
    },
    {
        course: "Higher Secondary",
        institute: "Rajavignesh Higher Secondary School",
        year: "06/2014 to 03/2019",
        location: "Melamathur"
    }
]

export default function EducationExperienceToggle() {
    const [activeSection, setActiveSection] = useState("education");

    return (
        <div className=" flex flex-col  items-center p-6 gap-11">
            {/* Buttons for toggling */}
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={() => setActiveSection("education")}
                    className={`px-4  text-2xl  py-2 rounded-md font-bold ${activeSection === "education"
                            ? "text-accent"
                            : "text-foreground"
                        }`}
                >
                Experience
                </button>
                <button
                    onClick={() => setActiveSection("experience")}
                    className={`px-4  text-2xl  py-2 rounded-md font-bold ${activeSection === "experience"
                        ? " text-accent"
                        : " text-foreground"
                    }`}
                    >
                    Education
                </button>
            </div>

            {/* Section Content */}
            <div className=" w-full flex  gap-8 flex-wrap items-center ">
                {activeSection === "education" ? (
                    <div className=" bg-secondary w-[250px] h-[250px] rounded-2xl flex flex-col items-center justify-center gap-3">
                        <div className="w-[60px] h-[60px] overflow-hidden rounded-full bg-foreground flex items-center justify-center mx-auto mt-4"   >
                            <Image src={'./Company_icon.svg'} width={60} height={60} alt="company icon" />
                        </div>
                        <div className="flex flex-col items-center ">
                            <p className=" font-semibold py-1">Survey Engineer</p>
                            <small className="  text-[11px] text-accent">GP Survey</small>
                            <small className="  text-[11px] text-gray-400" >06/2019 to 01/2025</small>
                            <small className="  text-[11px] text-gray-400" >Full-time</small>
                            <small className="  text-[11px] text-gray-400" >Trichy</small>
                        </div>

                    </div>

                ) : (
                <>
                   {
                     educationDetails.map((education, index) => (
                        <div key={index} className=" bg-secondary w-[250px] h-[250px] rounded-2xl flex flex-col items-center justify-center gap-3">
                        <div className="w-[60px] h-[60px] overflow-hidden rounded-full bg-foreground flex items-center justify-center mx-auto mt-4"   >
                            <Image src={'./Company_icon.svg'} width={60} height={60} alt="company icon" />
                        </div>
                        <div className="flex flex-col items-center ">
                            <p className=" font-semibold py-1">{education.course}</p>
                            <small className="  text-[11px] text-accent">{education.institute}</small>
                            <small className="  text-[11px] text-gray-400" >{education.year}</small>
                            <small className="  text-[11px] text-gray-400" >{education.location}</small>
                        </div>

                    </div>
                     ))
                   }
                </>
                
                )}
            </div>
        </div>
    );
}
