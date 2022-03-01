import React from 'react'
import Course from './Course'

const courseList = [
    {
        image: "https://via.placeholder.com/250",
        title: "Intro to DSA",
        description: "The best DSA Video here",
        videoKey: "10sjdnc"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "AI/ML - Regressor",
        description: "The best AI/ML Video here",
        videoKey: "1w0dks"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Intro to DSA",
        description: "The best DSA Video here",
        videoKey: "2soapjd"
    }
]

const CourseList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {courseList.map((course, idx) => (
            <Course key={idx} coverImage={course.image} title={course.title} description={course.description} videoKey={course.videoKey} />
        ))}
    </div>
  )
}

export default CourseList