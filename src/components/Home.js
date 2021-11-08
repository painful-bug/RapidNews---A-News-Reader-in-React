import React, { Component } from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/Home.css";
import News from "./News";
import { Link } from "react-scroll";
export default class Home extends Component {
  buttonStyle = {
    display: "block",
    margin: "auto",
    textColor: "black",
  };
  divStyle = {
    marginTop: 30,
  };
 
  constructor() {
    super();
    this.state = {
      pageSize: 10,
    };
  }



  render() {
    return (
      <div className=" d-flex flex-column container ">


        <div className="container d-flex flex-column justify-content-center">
          <h1 className="text-center y py-5 my-4">RapidNews</h1>
          <h3 className="my-2" style={this.buttonStyle}>
            Your Ultimate News Solution
          </h3>
        
          
  
        
        
        
        </div>
        <Link to="news_section" smooth={true} duration={90}>
          <button
            type="button"
            className="btn btn-dark btn-grad mx-7 my-4 px-3"
            style={this.buttonStyle}
          >
            Go to News
          </button>
        </Link>

        <div id="news_section">
          <br />
          <br/>
          <br/>
          
          <News
            key="general"
            pageSize={this.pageSize}
            country="in"
            category="general"
            darkMode={this.props.darkMode}
          />
        </div>
      </div>
    );
  }
}
