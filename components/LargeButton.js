import React from 'react'

const LargeButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='flex items-center justify-center px-10 py-4 text-white transition-all duration-200 bg-red-500 rounded-lg outline-none hover:bg-red-600'>
        <span className='font-semibold text-white'>{text}</span>
    </button>
  )
}

export default LargeButton