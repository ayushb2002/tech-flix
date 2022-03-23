import React from "react";
import Course from "./Course";

const CourseList = ({courseList}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {courseList.map((course, idx) => (
        <Course
          key={idx}
          coverImage={course.data().image}
          title={course.data().title}
          description={course.data().description}
          videoKey={course.data().videoKey}
        />
      ))}
    </div>
  );
};

export default CourseList;
