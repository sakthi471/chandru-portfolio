import React from "react";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const SocilaLinks = ({ socialLinkDate }) => {
  return (
    <div className="hidden  lg:flex flex-col top-[35%] left-0 fixed z-10 shadow-sm ">
      <ul>
        {socialLinkDate.map((link, index) => (
          <li
            key={index}
            className={` group  bg-secondary hover:bg-secondary  flex justify-between items-center w-40 h-11  px-4  ml-[-110px] hover:rounded-md duration-300 hover:ml-[-10px] ${link.style}`}
          >
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="  group-hover:text-accent flex w-full justify-between  items-center hover:text-primary  "
            >
              {link.name} {link.icon()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocilaLinks;
