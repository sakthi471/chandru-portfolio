import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = ({socialLinkData}) => {
    return (
        <div className='w-full p-10 flex flex-row max-md:flex-col items-center justify-around bg-secondary text-white gap-6'>

        <div className=' min-w-[50%] flex flex-col gap-5'>
            <h1 className=' font-bold text-xl'>Rajesh Rajendran </h1>
           
            <p className=' text-sm '>
           @Copyright {new Date().getFullYear()} Made by Rajesh Rajendran
           </p>
        </div>
        <div className=' flex flex-col items-center gap-5 '>
            <div className='flex gap-4 items-center'>
            {socialLinkData.map((link,index) => (
          (
            
              <a key={index} href={link.href} target="_blank" rel="noreferrer" className="flex w-full justify-between  items-center hover:text-accent  ">
                {link.icon()}
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