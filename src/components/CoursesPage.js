import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import courseStore from "../stores/CourseStore";
import CourseList from "./CourseList";
import { loadCourse, deleteCourse } from "../actions/courseActions";

export default function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourse();

    // useEffect returns a function to be called when the component unmounts.
    return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}
