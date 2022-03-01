import React from 'react'

const LargeButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='flex items-center justify-center bg-green-500 text-white rounded-lg px-10 py-4 hover:bg-green-600 transition-all duration-200 outline-none'>
        <span className='text-white font-semibold'>{text}</span>
    </button>
  )
}

export default LargeButton