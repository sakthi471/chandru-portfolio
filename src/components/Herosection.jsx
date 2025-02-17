import Image from 'next/image'
import React from 'react'

const Herosection = () => {
  return (
    <div className='bg-gradient-to-b from-secondary to-background  rounded-3xl flex justify-between items-start p-14 '>

        <div className=' flex flex-col justify-between min-h-[150px]'>
            <Image src={'./comma_logo.svg'} width={50} height={50} alt='logo' />
            <pre className=' font-bold text-lg '>
            “My goal is not to be better
             than anyone else,”
             <p> but to be better
             then I used to be.</p>
            </pre>
        </div>

        <div className='w-[40%] rounded-3xl bg-black flex h-[250px] overflow-hidden '>
            <div className='w-[40%] bg-gray-500'>

            </div>
            <div className='w-[60%]  bg-green-300 '>

            </div>

        </div>

    </div>
  )
}

export default Herosection