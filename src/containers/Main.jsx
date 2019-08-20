import React, { Component } from "react";
import { BrowserRouter as Route } from "react-router-dom";

import About from "./../components/About";
import Projects from "./../components/Projects";
import Container from 'react-bootstrap/Container';
class Main extends Component {
  render = () => {
    return (
      <Container>
          <Route path="/personal-projects" component={Projects} />
          <Route path="/resume" component={Projects} />
          <Route path="/about" component={About} />
      </Container>
    );
  };
}

export default Main;
