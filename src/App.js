import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./containers/Main";

import Container from "react-bootstrap/Container";
import Pitch from "./components/Pitch";

import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Container className="App">
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
      <Footer />
    </div>
  );
}

export default App;
