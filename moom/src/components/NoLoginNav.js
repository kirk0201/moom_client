import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/NologinNav.css";
import "tailwindcss/tailwind.css";
import logoimg from "../images/logo700700.png";

class NoLoginNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTarget: null,
      navOpen: false,
    };
  }

  handleNav = (value) => {
    this.setState({ navTarget: value });
  };

  handleNavOpen = (value) => {
    this.setState({ navOpen: value });
  };

  scrollToMain = () => {
    this.handleNav("Main");
    window.scrollTo(0, 0);
  };

  // 소개 버튼
  scrollToIntroduce = () => {
    this.handleNav("Introduce");
    window.scrollTo(0, 590);
  };

  // 체험하기 버튼튼
  scrollToExperience = () => {
    this.handleNav("Experience");
    window.scrollTo(0, 1550);
  };

  // 비로그인시 네비 바
  render() {
    const { navOpen } = this.state;
    return (
      <div className="fixed w-full z-10">
        <nav className="bg-gray-800">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img
                      className="h-12 w-12"
                      src={logoimg}
                      alt="Workflow"
                      onClick={() => {
                        this.handleNav("Main");
                      }}
                    />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <Link to="/">
                      <span
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                        onClick={this.scrollToMain}
                      >
                        메인
                      </span>
                    </Link>
                    <Link to="/">
                      <span
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                        onClick={this.scrollToIntroduce}
                      >
                        소개
                      </span>
                    </Link>
                    <Link to="/">
                      <span
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                        onClick={this.scrollToExperience}
                      >
                        체험하기
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* <!-- Profile dropdown --> */}
                  <Link to="/login">
                    <span
                      onClick={() => {
                        this.handleNav("Login");
                      }}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                    >
                      로그인
                    </span>
                  </Link>
                  <Link to="/signup">
                    <span
                      onClick={() => {
                        this.handleNav("Sign up");
                      }}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                    >
                      회원가입
                    </span>
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                  {!navOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      onClick={() => this.handleNavOpen(true)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      onClick={() => this.handleNavOpen(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  {/* <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
                </button>
              </div>
            </div>
          </div>

          {/* <!--/
      Mobile menu, toggle classNamees based on m/enu state.
/
      Open: "block", closed: "hidden"/
    -->/ */}
          {navOpen ? (
            <div className="block md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link to="/">
                  <span
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => {
                      this.handleNav("Main");
                    }}
                  >
                    메인
                  </span>
                </Link>
                <Link to="/login">
                  <span
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => {
                      this.handleNav("Login");
                    }}
                  >
                    로그인
                  </span>
                </Link>
                <Link to="/signup">
                  <span
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => {
                      this.handleNav("Sign up");
                    }}
                  >
                    회원가입
                  </span>
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </nav>
        <header className="bg-white shadow hidden md:block">
          <div className="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {this.state.navTarget}
            </h1>
          </div>
        </header>
      </div>
    );
  }
}

export default NoLoginNav;
