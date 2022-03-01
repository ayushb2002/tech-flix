import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Course = ({coverImage, title, description, videoKey}) => {
    const router = useRouter();
  return (
    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.9}} className='flex flex-col items-start justify-center w-full p-4 border border-white rounded-lg space-y-3 cursor-pointer' onClick={() => router.push(`/video/${videoKey}`)}>
        <Image src={coverImage} className="w-full" alt="Cover Image" height={250} width={250} />
        <h2 className='text-2xl text-white'>{title}</h2>
        <p className='text-white text-sm'>
            {description}
        </p>
    </motion.div>
  )
}

export default Course