import React from "react";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        {/* Switch component allows you to set a default when any patches do not match
        then it will call the component way as the example below with PageNotFound */}
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        {/* Note that the order matters if you declare /course before /course/:slug
        it will never be reached */}
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        {/* Using Redirect component to go to about path from every /about-page call */}
        <Redirect from="/about-page" to="about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
