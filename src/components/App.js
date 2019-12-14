import React from "react";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        {/* Switch component allows you to set a default when any patches do not match
        then it will call the component way as the example below with PageNotFound */}
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
