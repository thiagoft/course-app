import React, { useState } from "react";
import CourseForm from "./CourseForm";

// Declaring React component with arrow Function
const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  // function handlerChange(event) {
  // using destructuring
  function handlerChange({ target }) {
    // Spreading course object and overriding/setting title
    const updatedCourse = {
      ...course,
      // When using [] in this context it's called Computed property it allows to set a property
      // based on a variable
      [target.name]: target.value
    };

    setCourse(updatedCourse);

    // You can do that destructuring like this
    // setCourse({
    //   ...course,
    //   [target.name]: target.value
    // });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handlerChange} />
    </>
  );
};

export default ManageCoursePage;
