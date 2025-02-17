import React from 'react'



const data=['Open to work','Raising Fund','Hiring','Open to Invest','Open to Consult','Want to outsource'
]

const Aboutsection = () => {
    return (
        <div className='bg-secondary rounded-3xl  p-14  flex justify-between min-h-[350px] '>
            <div>
                <p className=' text-accent font-extrabold text-xl pb-7'>Rajesh Rajendran</p>
                <p>Surveying with precision, building with confidence</p>
                <p className=' text-xl font-semibold '>Professional</p>
            </div>   

             <div className=' flex gap-5 items-center '>

                <div className='w-[100px] h-[100px]  text-center bg-background rounded-2xl '>
                        Resume 
                </div>
                 <div  className='bg-background rounded-2xl p-7 w-[390px] flex flex-wrap justify-between gap-2 '>
                    {
                        data.map((item,index)=>(
                            <div key={index} className='flex w-[160px] gap-2 '>
                                <input type="radio" disabled />
                                <p>{item}</p>
                            </div>
                        ))
                    }
                   
                 </div>

                </div>         
        </div>
    )
}

export default Aboutsection