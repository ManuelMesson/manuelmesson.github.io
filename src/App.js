import React from 'react';
import './App.css';
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./profile-pic.jpg" className="App-logo" alt="profile-pic" />
        <Router>
        <Link to="about">About</Link>
        <Link to="personal-projects">Personal Projects</Link>
          <Route path="/about" component={About}></Route>
          <Route path="/personal-projects" component={Projects}></Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
