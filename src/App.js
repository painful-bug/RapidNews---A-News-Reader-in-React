import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
// import Search from "./components/Search";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      darkMode: false,
      pageSize: 5,
      mode: ""
    };
  }

  toggleMode = () => {
    if (this.state.darkMode === true) {
      this.setState({ darkMode: false });
      this.state.mode = "light"
      console.log(this.state.darkMode);
    } else {
      this.setState({ darkMode: true });
      console.log(this.state.darkMode);
      this.state.mode = "dark"
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar mode={this.state.mode} toggleMode={this.toggleMode} />
          <Switch>
            <Route exact path="/">
              <Home darkMode={this.state.darkMode} />
            </Route>
            {/* <Route exact path="/search">
              <Search />
            </Route> */}
            {/* <Route exact path="/general">
              <News
                key="general"
                pageSize={this.state.pageSize}
                country="in"
                category="general"
                darkMode={this.state.darkMode}
              />
            </Route> */}
            <Route exact path="/business">
              <News
                key="Business"
                pageSize={this.state.pageSize}
                country="in"
                category="business"
                darkMode={this.state.darkMode}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="Entertainment"
                pageSize={this.state.pageSize}
                country="in"
                category="entertainment"
                darkMode={this.state.darkMode}
              />
            </Route>
            <Route exact path="/health">
              <News
                key="Health"
                pageSize={this.state.pageSize}
                country="in"
                category="health"
                darkMode={this.state.darkMode}
              />
            </Route>
            <Route exact path="/science">
              <News
                key="Science"
                pageSize={this.state.pageSize}
                country="in"
                category="science"
                darkMode={this.state.darkMode}
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="Sports"
                pageSize={this.state.pageSize}
                country="in"
                category="sports"
                darkMode={this.state.darkMode}
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="Technology"
                pageSize={this.state.pageSize}
                country="in"
                category="technology"
                darkMode={this.state.darkMode}
              />
            </Route>
          </Switch>
        </Router>
        {/* <News pageSize={this.state.pageSize} country="in" category="technology" /> */}
      </div>
    );
  }
}