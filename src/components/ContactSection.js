import React from 'react'
import {FaGithub, FaLinkedin, FaPhone} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

const ContactSection = () => {
  return (
    <div className='text-center md:text-left md:pl-32 py-5 md:basis-2/3 flex flex-col justify-center items'>
      <h1 className='lg:text-5xl md:text-4xl text-3xl pb-3'>Let's get in touch!</h1>
      <ul className=''>
        <li className='flex md:justify-start justify-center items-center py-4 xl:text-3xl text-xl'>
          <FaPhone className='text-[#3794fc] hidden sm:block'></FaPhone>
          <p className='px-2'>Phone: (606)225-5256</p>
          </li>
        <li className='flex md:justify-start justify-center items-center xl:text-3xl text-sm'>
          <FiMail className='text-[#3794fc] hidden sm:block'></FiMail>
          <p className='px-2'>Email: jodyvanhoose0@gmail.com</p>
          </li>
      </ul>
      <ul className='flex justify-center md:justify-start py-4'>
        <li className='px-4 md:px-0'><a href="https://github.com/jodyvanhoose" target='_blank' rel="noreferrer">
          <FaGithub className='text-4xl text-[#3794fc]'></FaGithub>
          </a></li>
        <li className='px-4'><a href="https://www.linkedin.com/in/jody-vanhoose/" target='_blank' rel="noreferrer">
          <FaLinkedin className='text-4xl text-[#3794fc]'></FaLinkedin>
          </a></li>
      </ul>
      
    </div>
  )
}

export default ContactSection