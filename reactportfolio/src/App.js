import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NoMatch from "./pages/NoMatch";
import './App.css';


function App() {
  return (
    <HashRouter>
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
