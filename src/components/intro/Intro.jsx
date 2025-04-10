import React from 'react'
import intro from '../img/retan.png'

const Intro = () => {
  return (
   <section className='w-full'>
        <div className='w-11/12 mx-auto'>
            <div className='w-full flex justify-end border border-dashed'>
                <img src={intro} alt="" />
            </div>
            <div className='w-96 h-96 bg-[#244D4D] text-white flex  flex-col justify-center items-center pl-10 gap-5 absolute top-56 left-56'>
                <p className='text-5xl'>We Help You Make Modern Furniture</p>
                <p>We will help you to make an elegant and luxurious interior designed by professional interior designer.</p>
            </div>
        </div>
   </section>
  )
}

export default Intro
