import React, { Component } from "react";
import NavBar from "./components/NavBar";
// import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div className="">
        <Router>
          {/* <NavBar /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/general">
              <Home
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <Home
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <Home
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <Home
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <Home
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <Home
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <Home
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
        {/* <Home pageSize={this.pageSize} country="in" category="technology" /> */}
      </div>
    );
  }
}
