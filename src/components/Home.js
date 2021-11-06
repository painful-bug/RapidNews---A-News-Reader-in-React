import React, { Component } from "react";
import "../styles/Home.css";
import News from "./News";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

export default class Home extends Component {
  buttonStyle = {
    display: "block",
    margin: "auto",
    textColor: "black",
  };

  divStyle = {
    marginTop: 30,
  };

  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      category: this.props.category,
      
    };
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // alert(`${this.state.query} was your query`);
    // event.preventDefault();
  };

  render() {
    return (
      // Navbar
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                RapidNews
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/general">
                      General
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/business">
                      Business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/health">
                      Health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/science">
                      Science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technology">
                      Technology
                    </Link>
                  </li>
                </ul>
              </div>

              <form onSubmit={this.handleSubmit} className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-outline-success">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>

        {/* Main Home Page */}

        <div className=" d-flex flex-column container ">
          <div className="container d-flex flex-column justify-content-center">
            <h1 className="text-center y py-5 my-4">RapidNews</h1>
            <h3 className="my-4" style={this.buttonStyle}>
              Your Ultimate News Solution
            </h3>
          </div>
          <ScrollLink to="news_section" smooth={true} duration={90}>
            <button
              type="button"
              className="btn btn-dark btn-grad mx-7 my-4 px-3"
              style={this.buttonStyle}
            >
              Go to News
            </button>
          </ScrollLink>

          <div id="news_section">
            <News
              key="general"
              pageSize={this.state.pageSize}
              country="in"
              category={this.state.category}
              query={this.state.query}
            />
          </div>
        </div>
      </>
    );
  }
}
