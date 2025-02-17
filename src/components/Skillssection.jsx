import React from 'react'


const skills=[
    {
        skillname:"Auto cadd",
        level:"Expert"
    },
    {
        skillname:"Ms office",
        level:"Intermediate"
    },
    {
        skillname:"Ms office",
        level:"Intermediate"
    }
    ,
    {
        skillname:"Mice",
        level:"Beginner "
    }

]

const Skillssection = () => {
    return (
         <div className=' flex flex-col items-center gap-7'>
            <p className=' font-bold text-2xl'>Expertise</p>

        <div className=' w-full flex flex-wrap justify-between gap-5'>
            {
                skills.map((skill,index)=>(
                    <div key={index} className=' bg-secondary rounded-3xl  flex  justify-between px-10 py-1 items-center w-[500px]'>
                 <p className=' font-semibold'>{skill.skillname}</p>
                 <div className=' flex  items-center min-w-[120px]  gap-4'>
                 <p className=' font-bold text-2xl'>|</p>
                 <p className=' text-accent font-semibold'>{skill.level}</p>
                 </div> 
            </div>
                ))
            }
           

        </div>

         </div>
    )
}

export default Skillssection