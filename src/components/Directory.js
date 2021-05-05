import React, { Component } from "react";
import { Link } from "react-router-dom";

class Directory extends Component {
  render() {
    return (
      <div>
        <p className="Text">HELLO, WELCOME TO MACK'S PORTFOLIO.</p>
        <p
          style={{
            color: "lightgreen",
            fontFamily: "'VT323', 'monospace'",
            fontSize: "4vh",
            textShadow: "lightgreen 0px 0px 2px",
          }}
        >
          PLEASE SELECT AN OPTION...
        </p>
        <Link
          to="/who-am-i"
          style={{
            color: "lightgreen",
            fontFamily: "'VT323', 'monospace'",
            fontSize: "4vh",
            textShadow: "lightgreen 0px 0px 2px",
            textDecoration: "none",
          }}
        >
          > WHO IS MACK?
        </Link>
        <br />
        <Link
          to="/work"
          style={{
            color: "lightgreen",
            fontFamily: "'VT323', 'monospace'",
            fontSize: "4vh",
            textShadow: "lightgreen 0px 0px 2px",
            textDecoration: "none",
          }}
        >
          > WHAT HAS HE DONE?
        </Link>
        <br />
        <Link
          to="/skillset"
          style={{
            color: "lightgreen",
            fontFamily: "'VT323', 'monospace'",
            fontSize: "4vh",
            textShadow: "lightgreen 0px 0px 2px",
            textDecoration: "none",
          }}
        >
          > WHAT CAN HE DO?
        </Link>
        <br />
        <Link
          to="/communications"
          style={{
            color: "lightgreen",
            fontFamily: "'VT323', 'monospace'",
            fontSize: "4vh",
            textShadow: "lightgreen 0px 0px 2px",
            textDecoration: "none",
          }}
        >
          > HOW CAN I FIND HIM?
        </Link>
      </div>
    );
  }
}

export default Directory;
