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

        <div className='w-[40%] rounded-[15px] bg-black flex  overflow-hidden '>
            <div  style={{ backgroundImage: "url('TextureDark.png')" }} className="w-[160px] h-[250px]  bg-cover bg-center   bg-secondary flex flex-col gap-3 justify-center items-center " >

              <Image src={'/profile.png'} width={80} height={80} alt='profile_image'/>

              <small>Jul 15,1998</small>


            </div>
            <div  style={{ backgroundImage: "url('TextureLight.png')" }} className='w-[280px]  h-[250px] text-black  bg-cover bg-center  bg-white  p-6  '>

              <p className=' font-bold text-lg'>Rajesh Rajendran</p>
              <p className=' text-[12px]'>Surveying with precision, building with confidence</p>

              <hr/>
              <div>
                <p className=''> <small className='font-bold'>O</small>Auto Cadd </p>
               
                 <small>Auto Cadd</small>
                 <small>MS office </small>

              </div>

            </div>

        </div>

    </div>
  )
}

export default Herosection