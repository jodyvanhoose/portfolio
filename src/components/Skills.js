import React from 'react'
import {FaHtml5,FaCss3Alt,FaSass,FaGitAlt, FaGithub,FaNpm,FaBootstrap,FaReact,FaFigma} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'

const Skills = () => {
  return (
    <div>
      <h3 className='text-3xl text-center border-[#3794fc] border-b pt-5'>Tech skills</h3>

   
      <div id='skills' className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-items-center'>
      
          <div className='text-6xl text-[#3794fc] flex flex-col p-10 place-items-center'>
          <FaHtml5 />
            <h2 className='text-2xl'>HTML</h2>
          </div>

          <div className='text-6xl text-[#3794fc] flex flex-col p-10 place-items-center'>
            <FaCss3Alt />
            <h2 className='text-2xl'>CSS</h2>
          </div>

          <div className='text-6xl text-[#3794fc] flex flex-col p-10 place-items-center'>
            <SiJavascript />
            <h2 className='text-2xl'>JavaScript</h2>
          </div>

          <div className='text-6xl text-[#3794fc] flex flex-col p-10 place-items-center'>
            <FaReact />
            <h2 className='text-2xl'>React js</h2>
          </div>
          
          <div className='text-6xl text-[#3794fc] flex flex-col p-10 place-items-center'>
            <FaSass />
            <h2 className='text-2xl'>SASS</h2>
          </div>

          <div className='text-6xl text-[#3794fc] flex flex-col p-10 place-items-center'>
            <FaGitAlt />
            <h2 className='text-2xl'>Git</h2>
          </div>

          <div className='text-6xl text-[#3794fc] flex flex-col p-10 place-items-center'>
            <FaGithub />
            <h2 className='text-2xl'>GitHub</h2>
          </div>

          <div className='text-6xl text-[#3794fc] flex flex-col p-10 place-items-center'>
            <FaNpm />
            <h2 className='text-2xl'>NPM</h2>
          </div>
          
          <div className='flex flex-col p-10 place-items-center text-[#3794fc]'>
          <svg className='h-16 w-16 fill-current text-[#3794fc]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>
          <h2 className='text-2xl'>Tailwind CSS</h2>
          </div>

          <div className='text-6xl text-[#3794fc] flex flex-col p-10 place-items-center'>
          <FaBootstrap />
          <h2 className='text-2xl'>Bootstrap</h2>
          </div>

          <div className='text-6xl text-[#3794fc] flex flex-col p-10 place-items-center'>
            <FaFigma />
            <h2 className='text-2xl'>Figma</h2>
          </div>

          <div className='flex flex-col p-10 place-items-center text-[#3794fc]'>
          <svg className='h-16 w-16 fill-current text-[#3794fc]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.228341 8.36915C0.228341 8.36915 -0.356212 7.94324 0.345251 7.37453L1.97956 5.89736C1.97956 5.89736 2.44721 5.40004 2.94164 5.83334L18.0231 17.375V22.9094C18.0231 22.9094 18.0158 23.7785 16.9124 23.6825L0.228341 8.36915Z" /><path d="M4.11555 11.9367L0.228273 15.5089C0.228273 15.5089 -0.171172 15.8093 0.228273 16.346L2.03308 18.0053C2.03308 18.0053 2.46175 18.4706 3.09502 17.9413L7.21611 14.7827L4.11555 11.9367Z" /><path d="M10.94 11.9661L18.0691 6.46362L18.0228 0.95865C18.0228 0.95865 17.7183 -0.242793 16.7027 0.382548L7.21589 9.11025L10.94 11.9661Z" /><path d="M16.9121 23.69C17.3261 24.1183 17.8279 23.978 17.8279 23.978L23.3838 21.2108C24.0951 20.7208 23.9952 20.1127 23.9952 20.1127V3.58803C23.9952 2.86175 23.2596 2.61063 23.2596 2.61063L18.4441 0.264377C17.3919 -0.392968 16.7027 0.382548 16.7027 0.382548C16.7027 0.382548 17.5892 -0.262484 18.0228 0.95865L18.0228 22.8086C18.0228 22.9588 17.9911 23.1065 17.9278 23.2394C17.8011 23.4979 17.5259 23.7392 16.8658 23.6383L16.9121 23.69Z"/></svg>
          <h2 className='text-2xl'>VS Code</h2>
          </div>
        
        
      </div>
    
      <h3 className='text-3xl text-center border-[#3794fc] border-b pt-5'>Soft Skills</h3>
      <p className='text-xl text-center leading-10 p-5'>Good oral and written communication <span className='text-[#3794fc]'>|</span> Problem solving <span className='text-[#3794fc]'>|</span> Good Teamwork skills <span className='text-[#3794fc]'>|</span> Innovative <span className='text-[#3794fc]'>|</span> Good Imagination <span className='text-[#3794fc]'>|</span> Critical Thinking <span className='text-[#3794fc]'>|</span> Collaborates well with others in a professional manner <span className='text-[#3794fc]'>|</span> Dedicated and Committed <span className='text-[#3794fc]'>|</span> Excellent Time Management Skills <span className='text-[#3794fc]'>|</span> Good organization skills <span className='text-[#3794fc]'>|</span> Eager to Learn with a Passion for Tech </p>
    </div>
    
  )
}

export default Skills