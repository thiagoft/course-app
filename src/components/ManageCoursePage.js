import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/CourseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

// Declaring React component with arrow Function
const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug; // from the path "/course/:slug"

    if (courses.length === 0) {
      courseActions.loadCourse();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }

    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

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

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    //Form is valid if the erros object has no properties

    //This feature from javascript returns an array of the object keys
    //if the length of that array is 0 it means that this object has no properties.
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handlerChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
