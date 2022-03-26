import React, { useEffect, useState } from "react";
import Course from "./Course";

const CourseList = ({ courseList, subjects }) => {
  return (
    <>
      {subjects.map((subject, index) => (
        <div key={index} className="flex flex-col my-2">
          <h2 className="my-4 text-2xl font-bold text-white">{subject?.data()?.subjectName}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {courseList.map((course, idx) => {
              if (course?.data()?.subject === subject?.data()?.subjectCode) {
                return (
                  <Course
                    key={idx}
                    coverImage={course.data().image}
                    title={course.data().title}
                    description={course.data().description}
                    videoKey={course.data().videoKey}
                  />
                );
              } else {
                return <></>
              }
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseList;
