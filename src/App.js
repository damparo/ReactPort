import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home"
import Project from "./components/Project"

function App() {
  return (
    <Router>
      <nav>
      <div className="nav-wrapper">
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"
          ><i className="material-icons">menu</i></a
        >
        <ul className="right hide-on-med-and-down fontcolor">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
       <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
    </ul>


      
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
