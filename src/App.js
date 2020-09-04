import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TopNav from "./components/molecules/TopNav/TopNav";
import Homepage from "./pages/Homepage/Homepage";
import MrFingers from "./pages/MrFingers/MrFingers";
import SpaceOne from "./pages/SpaceOne/SpaceOne";
import Equivalents from "./pages/Equivalents/Equivalents";
import Feedback from "./pages/Feedback/Feedback";
import SignUp from "./pages/SignUp/SignUp";
import PromoterNew from "./pages/PromoterNew/PromoterNew";

import "./App.css";
import "./styles/main.scss";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <AnonymousID /> */}
          <TopNav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/mrfingers" component={MrFingers} />
            <Route path="/spaceone" component={SpaceOne} />
            <Route path="/equiva" component={Equivalents} />
            <Route path="/signup" component={SignUp} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/pnew" component={PromoterNew} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
