import React from 'react'
import { useState } from 'react'



const Nav = () => {

  // links for nav
  let Links =[
    {name: "PROJECTS", link:"#projects"},
    {name: "SKILLS", link:"#skills"},
    {name: "ABOUT", link:"#about"},
    {name: "CONTACT", link:"#contact"}
  ]

  // hamburger menu open/close
  let [open, setOpen] = useState(false)

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className=' text-[#3794fc] md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        
        {/* logo */}
        <a href="home" target='_blank' rel="noreferrer"><h1 className='z-10 cursor-pointer pt-2 md:pt-1 ml-3 md:text-2xl'><span className='md:text-4xl text-2xl'>J</span>ody <span className='md:text-4xl text-2xl'>V</span>an<span className='md:text-4xl text-2xl'>H</span>oose</h1></a>

        {/* nav */}
        <div onClick={() =>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>

          {/* hamburger/close icon */}
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'left-[-1000px]'} md:opacity-100`}>

          {/* mapping through nav links */}
          {
            Links.map((link) =>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
               <a href={link.link} className='text-[#3794fc ] hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
        
    </div>
  )
}

export default Nav