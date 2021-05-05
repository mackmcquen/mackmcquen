import React, { Component } from "react";
import { Link } from "react-router-dom";

class Work extends Component {
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
          WHAT HAS HE DONE?
        </p>
        <p
          style={{
            color: "lightgreen",
            fontFamily: "'VT323', 'monospace'",
            fontSize: "4vh",
            textShadow: "lightgreen 0px 0px 2px",
          }}
        >
          CHECK OUT THESE PROJECTS:
        </p>
        <a
          href="https://gamutart.netlify.app"
          target="_blank"
          ref="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p
            style={{
              color: "lightgreen",
              fontFamily: "'VT323', 'monospace'",
              fontSize: "4vh",
              textShadow: "lightgreen 0px 0px 2px",
            }}
          >
            > GAMUT
          </p>
        </a>
        <p
          style={{
            color: "lightgreen",
            fontFamily: "'VT323', 'monospace'",
            fontSize: "4vh",
            textShadow: "lightgreen 0px 0px 2px",
          }}
        >
          (AN ARTWORK CATALOGUING APP BUILT IN JAVASCRIPT, REACT & REDUX
          (FRONTEND), RUBY & RUBY ON RAILS, UTILIZING A POSTGRES DATABASE
          (BACKEND).)
        </p>
        <a
          href="https://github.com/mackmcquen/star-wars-capital-ship"
          target="_blank"
          ref="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p
            style={{
              color: "lightgreen",
              fontFamily: "'VT323', 'monospace'",
              fontSize: "4vh",
              textShadow: "lightgreen 0px 0px 2px",
            }}
          >
            > STAR WARS CAPITAL SHIP
          </p>
        </a>
        <p
          style={{
            color: "lightgreen",
            fontFamily: "'VT323', 'monospace'",
            fontSize: "4vh",
            textShadow: "lightgreen 0px 0px 2px",
          }}
        >
          (AN UNOFFICIAL STAR WARS CLI GAME BUILT ENTIRELY IN RUBY.)
        </p>
      </div>
    );
  }
}

export default Work;
