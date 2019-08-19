import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./containers/Main";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <header>
        <img src="./profile-pic.jpg" className="App-logo circle" alt="profile-pic" />
      </header>
      <Router>
          <Row className="d-flex align-items-center">
          <Col xs={3}><h1><Link to="/personal-projects">Work Experience</Link></h1></Col> 
            <Col xs={3}><h1><Link to="/personal-projects">Personal Projects</Link></h1></Col> 
            <Col xs={3}><h1><Link to="/about">Resume</Link></h1></Col> 
            <Col xs={3}><h1><Link to="/about">About</Link></h1></Col> 
          </Row> 
        <Main />
      </Router>
    </div>
  );
}

export default App;
