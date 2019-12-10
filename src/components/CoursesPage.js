import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

import CourseList from "./CourseList";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(coursesList => setCourses(coursesList));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
}
