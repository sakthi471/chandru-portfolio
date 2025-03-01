"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const links = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "expertise",
  },
  {
    name: "experience",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" z-10   max-md:px-5 flex  h-16  fixed w-full top-0 flex-row justify-between items-center px-14  bg-background rounded-md bg-clip-padding backdrop-filter backdrop-blur-md  border border-gray-100 dark:border-none">
      <h1 className=" font-bold text-2xl">Rajesh <span className=" text-accent"> Rajendran</span> </h1>
     
      <div className=" capitalize h-full flex flex-row items-center gap-7  max-md:gap-4  relative  ">
        <ul
          className={`capitalize  bg-secondary shadow-2xl shadow-gray-700  py-8  rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl    items-center gap-7  absolute top-16 -right-10 flex-col w-[250px] z-30  h-[400px] duration-150  flex ${
            toggle ? "" : "hidden"
          }  `}
        >
          {links.map((link, index) => (
            <li
              onClick={() => setToggle(!toggle)}
              key={index}
              className=" text-accent text-sm font-bold    hover:font-bold cursor-pointer hover:border-b-2 border-primary  py-2 "
            >
              <Link href={`#${link.name}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex  items-center gap-5 max-md:hidden ">
          {links.map((link, index) => (
            <li
              key={index}
              className=" text-sm  hover:font-bold duration-150 cursor-pointer hover:border-b-2 border-accent  py-2 "
            >
              <Link href={`#${link.name}`}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div
          className=" hidden max-md:block "
          onClick={() => setToggle((toggle) => !toggle)}
        >
          {toggle ? <X /> : <Menu />}{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
