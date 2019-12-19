import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}
