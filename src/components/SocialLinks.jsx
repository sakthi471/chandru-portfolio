import React from "react";
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';


const SocilaLinks = () => {

  const SocialLink = [
    {
      id: 1,
      child: (
        <>
          Linkedian <Linkedin />
        </>
      ),
      href: "https://www.linkedin.com/in/sakthi-m-79a98a227/",
      style: "rounded-tr-md"

    },
    {
      id: 2,
      child: (
        <>
          Github < Github />
        </>
      ),
      href: "https://github.com/sakthi471",

    },
    {
      id: 3,
      child: (
        <>
          Instagram <Instagram />
        </>
      ),
      href: "https://www.instagram.com/sakthi__13_/"
    }
    ,
    {
      id: 4,
      child: (
        <>
          Twitter <Twitter />
        </>
      ),
      href: "https://twitter.com/sakthi_13_",
      style: "rounded-br-md",

    },
  ]

  return (
    <div className="hidden  lg:flex flex-col top-[35%] left-0 fixed z-10 shadow-sm ">
      <ul>
        {SocialLink.map(({ id, child, href, style }) => (
          (
            <li key={id} className={
              ` group  bg-secondary hover:bg-secondary  flex justify-between items-center w-40 h-11  px-4  ml-[-110px] hover:rounded-md duration-300 hover:ml-[-10px] ${style}`
            }>
              <a href={href} target="_blank" rel="noreferrer" className="  group-hover:text-accent flex w-full justify-between  items-center hover:text-primary  ">
                {child}
              </a>
            </li>
          )
        ))
        }

      </ul>
    </div>
  );
};

export default SocilaLinks;