import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'


const SocialLink = [
    {
      id: 2,
      child: (
        <>
           < Github />
        </>
      ),
      href: "https://github.com/sakthi471",

    },
    {
      id: 1,
      child: (
        <>
           <Linkedin />
        </>
      ),
      href: "https://www.linkedin.com/in/sakthi-m-79a98a227/",

    },
    {
      id: 3,
      child: (
        <>
           <Instagram />
        </>
      ),
      href: "https://www.instagram.com/sakthi__13_/"
    }
    ,
    {
      id: 4,
      child: (
        <>
          <Twitter />
        </>
      ),
      href: "https://twitter.com/sakthi_13_",

    },
  ]




const Footer = () => {
    return (
        <div className='w-full p-10 flex flex-row max-md:flex-col items-center justify-around bg-secondary text-white gap-6'>

        <div className=' min-w-[50%] flex flex-col gap-5'>
            <h1 className=' font-bold text-xl'>Sakthi M</h1>
            <p className=' text-sm text-slate-400'>A Frontend focused Web Developer building the Frontend of Websites and
            Web Applications that leads to the success of the overall product</p>
            <p className=' text-sm '>
           @Copyright 2024. Made by Sakthi M
           </p>
        </div>
        <div className=' flex flex-col items-center gap-5 '>
            <div className='flex gap-4 items-center'>
            {SocialLink.map(({ id, child, href }) => (
          (
            
              <a key={id} href={href} target="_blank" rel="noreferrer" className="flex w-full justify-between  items-center hover:text-primary  ">
                {child}
              </a>
            
          )
        ))
        }
            </div>
        </div>

       
        </div>
    )
}

export default Footer