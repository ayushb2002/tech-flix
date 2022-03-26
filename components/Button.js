import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='flex items-center justify-center px-6 py-2 text-white transition-all duration-200 bg-red-500 rounded-lg outline-none hover:bg-red-600'>
        <span className='font-semibold text-white'>{text}</span>
    </button>
  )
}

export default Button