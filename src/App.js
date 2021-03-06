import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/atoms/ScrollToTop/ScrollToTop";
import TopNav from "./components/molecules/TopNav/TopNav";
import Homepage from "./pages/Homepage/Homepage";
import Saturn6 from "./pages/Saturn6/Saturn6";
import TropicalFreeze from "./pages/TropicalFreeze/TropicalFreeze";
import BasslineBasin from "./pages/BasslineBasin/BasslineBasin";
import TropicalFright from "./pages/TropicalFright/TropicalFright";
import NYE from "./pages/NYE/NYE";
import Events from "./pages/Events/Events";
import CheatSheet from "./pages/CheatSheet/CheatSheet";
import About from "./pages/About/About";
import Feedback from "./pages/Feedback/Feedback";
import SignUp from "./pages/SignUp/SignUp";
import Verification from "./pages/Verification/Verification";
import ThankYou from "./pages/ThankYou/ThankYou";

import "./App.css";
import "./styles/main.scss";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <AnonymousID /> */}
          <ScrollToTop />
          <TopNav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/saturn6" component={Saturn6} />
            <Route path="/tropical-freeze" component={TropicalFreeze} />
            <Route path="/bassline-basin" component={BasslineBasin} />
            <Route path="/reactor" component={BasslineBasin} />
            <Route path="/spooky" component={TropicalFright} />
            <Route path="/tropical-fright" component={TropicalFright} />
            <Route path="/nye" component={NYE} />
            <Route path="/events" component={Events} />
            <Route path="/cheat-sheet" component={CheatSheet} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={SignUp} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/verification" component={Verification} />
            <Route path="/thankyou" component={ThankYou} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
