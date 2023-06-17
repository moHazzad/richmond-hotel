import React from 'react'
import Button from '../../SharedCompontes/Button'
import innerImage from '../../../assets/h1-img-03.jpg'

function InnerExellency() {
  return (
    <>
    <div className='md:w-[60%]  '>
        <div className='px-10 flex flex-col  justify-center items-center text-center text-[#DCC69C]'>
        <h1 className='text-3xl font-semibold py-2'>  Excellence </h1>
        <h2 className='tracking-[.65rem] font-normal text-sm md:text-md'>  WORLD CLASS SERVICES </h2>
        <p className='py-5 md:text-3xl text-xl font-semibold'>The exceptional quality and standards of the services provided by a particular company, organization, or establishment. </p>
        <Button buttonName={'View More'} />
        </div>
    </div>
    <div className='md:w-[40%] '>
       <div className=''>
       <div className=" border border-[#DCC69C] py-2 px-2   ">
            <img  className='' src={innerImage} alt="" />
        </div>
       </div>
    </div>
    
    </>
  )
}

export default InnerExellency