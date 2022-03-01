import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='flex items-center justify-center bg-green-500 text-white rounded-lg px-6 py-2 hover:bg-green-600 transition-all duration-200 outline-none'>
        <span className='text-white font-semibold'>{text}</span>
    </button>
  )
}

export default Button