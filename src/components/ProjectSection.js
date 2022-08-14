import React from 'react'
import Button from './Button'

const ProjectSection = (props) => {

  
  return (
    <div className='text-center md:text-left md:p-20 p-5  md:basis-2/3 flex flex-col'>
      <h1 className=' text-6xl pb-5'>
        {props.name}
      </h1>
      <p>{props.description}</p>
      <div className='mt-10 mx-auto'>
        <Button dest={props.liveBtnDest}>Live Site</Button>
        
        <Button dest={props.srcBtnDest}>GitHub</Button>
      </div>
      
    </div>
  )
}

export default ProjectSection