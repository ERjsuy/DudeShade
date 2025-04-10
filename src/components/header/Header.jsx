import React from 'react'
import lupa from '../icon/loupe1.png'
import group from '../icon/Group3.png'
export const Header = () => {

const navItem = [
  {
    id:1,
    title: "Home",
    path:"/"
  },
  {
    id:2,
    title: "About",
    path:"/about"
  },

  {
    id:3,
    title: "Future",
    path:"/future"
  },
  {
    id:4,
    title: "Contact",
    path:"/contact"
  },
];
  return (
    <>
     <section className='w-full h-20'>
          <div className='w-11/12 h-full mx-auto flex justify-between items-center '>
           <h1 className='text-2xl text-[#244D4D4] font-bold'>DudeShape</h1>
          <ul className='flex justify-between gap-2'>
          {navItem.map((nav) =>(
            <li>{nav.title}</li>
          ))}
          </ul>
          <div className='flex gap-2'>
            <img src={lupa} alt="" />
            <img src={group} alt="" />
          </div>
          </div>
     </section>
    </>
  )
}
