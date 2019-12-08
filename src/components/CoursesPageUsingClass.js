import React, { Component } from "react";
import { getCourses } from "../api/courseApi";

export default class CoursesPage extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       courses: []
  //     };
  //   }
  // we can use this way to instantiate and initialize state with no necessity to call super(props)
  state = {
    courses: []
  };

  componentDidMount() {
    getCourses().then(courses => this.setState({ courses: courses }));
  }

  //   renderRow(course) {
  //     return (
  //       <tr>
  //         <td>{course.title}</td>
  //         <td>{course.authorId}</td>
  //         <td>{course.category}</td>
  //       </tr>
  //     );
  //   }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          {/* you can do like this */}
          {/* <tbody>{this.state.courses.map(this.renderRow)}</tbody> */}
          {/* or call inline which I recommend */}
          <tbody>
            {this.state.courses.map(course => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
