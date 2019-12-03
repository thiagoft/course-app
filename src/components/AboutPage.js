import React, { Component } from "react";

// import { Container } from './styles';

export default class components extends Component {
  // we can use <> </> to specify a React.Fragment instead.
  render() {
    return (
      <React.Fragment>
        <h2>About</h2>
        <p>This app uses React.</p>
      </React.Fragment>
    );
  }
}
