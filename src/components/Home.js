import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import "../styles/Home.css";

export default class Home extends Component {
  buttonStyle = {
    display: "block",
    margin: "auto",
    };
    divStyle = {
        marginTop: 30
    }
  render() {
    return (
        <div className=" d-flex flex-column container ">
         <div className="container d-flex flex-column justify-content-center">
            
          <h1 className="text-center y py-5 my-4">RapidNews</h1>
            <h3 className="my-4" style={this.buttonStyle}>
            Your Ultimate News Solution
          </h3>
            </div>
            <Link to="/general">

        <button
          type="button"
          className="btn btn-primary mx-7 my-4 px-3"
          style={this.buttonStyle}
            >
          Go to News
        </button>
            </Link>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
             
      </div>
    );
  }
}
