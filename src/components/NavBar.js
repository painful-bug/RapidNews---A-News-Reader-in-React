import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

export default class NavBar extends Component {

  listener = null;
  state = {
    nav:false
  }
  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }
   componentWillUnmount() {
      window.removeEventListener('scroll');
    }
   handleScroll= () => {
     if (window.pageYOffset > 140) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }

   }

  render() {
    return (
      <div>
        {/* <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${this.state.nav && 'Nav__black'}`}> */}
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark navbarExtra scrolled`}>
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


            <div className="form-check form-switch">
          <input
            className="form-check-input"
            onClick={this.props.toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
        
          </div>
        </nav>
      </div>
    );
  }
}
