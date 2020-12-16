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
    };
  }

  handleNav = (value) => {
    this.setState({ navTarget: value });
  };

  scrollToIntroduce = () => {
    this.handleNav("Introduce");
    window.scrollTo(0, 500);
  };

  scrollToExperience = () => {
    this.handleNav("Experience");
    window.scrollTo(0, 1000);
  };

  // 비로그인시 네비 바
  render() {
    return (
      <div class="fixed w-full z-10">
        <nav class="bg-gray-800">
          <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <Link to="/">
                    <img
                      class="h-12 w-12"
                      src={logoimg}
                      alt="Workflow"
                      onClick={() => {
                        this.handleNav("Main");
                      }}
                    />
                  </Link>
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <Link to="/">
                      <span
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                        onClick={() => {
                          this.handleNav("Main");
                        }}
                      >
                        메인
                      </span>
                    </Link>
                    <span
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                      onClick={this.scrollToIntroduce}
                    >
                      소개
                    </span>

                    <span
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                      onClick={this.scrollToExperience}
                    >
                      체험하기
                    </span>
                  </div>
                </div>
              </div>
              <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                  {/* <!-- Profile dropdown --> */}
                  <Link to="/login">
                    <span
                      onClick={() => {
                        this.handleNav("Login");
                      }}
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                    >
                      로그인
                    </span>
                  </Link>
                  <Link to="/signup">
                    <span
                      onClick={() => {
                        this.handleNav("Sign up");
                      }}
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                    >
                      회원가입
                    </span>
                  </Link>
                </div>
              </div>
              <div class="-mr-2 flex md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">Open main menu</span>
                  {/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
                  <svg
                    class="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!--/
      Mobile menu, toggle classes based on m/enu state.
/
      Open: "block", closed: "hidden"/
    -->/ */}
          <div class="block md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link to="/">
                <span
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    this.handleNav("Main");
                  }}
                >
                  메인
                </span>
              </Link>
              <Link to="/login">
                <span
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    this.handleNav("Login");
                  }}
                >
                  로그인
                </span>
              </Link>
              <Link to="/signup">
                <span
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    this.handleNav("Sign up");
                  }}
                >
                  회원가입
                </span>
              </Link>
            </div>
          </div>
        </nav>
        <header class="bg-white shadow">
          <div class="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">
              {this.state.navTarget}
            </h1>
          </div>
        </header>
      </div>
    );
  }
}

export default NoLoginNav;
