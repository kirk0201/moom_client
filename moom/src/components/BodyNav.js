import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class BodyNav extends Component {
  // 바디 컴포넌트의 네비 바
  render() {
    const { handleHeader, header } = this.props;
    return (
      <>
        {header === "Custom part" ? (
          <div className="grid text-gray-400 ">
            <div
              className="justify-self-start mr-3"
              onClick={() => handleHeader("Basic part")}
            >
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left w-5 h-5"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </Link>
            </div>
            <div
              className="justify-self-end"
              onClick={() => handleHeader("Basic part")}
            >
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right w-5 h-5 ml-1"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid text-gray-400 ">
            <div
              className="justify-self-start"
              onClick={() => handleHeader("Custom part")}
            >
              <Link to="/custom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left w-5 h-5"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </Link>
            </div>
            <div
              className="justify-self-end"
              onClick={() => handleHeader("Custom part")}
            >
              <Link to="/custom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right w-5 h-5 ml-1"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }
}

// withStyles(styles)
export default withRouter(BodyNav);
