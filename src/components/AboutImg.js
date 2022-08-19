import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const AboutImg = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
  
      // my smiling face
      <div data-aos="flip-right" className="bg-[url('./img/profile.png')] rounded-[50%] aspect-square bg-cover bg-center h-64 w-64">
      </div>
    
  )
}

export default AboutImg