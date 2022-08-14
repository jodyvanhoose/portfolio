import React from 'react'

const Button = (props) => {
  return (
    <button className='border text-gray-900  border-gray-500 px-5 py-1 mx-5 hover:text-gray-500  hover:shadow-lg transition-all duration-500'>
      <a href={props.dest} target='_blank' rel="noreferrer">{props.children}</a>
    </button>
  )
}

export default Button