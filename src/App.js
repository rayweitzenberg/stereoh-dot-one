import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TopNav from "./components/molecules/TopNav/TopNav";
import Homepage from "./pages/Homepage/Homepage";
import MrFingers from "./pages/MrFingers/MrFingers";
import Anima from "./pages/Anima/Anima";
import Equivalents from "./pages/Equivalents/Equivalents";

import "./App.css";
import "./styles/main.scss";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/mrfingers" component={MrFingers} />
            <Route path="/anima" component={Anima} />
            <Route path="/equiva" component={Equivalents} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
