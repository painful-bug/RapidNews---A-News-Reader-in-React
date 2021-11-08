import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      darkMode: false,
      pageSize: 5,
    };
  }

  toggleMode = () => {
    if (this.state.darkMode === true) {
      this.setState({ darkMode: false });
      console.log(this.state.darkMode);
    } else {
      this.setState({ darkMode: true });
      console.log(this.state.darkMode);
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar darkMode={this.state.darkMode} toggleMode={this.toggleMode} />
          <Switch>
            <Route exact path="/">
              <Home darkMode={this.state.darkMode}/>
            </Route>
            <Route exact path="/general">
              <News
                key="general"
                pageSize={this.state.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={this.state.pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={this.state.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                pageSize={this.state.pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={this.state.pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={this.state.pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={this.state.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
        {/* <News pageSize={this.state.pageSize} country="in" category="technology" /> */}
      </div>
    );
  }
}