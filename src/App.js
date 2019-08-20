import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./containers/Main";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Pitch from "./components/Pitch";

import Menu from "./components/Menu";

function App() {
  return (
    <Container>
      <header>
        <img
          src="./profile-pic.jpg"
          className="App-logo circle"
          alt="profile-pic"
        />
      </header>
      <Pitch />
      <Router>
        <Menu />
        <Main />
      </Router>
    </Container>
  );
}

export default App;
