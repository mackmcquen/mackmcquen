import React, { Component } from "react";
import { Link } from "react-router-dom";

class Bio extends Component {
  render() {
    return (
      <div>
        <Link
          to="/"
          style={{
            color: "lightgreen",
            fontFamily: "'VT323', 'monospace'",
            fontSize: "4vh",
            textShadow: "lightgreen 0px 0px 2px",
            textDecoration: "none",
          }}
        >
          ...DIRECTORY
        </Link>
        <p
          style={{
            color: "lightgreen",
            fontFamily: "'VT323', 'monospace'",
            fontSize: "4vh",
            textShadow: "lightgreen 0px 0px 2px",
          }}
        >
          WHO IS MACK?
        </p>
        <p
          style={{
            color: "lightgreen",
            fontFamily: "'VT323', 'monospace'",
            fontSize: "4vh",
            textShadow: "lightgreen 0px 0px 2px",
          }}
        >
          A DEVELOPER BASED IN CHICAGO, ILLINOIS. CURRENTLY ON THE TRAJEKTORY
          DEV TEAM AS A SOFTWARE ENGINEER INTERN.
        </p>
      </div>
    );
  }
}

export default Bio;
